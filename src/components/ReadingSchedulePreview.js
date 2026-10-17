
class ReadingSchedulePreview extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div style = "background-color: #e1d984; margin: 4 auto; padding: 10px 50px 20px; border-radius: 10px">
                <h2 style = "text-align: center;" > Reading Schedule </h2>
                <table>
                <tr>
                    <th>
                    Date
                    </th>
                    <th>
                    Book
                    </th>
                </tr>
                </table>
        </div>
        `;
    }
}

customElements.define('read-sched-preview', ReadingSchedulePreview);