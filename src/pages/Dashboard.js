
class Dashboard extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        <p>This is the Dashboard</p>
        `;

    }
}

customElements.define('dashboard-page', Dashboard);