<template>
<div id="wrapper">
	<div class="eventCard"  @click="setCountDown(dateInSec)">
        <Card :bordered="false">
            <p slot="title">{{eventData.summary}}</p>
						<p slot="extra">{{dateString}} </p>
            <p> 
							<strong>Start In : </strong>
							Days : <strong>{{days}} </strong> Time : <strong>{{hours}}:{{minutes}}:{{seconds}}</strong>
						</p>
        </Card>
    </div>
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
    dateString() {
      if (typeof this.eventData.start.dateTime === "undefined") {
        var date = new Date(this.eventData.start.date + "GMT+5:30");
      } else var date = new Date(this.eventData.start.dateTime);
      var string_date = date.toLocaleString();
      return string_date;
    },
    dateInSec() {
      if (typeof this.eventData.start.dateTime === "undefined") {
        var date = new Date(this.eventData.start.date + "GMT+5:30");
      } else var date = new Date(this.eventData.start.dateTime);

      var date_sec = Math.trunc(date / 1000);
      return date_sec;
		},
		seconds() {
        return (this.dateInSec - this.timeNowInSec) % 60;
    },
    minutes() {
        return Math.trunc((this.dateInSec - this.timeNowInSec) / 60) % 60;
    },
    hours() {
        return Math.trunc((this.dateInSec - this.timeNowInSec) / 60 / 60) % 24;
    },
    days() {
        return Math.trunc((this.dateInSec - this.timeNowInSec) / 60 / 60 / 24);
    }
  },
  methods:{
    setCountDown(x){
      // console.log(x);
      this.$store.commit('setCurrentEventTime',x);
    }
  },
  props: ["eventData"]
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

.wrapper {
  height: inherit;
  vertical-align: middle;
  background: #eee;
}

.eventCard {
  height: inherit;
  padding: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
