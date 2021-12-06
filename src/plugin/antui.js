// src/main.js
import Vue from 'vue'

// 使用 ant-design的Button
import {Button,
    FormModel,
    Input,
    Icon,
    message,
    Layout,
    Menu,
    Card,
    Table,
    Row,
    Col,
    ConfigProvider,
    Modal,
    Select
} from 'ant-design-vue';

message.config({
    top: `40px`,
    duration: 2,
    maxCount: 3
})
Vue.prototype.$message = message
Vue.prototype.$confirm = Modal.confirm
Vue.use(Button)
Vue.use(FormModel)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Card)
Vue.use(Table)
Vue.use(Row)
Vue.use(Col)
Vue.use(ConfigProvider)
Vue.use(Modal)
Vue.use(Select)

