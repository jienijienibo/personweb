<template>
  <div class="welcome">
    <div class="welbox">
      <div class="text">Welcome to ZYLBest</div>
      <el-button type="primary"
                 round
                 class="btnhidden"
                 @click="hiddensec"></el-button>
      <div class="text1">click here</div>
      <img src="../assets/png/jiantou1.png"
           class="jiantou1">
      <a href="https://www.cnblogs.com/zylbest/"><img src="../assets/png/blog.png"
             class="blog"></a>
      <img src="../assets/png/jiantou2.png"
           class="jiantou2">
      <div class="text2">my blog</div>
      <el-button type="text"
                 @click="drawer=true"><img src="../assets/png/jianjiao.png"
             class="jianjiao"></el-button>
    </div>
    <el-dialog title="Yah-hah~~~"
               :visible.sync="dialogVisible"
               width="30%"
               class="hiddendialog"
               center>
      <div class="imagebox"><img src="../assets/png/wechat1.png"
             class="image"></div>
      <span>You found me, didn't you. Now let me give you my Kroger fruit.<br>
        <div id="wechat">"iwannalwellasic"</div> this wechat,You can get to know me better on this. Feel free to harass me.
      </span>
      <span slot="footer"
            class="dialog-footer">
        <el-button type="success"
                   @click="dialogVisible = false"
                   round
                   class="yesbtn">确 定</el-button>
      </span>
    </el-dialog>
    <el-drawer title="Some useful tools(maybe...)"
               :visible.sync="drawer"
               :before-close="handleClose"
               :direction="direction">
      <tools></tools>
    </el-drawer>
  </div>
</template>

<script>
import Tools from '../components/tools'
export default {
  data () {
    return {
      dialogVisible: false,
      url: '../assets/png/wechat1.png',
      drawer: false,
      direction: 'ltr'
    }
  },
  methods: {
    hiddensec () {
      this.dialogVisible = true
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  },
  components: {
    Tools
  }
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
  /*overflow-y: scroll;*/
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
  padding-top: 350px;
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
.btnhidden {
  position: absolute;
  right: 2%;
  bottom: 1%;
}
.el-button--primary.is-active,
.el-button--primary:active {
  background-color: rgba(0, 0, 0, 0);
  border-color: white;
}
.el-button--primary {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: rgba(0, 0, 0, 0);
  border-color: white;
}
.hiddendialog {
  text-align: center;
}
#wechat {
  color: chartreuse;
  font-size: 20px;
  text-align: center;
}
.image {
  height: 100px;
  width: 100px;
}
.imagebox {
  padding-left: 40%;
}
.text1 {
  color: rgb(238, 241, 25);
  font-size: 50px;
  position: absolute;
  left: 20%;
  top: 50%;
  font-family: "Hiragino Sans GB";
}
.jiantou1 {
  position: absolute;
  height: 10%;
  width: 8%;
  left: 35%;
  top: 50%;
  animation: turn 2s linear infinite;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(70deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(-70deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
.blog {
  position: absolute;
  height: 10%;
  width: 5%;
  left: 45%;
  top: 50%;
  animation: shakeTopx 2s linear infinite;
}
@keyframes shakeTopx {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }
  5% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  10%,
  20%,
  30% {
    -webkit-transform: rotate(-4deg);
    transform: rotate(-4deg);
  }
  15%,
  25%,
  35% {
    -webkit-transform: rotate(4deg);
    transform: rotate(4deg);
  }
  40% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }
  45% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
.jiantou2 {
  position: absolute;
  height: 10%;
  width: 8%;
  left: 49%;
  top: 50%;
  animation: movejiantou 2s linear infinite;
}
@keyframes movejiantou {
  0% {
    left: 49%;
  }
  25% {
    left: 53%;
  }
  50% {
    left: 57%;
  }
  75% {
    left: 53%;
  }
  100% {
    left: 49%;
  }
}
.text2 {
  color: rgb(105, 188, 243);
  font-size: 50px;
  position: absolute;
  left: 65%;
  top: 50%;
  font-family: "Hiragino Sans GB";
}
</style>
