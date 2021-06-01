import { LitElement, html, customElement } from 'lit-element';
import './main-buttom';

export class MainForm extends LitElement {

    static get properties() {
        return {
            tituloForm: {type: String},
            campos: {type: Object},
            enviar: { type: String},
            borrar: { type: String},
            activo: { type: Boolean},
            categorias: { type: Array},
            checkActived: {type: Boolean},
            paises: { type: Array }
        }
    }

    constructor() {
        super();
        this.tituloForm = "Formulario de contacto",
        this.enviar = "Enviar",
        this.borrar = "Limpiar",
        this.activo = true,
        this.paises = [];
    
    }

    checkActive(evt) {
        let estado = this.shadowRoot.querySelector('#Check').checked;
        this.dispatchEvent(new CustomEvent('check-click', {
            bubbles: true,
            composed: true,
            detail: estado
        }))
    }

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

        <style>
            form {
                background: #fff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0px 0px 10px;
            }

        </style>

        <section class="container-fluid mt-3">
            <section class="row justify-content-center">
                <section>

                <form>
                    <div class="form-row row mt-3">
                        <div class="form-group col-6">
                            <label for="inputEmail">${this.campos.usuario}</label>
                            <input type="usuario" class="form-control" id="inputUsuario">
                        </div>
                        <div class="form-group col-6">
                            <label for="inputPass">${this.campos.pass}</label>
                            <input type="password" class="form-control" id="inputPass">
                        </div>
                    </div>

                    <div class="form-group mt-3">
                        <label for="inputDireccion">${this.campos.direccion}</label>
                        <input type="text" class="form-control" id="inputDireccion">
                    </div>
            
                    <div class="form-row row mt-3">
                        <div class="form-group col-6">
                            <label for="inputCity">${this.campos.pais}</label>
                            <input type="text" class="form-control" id="inputPais">
                        </div>
                        <div class="form-group col-6">
                            <label for="inputState">${this.campos.ciudad}</label>
                            <input type="text" class="form-control" id="inputCiudad">
                        </div>
                    </div>

                    <div class="form-group mt-3">
                        <label for="inputInfo">Paises:</label>
                        <select id="inputInfo" class="form-control">
                            <option selected>Eliga una opcion</option>
                            ${this.paises.map(elem => {
                                return html `<option value="${elem.code}">${elem.name}</option>`
                            })}
                        </select>
                    </div>

                    <div class="form-group mt-3">
                        <div class="form-check">
                            <input @click="${this.checkActive}" class="form-check-input" type="checkbox" id="Check">
                            <label class="form-check-label">Acepto las condiciones</label>
                        </div>
                    </div>

                    ${this.checkActived
                        ? html `<button type="submit" class="btn btn-primary mt-3">${this.enviar}</button>`
                        : html `<button type="submit" class="btn btn-primary mt-3 disabled">${this.enviar}</button>`
                    }
            
                </form>

                </section>
            </section>
        </section>
        
        `;

    }
}

customElements.define('form-app', MainForm);