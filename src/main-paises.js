import { LitElement, html } from 'lit-element';

export class mainPaises extends LitElement {

    static get properties() {
        return {
            url: {type: String},
        }
    }

    constructor() {
        super();
        this.url = 'https://restcountries.eu/rest/v2/region/europe'
    }

    // ASYCN AWAIT
    loadRequest() {
        return new Promise((resolve, reject) => {
            const http = new XMLHttpRequest()

            http.open("GET", this.url)
            http.onreadystatechange = function(){
                
            if(this.readyState == 4) {
                if(this.status >= 200 && this.status <=400 ){
                    this.data = JSON.parse(this.responseText);
                    let paises = [];

                    this.data.forEach(element => {
                        paises.push({
                            code: element.alpha2Code,
                            name: element.name
                            })
                        });
                        resolve(paises)
                    } else {
                        reject('Error en la peticion')
                    }
                } 
            }
            http.send()
        })
    }

    async sendData() {
        let paises = await this.loadRequest();
        document.dispatchEvent(new CustomEvent('peticion-paises', {
            bubbles: true,
            composed: true,
            detail: {data: paises}
        }))
    }

    // PROMISE NORMAL

    /*loadRequestPROMISE() {
        const PROMISE = new Promise((resolve, reject) => {
            const url = 'https://restcountries.eu/rest/v2/all'
            const http = new XMLHttpRequest()

            http.open("GET", url)
            http.onreadystatechange = function(){
                
            if(this.readyState == 4 ) {
                if(this.status >= 200 && this.status <=400 ){
                    this.data = JSON.parse(this.responseText);
                    let paises = [];

                    this.data.forEach(element => {
                        paises.push({
                            code: element.alpha2Code,
                            name: element.name
                            })
                        });
                        resolve(paises)
                    } else {
                        reject('Error en la peticion')
                    }
                } 
            }
            http.send()
        })

        PROMISE.then(resolve => {
            this.sendDataPROMISE(resolve);
        })
        .catch(error => {
            console.log(error);
        })
    }

    sendDataPROMISE(paises) {
        document.dispatchEvent(new CustomEvent('peticion-paises', {
            bubbles: true,
            composed: true,
            detail: {data: paises}
        }))
    }*/

    render() {
        return html `

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

        <!--<button @click="${this.loadRequestPROMISE}" type="submit" class="btn btn-primary mt-3 ">Paises Promesa Normal</button>-->
        <button @click="${this.sendData}" type="submit" class="btn btn-primary mt-3 ">Paises ASYCN AWAIT</button>

    </div>
        `
    }

}

customElements.define('paises-app', mainPaises);