<template>
<div class="wrapper">
    <div style="text-align:center">
        <h1>Calendar List</h1>
    </div>
    <hr>
    <div>
        <ul>
            <li v-for="calendar in calendarList">
            <h3 @click="setCurrentCalendar(calendar.id)"><a>{{calendar.summary}}</a></h3>            
            </li>
        </ul>
    </div>
    <hr>

</div>
</template>

<script>
export default {
    methods: {
        kuchbhi() {},
        setCurrentCalendar(calendarId){
            this.$store.commit('setCurrentCalendar',calendarId);
            this.$store.dispatch('saveEventList',this.$store.getters.getAccessToken);
        }
    },
    computed: {
        calendarList() {
            return this.$store.getters.getCalendarList;
        }
    }
}
</script>

<style scoped>
.wrapper {
    padding: 25px;
    color: #f8f8f9;
    height: initial;
}
a{
    color: #f8f8f9;
}
h3{
    padding: 4px;
}

</style>