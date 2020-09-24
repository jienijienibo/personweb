<template>
  <div class="welcome">
    <div class="welbox">
      <div class="text">Welcome to ZYLBest</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
.welcome {
  height: 100%;
}
.welbox {
  font-family: "montserrat";
  height: 100%;
  width: 100%;
  /*overflow-y: scroll;
  overflow-x: scroll;*/
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
    125deg,
    #2c3e50,
    #27ae60,
    #2980b9,
    #e74c3c,
    #8e44ad
  );
  background-size: 400%;
  animation: bganimation 15s infinite;
}
.text {
  color: white;
  text-align: center;
  padding: 350px 0;
  font-size: 50px;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
