// 1.导入vuex 和vue
import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper'

// 2. 注册vuex和vue里面
Vue.use(Vuex);
// 3. 创建vuex的仓库对象
let store = new Vuex.Store({
    // state 用来共享对象和数据
    state: {
        // loveCount: 1
        actionHelper:new  ActionHelper(),
        isShow:false, // 控制是否显示 编辑框
        transMemo:null,
        filterCateId:-1
    },
    // mutations 用来共享方法
    mutations: {

        showEditMemo(state: any, editMemo: any) {
           
            // 传递
            state.transMemo = editMemo;

            // 显示
            state.isShow = true;
          }

        // 可以写一个形参 调用的时候 state会自己传进来
        // sayHi(state) {
        //     console.log("213131" + state.title);
        // },
        // addLover(state) {
        //     state.loveCount++;
        // }
    }
});
// 4. 导入仓库对象
export default store;
