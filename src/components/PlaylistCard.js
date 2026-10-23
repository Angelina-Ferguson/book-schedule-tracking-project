class PlaylistCard extends HTMLElement {
    static observedAttributes = ["id"]
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
            <div>
                <table>
                    <tr>
                        <td>Playlist ${this.id}:</td>
                        <td>Jane Austen Book Club</td>
                        <td>Duration: October 3rd - 31st</td>
                    </tr>
                </table>
            </div>
                
        `;
    }
}

customElements.define('playlist-card', PlaylistCard);