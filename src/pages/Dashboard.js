
class Dashboard extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
         <table id="dashboard-layout-table">
         <tr>
            <td id="col1">
                <curr-read-preview></curr-read-preview>
            </td>
            <td id="col2">
                <read-sched-preview></read-sched-preview>
            </td>
            <td id="col3">
                <table>
                    <tr>
                        <library-alert></library-alert>
                    </tr>
                    <tr>
                        <read-stat-preview></read-stat-preview>
                    </tr>
                </table>
            </td>
         </tr>
         </table>
        `;

    }
}

customElements.define('dashboard-page', Dashboard);