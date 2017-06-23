import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'routes'


import {
  Button,
  Select,
  Row,
  Col,
  Pagination,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Dialog,
  Option
} from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-default/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

//import third package for Common


// more grace import third package for Vue
import moment from 'moment'
import axios from 'axios'
import curvejs from 'curvejs'

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Option);

locale.use(lang);

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// }).$mount('#app')


