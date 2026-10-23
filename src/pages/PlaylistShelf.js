
class TBRShelf extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        this.render();
    }

    render () {
        function generateCards (count) {
            var cardHTML = ``;
            for (var i = 0; i < count; i++){
                cardHTML += `<playlist-card id="${i}"></playlist-card>`
            }

            return cardHTML
        }     
        
        
        
        var shelfHTML = `

        <div id="topbar-row">
            <input class="playlist-search" type="search" placeholder="Search Playlists"/>
            <p><input type="checkbox" id="showCommunity"/><label for="showCommunity"> Show Community Playlists</label></p>
            <p><input type="checkbox" id="showMine"/><label for="showMine"> Show My Playlists</label></p>
            <button>New Shelf Playlist</button>
        </div>

        <div id="playlist-container">
        `; 

        shelfHTML += `${generateCards(20)} </div>`

        this.innerHTML = shelfHTML
        

    }
}

customElements.define('playlist-shelf-page', TBRShelf);