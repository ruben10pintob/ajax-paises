import { LitElement, html } from 'lit-element';
import { configForm } from './config/config-form';
import './main-header';
import './formulario';
import './main-footer';
import './main-paises';


export class mainApp extends LitElement {

    static get properties() {
        return {
            headerData: { type: Object},
            footerData: { type: Object},
            tituloFooter: { type: String},
            campos: { type: Object },
            categorias: { type: Array},
            checkActived: { type: Boolean},
            paises: { type: Array}
        }
    }

    constructor() {
        super();

        this.paises = [],
        this.headerData = {
            headerInicioSesion: 'Iniciar sesion',
            headerRegistro: 'Registrarse'
        }

        this.footerData = {
            footerTitulo: 'BBVA'
        }

        document.addEventListener('check-click', (evt) => {
            this.checkActived = evt.detail;
        }),

        document.addEventListener('peticion-paises', (evt) => {
            console.log(evt.detail.data);
            this.paises = evt.detail.data;
        })

        this.tituloFooter = 'BBVA',

        this.campos = {
            usuario: 'Usuario',
            pass: 'Contraseña',
            direccion: 'Direccion',
            pais: 'Pais',
            ciudad: 'Ciudad'
        }

        this.categorias = ['Recursos humanos', 'Sobre nosotros', 'Marketing', 'Otros']

    }

    render() {
        return html`

            <header-app .headerData="${this.headerData}" .footerData="${this.footerTitulo}"></header-app>
            <form-app .campos="${this.campos}" .categorias="${this.categorias}" ?checkActived="${this.checkActived}" .paises=${this.paises}></form-app>
            <footer-app .tituloFooter="${this.tituloFooter}"></footer-app>
            <paises-app></paises-app>
            <!--<main-buttom></main-buttom>-->
            
        `;

    }

}

customElements.define('main-app', mainApp);