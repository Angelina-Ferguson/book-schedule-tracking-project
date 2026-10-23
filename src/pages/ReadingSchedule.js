
class ReadingSchedule extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }
    render () {      
        this.innerHTML = `
        <table> 
            <tr>
                <td id="sidebar-column"><reading-sched-side-bar><reading-sched-side-bar></td>
                <td><read-sched-preview></read-sched-preview></td>
            </tr>
        </table>
        `;

    }
}

customElements.define('reading-schedule-page', ReadingSchedule);