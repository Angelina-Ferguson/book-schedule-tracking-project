
class TBRShelf extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        <p>This is the TBR Shelf Page</p>
        `; 

    }
}

customElements.define('tbr-shelf-page', TBRShelf);