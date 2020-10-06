import Vue from 'vue'
import {
  Button,
  Message,
  MessageBox,
  Dialog,
  Image,
  Drawer,
  Row,
  Col
} from 'element-ui'

Vue.use(Button)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(Drawer)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
