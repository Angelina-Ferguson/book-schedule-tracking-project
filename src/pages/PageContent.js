

class PageContent extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        <p>no content to display</p>
        `;

    }
}

customElements.define('page-content', PageContent);