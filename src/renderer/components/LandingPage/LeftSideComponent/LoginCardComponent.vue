<template>
<div class="wrapper">
		<Card id="login-card">
			<div id="login-card-head" slot="title">
				<Icon type="calendar"></Icon><br>
			</div>
		<h1>Google Calendar Countdown</h1><br><br>
		<strong>
			<Button class="login-btn" type="ghost" size="large" icon="social-google" @click="startLoginProcess">
				Log - In
			</Button>
		</strong>
		</Card>

</div>
</template>

<script>
import {ipcRenderer} from 'electron';

ipcRenderer.on('google-oauth-error',(event,err)=>{
	alert('We require your consent to use calendar, please login to continue :(');
})
export default{
	methods:{
		kuchbhi(){},
		async startLoginProcess(){
			ipcRenderer.send('google-oauth','getToken');
			ipcRenderer.on('google-oauth-reply',(event,{access_token})=>{
				this.$store.commit("logInUser",access_token);
				this.$store.dispatch('getUserData');
				this.$store.dispatch('saveCalendarList',access_token);
			});
		}
	},
	computed:{
	}
}
</script>

<style scoped>
.wrapper{
	padding: 40px;
	height: 100%;
	color: #495060;
}
#login-card-head{
	font-size: 150px;
	text-align: center;
	overflow: inherit;
}
#login-card{
	height: 100%;
	border: none;
	text-align: center;
}
.login-btn{
   background-color : #1C2438;
   color: #f8f8f9;
}
</style>