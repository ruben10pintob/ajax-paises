import { LitElement, html } from 'lit-element';

export class mainHeader extends LitElement {

    static get properties() {
        return {
            headerData: { type: Object},
            
        }
    }

    constructor() {
        super();
    }

    render() {
        return html ` 
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

        <style>
            header {
                display: flex;
            }

            .links {
                margin-left: 50px;
            }

            a {
                text-decoration:none;
                color: black;
            }

        </style>
        
        <header class="container-fluid">

            <div>
                <a href="#"><h1>BBVA</h1></a>
            </div>

            <div class="links mt-3">
                <a href="#">${this.headerData.headerInicioSesion}</a>
                <a href="#" class="links">${this.headerData.headerRegistro}</a>
            </div>


            

        </header>
        
        `
    }

}

customElements.define('header-app', mainHeader);