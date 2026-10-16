

class PageContent extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
         <dashboard-page></dashboard-page>
        `;

    }
}

customElements.define('page-content', PageContent);