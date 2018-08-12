const state = {
    selectedEventTimeInSec: 0
}

const getters = {
    getSelectedEventTime(state) {
        return state.selectedEventTimeInSec;
    }
}

const mutations = {
    setCurrentEventTime(state, timeInSec) {
        state.selectedEventTimeInSec = timeInSec;
    },
    unsetCurrentEventTime(state, timeInSec) {
        state.selectedEventTimeInSec = 0;
    }
}

export default {
    state,
    getters,
    mutations
}