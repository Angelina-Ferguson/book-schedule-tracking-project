
class LibraryAlert extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render () {
        this.innerHTML = `
        <div style = "background-color: #e1d984; margin: 4 auto; padding: 10px 50px 20px; border-radius: 10px">
                <h2 style = "text-align: center;" > Library Alert </h2>
                Your book is due 20 days from now:
                <table>
                        <tr>
                        <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCXHm4lUf38K-SG-q5mvZbKrUXJ-RKXl8MrjxrElcmg&s=10" /> </td>
                        <td>Shield of Sparrows by Devney Perry</td>
                        </tr>
                    </table>
        </div>
        `;
    }
}

customElements.define('library-alert', LibraryAlert);