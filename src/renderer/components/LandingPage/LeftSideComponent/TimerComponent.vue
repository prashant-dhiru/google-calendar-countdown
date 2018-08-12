<template>
<div class="wrapper">
	<Row v-if="selectedEventTime != 0">
		<Col span="4" class="block">
			<h2>{{days}}</h2>
			<br>Days
		</Col>
		<Col span="1" class="block">
			<h1>:</h1>
			<br>
		</Col>
		<Col span="4" class="block">
		<h2>{{hours}}</h2>
		<br>Hours
		</Col>
		<Col span="1" class="block">
			<h1>:</h1>
		</Col>
		<Col span="4" class="block">
		<h2>{{minutes}}</h2>
		<br>Minutes
		</Col>
		<Col span="1" class="block">
			<h1>:</h1>
		</Col>	
		<Col span="4" class="block">
		<h2>{{seconds}}</h2>
		<br>Seconds
		</Col>

	</Row>
</div>
</template>	

<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.timeNowInSec = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  data() {
    return {
      timeNowInSec: Math.trunc(new Date().getTime() / 1000)
    };
  },
  computed: {
		selectedEventTime(){
			return this.$store.getters.getSelectedEventTime;
		},
		seconds() {
        return (this.selectedEventTime - this.timeNowInSec) % 60;
    },
    minutes() {
      return Math.trunc((this.selectedEventTime - this.timeNowInSec) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.selectedEventTime - this.timeNowInSec) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.selectedEventTime - this.timeNowInSec) / 60 / 60 / 24);
    }
  }
};
</script>

<style scoped>
.wrapper {
  height: auto;
}
.block{
	padding: 15px;
	text-align: center;
}

</style>
