
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
                <td id="sidebar-column"><mini-calendar></mini-calendar></td>
                <td></td>
            </tr>
        </table>
        `;

    }
}

customElements.define('reading-schedule-page', ReadingSchedule);