import Vue from 'vue'
import { Button, Message, MessageBox } from 'element-ui'

Vue.use(Button)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
