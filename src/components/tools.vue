<template>
  <div>
    <el-row type="flex"
            class="row-bg"
            justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://chrome.zzzmh.cn/index"><img src="../assets/png/jijian.png"
                 alt="极简插件"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>极简插件</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://uigradients.com"><img src="../assets/png/ui.png"
                 alt="uiGradients"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>uiGradients</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://unsplash.com/"><img src="../assets/png/unsplash.png"
                 alt="Unsplash"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>Unsplash</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex"
            class="row-bg"
            justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://wallhaven.cc/"><img src="../assets/png/wallhaven.png"
                 alt="Wallhaven"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>Wallhaven</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://www.fiverr.com/"><img src="../assets/png/fiverr.png"
                 alt="fiverr"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>fiverr</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://www.deepl.com/translator"><img src="../assets/png/deepl.png"
                 alt="Deepl"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>Deepl</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex"
            class="row-bg"
            justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://lab.magiconch.com/"><img src="../assets/png/shenqi.jpg"
                 alt="神奇海螺"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>神奇海螺</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="http://www.51yuansu.com/"><img src="../assets/png/mi.png"
                 alt="觅元素"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>觅元素</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="http://www.fontawesome.com.cn/icons-ui/"><img src="../assets/png/font.png"
                 alt="Font Awesome"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>Font Awesome</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex"
            class="row-bg"
            justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://artbreeder.com/"><img src="../assets/png/imag.png"
                 alt="Artbreeder"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>Artbreeder</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="http://bg-patterns.com/"><img src="../assets/png/bg.png"
                 alt="bg-paddrens"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>bg-paddrens</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <a href="https://element.eleme.cn/#/zh-CN"><img src="../assets/png/elem.png"
                 alt="饿了么"
                 style="width: 80px; height: 80px; background-color: #f9fafc;"></a>
          <span>饿了么</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'tools',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-top: 20px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple:focus,
.bg-purple:hover {
  background: #e5e9f2;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
img {
  margin-left: 50%;
  transform: translate(-50%, 0);
}
</style>
