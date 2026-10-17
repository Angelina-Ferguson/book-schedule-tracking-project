
class Dashboard extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        <h1> Welcome! </h1>
         <table id="dashboard-layout-table">
         <tr>
            <td>
                <curr-read-preview></curr-read-preview>
            </td>
            <td>
                <read-sched-preview></read-sched-preview>
            </td>
            <td>
                <table>
                    <tr>

                    </tr>
                    <tr>
                    
                    </tr>
                </table>
            </td>
         </tr>
         </table>
        `;

    }
}

customElements.define('dashboard-page', Dashboard);