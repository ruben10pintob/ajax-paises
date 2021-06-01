import {LitElement, html} from 'lit-element'; 
import styles from './styles/styles';

export class mainButtom extends LitElement {


    /**
     * This component is composed of an input field and two buttons. 
     */
    static get properties() {
        return {
            enviar: { type: String},
            borrar: { type: String},
            activo: { type: Boolean},
            cambiar: { type: String},
            inputValue: { type: String},
            enviado: { type: Boolean},
            prueba: { type: String }
        }
    }

    constructor() {
        super();
        this.enviar = 'Enviar',
        this.borrar = 'Borrar',
        this.activo = true,
        this.cambiar = 'Cambiar',
        this.enviado = false,
        this.inputValue = '';

        document.addEventListener('keyup-input', (evt) => {
            this.prueba = evt.detail;
            
          })
        
    }

    static get styles(){
        return[styles];
    }

    cambiarNombre() {
        this.cambiar = 'Cambiado';
    }

    pintaInput() {
        this.inputValue = this.shadowRoot.querySelector('#input').value;
        this.enviado = true;
    }

    keyup() {
        this.inputValue = this.shadowRoot.querySelector('#input').value;
        
        this.dispatchEvent(new CustomEvent('keyup-input', {
            bubbles: true,
            composed: true,
            detail: this.inputValue
        }))
    }

    render() {

        return html `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

        <input @keyup="${this.keyup}" type="text" class="form-control" id="input" placeholder="...">

        ${this.activo 
            ? html `<button @click="${this.pintaInput}" type="submit" class="btn btn-primary mt-3" id="button-send">${this.enviar}</button>`
            : html `<button  type="submit" class="btn btn-primary mt-3">${this.enviar}</button>`
        }

        
        <button "type="submit" @click="${this.cambiarNombre}" id="buttom-change" class="btn btn-danger mt-3" id="cambiar">${this.cambiar}</button>

        ${this.enviado
            ? html `<p>${this.inputValue}</p>`
            : html ``
        
        }

        `;

        

    }

}

customElements.define('main-buttom', mainButtom);