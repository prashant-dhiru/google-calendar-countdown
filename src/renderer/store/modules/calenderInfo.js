import axios from "axios";

const state = {
    calendarList : [],
    selectedCalendar : '',
    eventList : []
}

const getters = {
    getCalendarList(state){
        return state.calendarList;
    },
    getEventList(state){
        return state.eventList;
    },
    getEventListLength(state){
        return state.eventList.length;
    }
}

const mutations = {
    saveCalendarList(state, acquiredCalendarList) {
        state.calendarList = acquiredCalendarList;
    },
    saveEventList(state, acquiredEventList) {
        state.eventList = acquiredEventList;
    },
    setCurrentCalendar(state,calendarId){
        state.selectedCalendar = calendarId;
    },
    clearCalendar(state){
        state.eventList = [],
        state.calendarList = [],
        state.selectedCalendar = ''
    }
    
}

const actions = {
    saveCalendarList(context,accessToken) {
        var url = `https://www.googleapis.com/calendar/v3/users/me/calendarList?fields=items(backgroundColor%2Cid%2Csummary%2CtimeZone)%2CnextPageToken%2CnextSyncToken&`+`&access_token=${accessToken}`;
        axios.get(url)
            .then(function (response) {
                // console.log(response.data.items);   
                context.commit('saveCalendarList',response.data.items);           
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
    saveEventList(context,accessToken){
        var cal = context.state.selectedCalendar;
        var date = new Date();

        date = encodeURIComponent(date.toISOString());
        cal = encodeURIComponent(cal); 

        var url = `https://www.googleapis.com/calendar/v3/calendars/${cal}/events?maxResults=10&orderBy=startTime&singleEvents=true&timeMin=${date}&fields=items(id%2Cstart%2Csummary)`+`&access_token=${accessToken}`;
        axios.get(url)
            .then(function (response) {
                // console.log(response.data.items);
                context.commit('saveEventList',response.data.items);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}