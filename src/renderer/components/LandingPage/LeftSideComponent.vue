<template>
<div class="wrapper">
    <LoginCardComponent v-if="!isLogedIn"></LoginCardComponent>
    <ProfileComponent v-else></ProfileComponent>    
    <CalendarListComponent v-if="isLogedIn"></CalendarListComponent>
    <TimerComponent v-if="isLogedIn"></TimerComponent>
</div>
</template>

<script>
import LoginCardComponent from './LeftSideComponent/LoginCardComponent'
import ProfileComponent from './LeftSideComponent/ProfileComponent'
import CalendarListComponent from './LeftSideComponent/CalendarListComponent'
import TimerComponent from './LeftSideComponent/TimerComponent'


export default{
    components : {
        LoginCardComponent,
        ProfileComponent,
        CalendarListComponent,
        TimerComponent
    },
    computed:{
        isLogedIn(){
            return this.$store.getters.isUserLogedIn;
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100%;
    overflow: hidden;
}


</style>
