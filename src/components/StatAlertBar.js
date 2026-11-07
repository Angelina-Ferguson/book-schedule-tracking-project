
class ShelflistBar extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
            <h3>My Account <image src="./public/images/token_1.png"/></h3>
            <div></div>
        `;

    }
}

customElements.define('stat-alert-bar', ShelflistBar);