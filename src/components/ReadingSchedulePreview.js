
class ReadingSchedulePreview extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div >
                <h2 style = "text-align: center;" > Reading Schedule </h2>
                <div>
                <table>
                <tr>
                    <td>
                        <table>
                        <tr>
                        <td>10/16</td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9w-F0jAvmgfrWgCyRtqWcb9eN5PubciMW1ElbmHvaj3NnGV9ol-V3VWUsZU8eYNXqy7LBapsZ5d3vwYbFtFY2AhVNWY2kR0ILL198F5-tkJF0nOlif7Se&usqp=CAc" /> </td>
                        <td>Crown Me Dead by Liv Zander</td>
                        </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                    <table>
                        <tr>
                        <td>10/18</td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUO_TbYBRKQjZVouPHxDslHTr_ttiQcWAF-A86tSqtuA&s=10" /> </td>
                        <td>Crown Me Yours by Liv Zander</td>
                        </tr>
                    </table>
                    </td>
                </tr>
                <tr>
                    
                    <td>
                    <table>
                        <tr>
                        <td>10/19</td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCXHm4lUf38K-SG-q5mvZbKrUXJ-RKXl8MrjxrElcmg&s=10" /> </td>
                        <td>Shield of Sparrows by Devney Perry</td>
                        </tr>
                    </table>
                    </td>
                </tr>
                <tr>
                    
                    <td>
                    <table>
                        <tr>
                        <td>10/19</td>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCXHm4lUf38K-SG-q5mvZbKrUXJ-RKXl8MrjxrElcmg&s=10" /> </td>
                        <td>Shield of Sparrows by Devney Perry</td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </div>
        </div>
        `;
    }
}

customElements.define('read-sched-preview', ReadingSchedulePreview);