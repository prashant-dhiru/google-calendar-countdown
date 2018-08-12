<template>
<div id="wrapper">
	<div v-if="!isUserLogedIn" class="middle">
			<Card :bordered="false">
					<p slot="title">Your Are Not Loged In</p>
					<p>
						We do not save your event data as per our privacy policy, henece we require users to login and provide consent to use your calender data to display the countdown after each logout.
					</p>
			</Card>
	</div>
	<div v-else-if="numOfEvents == 0" class="middle">
			<Card :bordered="false">
					<p slot="title">No Events To Display</p>
					<p style="text-align:justify; text-align-last: center">
						Please select the calender to fetch the events for the countdown, if no upcomming events are displayed after selection then make sure you have upcoming events in your google calender which are not private or deleted.
					</p>
			</Card>
	</div>
	<div v-else class="eventList">
		<div v-for="event in eventList">
			<EventComponent :eventData=event></EventComponent>
		</div>
	</div>
</div>
</template>

<script>
import EventComponent from './EventListComponent/EventComponent'

export default {
  components: {
		EventComponent
	},
  computed: {
    numOfEvents() {
      return this.$store.getters.getEventListLength;
    },
    isUserLogedIn() {
      return this.$store.getters.isUserLogedIn;
		},
		eventList(){
			return this.$store.getters.getEventList;
		}
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

.wrapper {
  height: inherit;
  vertical-align: middle;
  background: #eee;

}
.eventList{
	height: inherit;
	overflow: scroll;
}

.middle {
	height: inherit;
  text-align: center;
  background: #eee;
  padding: 20px;
	padding-top: 35%;
	padding-bottom: 40%;

}
</style>
