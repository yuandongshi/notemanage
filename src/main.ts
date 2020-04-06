import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
//import store from './store'  这里的index也可以不用写

// import ItemData from './model/ItemData';
// import Category from './model/CateEnum';
import actionhelper from './store/DataHelper';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store // 注册到vue中 在整个程序中都可以访问到
}).$mount('#app')

// var itemdate= new ItemData();
// console.log(itemdate);