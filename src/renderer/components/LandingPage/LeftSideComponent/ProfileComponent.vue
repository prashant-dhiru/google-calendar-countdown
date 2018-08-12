<template>
<div class="wrapper">
	<Card id="card">
		<div slot="title">
			<Row>
				<Col span="4">
					<Avatar size="large" :src="userData.pic"/>
				</Col>
				<Col span="20">
					<p id="userName">{{userData.name}}</p><br>
					<p id="userEmail">{{userData.email}}</p>
				</Col>
			</Row>
		</div>
		<div>
			<Row>
				<Col span="12" class="centerAlign">
					<Button  type="text" long >Sync</Button>
				</Col>
				<Col span="12"  class="centerAlign">
					<Button  type="text" long @click="startLogOutProcess">Log Out</Button>					
				</Col>
			</Row>
		</div>
	</Card>
</div>
</template>

<script>
export default{
	methods:{
		kuchbhi(){},
		startLogOutProcess(){
			this.$store.commit("unsetCurrentEventTime");
			this.$store.commit("clearCalendar");
			this.$store.commit("logOutUser");
		},
	},
	computed:{
		userData(){
			return this.$store.getters.userData;
		}
	}
}
</script>

<style scoped>
.wrapper{
	padding: 15px;
	height: 150px;
	color: #495060;
}

.centerAlign{
	text-align: center;
}
div.ivu-card-body{
	padding: 0px;
}
</style>