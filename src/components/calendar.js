

class Calendar extends HTMLElement {

    
    constructor() {
        super();
        

    }
    connectedCallback() {
        this.render();
    }
    render () {
        const CALENDAR_MONTHS = {
            "jan": "January", "feb":"February", "mar":"March",
            "apr":"April", "may": "May", "jun":"June",
            "jul":"July", "aug":"August", "sep":"September",
            "oct":"October", "nov":"November", "dec":"December"
        }

        const CALENDAR_DAYS = {
            "Mo":"Monday",
            "Tu":"Tuesday",
            "We":"Wednesday",
            "Th":"Thursday",
            "Fr":"Friday",
            "Sa":"Saturday",
            "Su":"Sunday"
        }
    

        //need to generate a basic calendar
        // line 0 for the month
        // line 1 for the days of the week, 7 tds long
        // 2 - 6 for the weeks. 7 tds per week
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
        let currentDayOfTheWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        let currentDay = new Date().getDate();
        let dotwDay1CurrentMonth = new Date(currentYear, currentMonth, 1).toLocaleDateString('en-US', { weekday: 'long' });

        let calendarTableHTML = ``;
        
        calendarTableHTML = `<table><tr><td style="colspan: 7;"> ${currentMonth} </td></tr><tr>`;

        Object.keys(CALENDAR_DAYS).map((key) => {
            calendarTableHTML += `<td>${key}</td>`
        })

        //this will iterate through the days of the month, however need to assign values to the months for day amounts and consider leap years for february
        // for (var i = 0; i < ) {

        // }

        calendarTableHTML += `</tr></table>`

        this.innerHTML = calendarTableHTML;
        



    }
}

customElements.define('mini-calendar', Calendar);