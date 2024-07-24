import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import * as Icons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/reset.css'

var app=createApp(App);
app.use(Antd);
app.mount('#app')
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}


