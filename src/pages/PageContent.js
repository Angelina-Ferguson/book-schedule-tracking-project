

class PageContent extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <div id="page-content">
                <log-in-page></log-in-page>
            </div>
        `;

    }
}

customElements.define('page-content', PageContent);