<template>
<div id="wrapper">
  <Row>
    <Col id="left-side" :xs="24" :sm="10">
      <LeftSideComponet></LeftSideComponet>
    </Col>
    <Col id="right-side" :xs="24" :sm="14">
      <EventListComponent></EventListComponent>
    </Col>
  </Row>
</div>
</template>

<script>
import LeftSideComponet from './LandingPage/LeftSideComponent';
import EventListComponent from './LandingPage/EventListComponent';

export default {
  components :{
    LeftSideComponet,
    EventListComponent
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
.ivu-row {
  height: 100%;
  width: 100%;
}

.ivu-col {
  height: 100%;
}

#left-side {
  background-color: #1c2438;
  color: #f8f8f9;
}

#right-side {
  background-color: #f8f8f9;
  color: #495060;
}
</style>
