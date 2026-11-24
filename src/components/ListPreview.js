
class ListPreview extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div >
                <h4> View All (?)</h2>
                <div>
                <table>
                <tr>
                    <td>
                    <div class="shelf-cover addList"> + Add Shelflist</div>
                    </td>
                </tr>
                </table>
            </div>
        </div>
        `;
    }
}

customElements.define('list-preview', ListPreview);