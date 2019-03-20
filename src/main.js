import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'
import echarts from 'echarts'
import {MessageBox} from 'element-ui'
import $ from 'jquery'

import './plugins/element.js'
import {asyncRouterMap} from './router'

import 'font-awesome/css/font-awesome.css'

const requireComponent = require.context(
    // 其组件目录的相对路径
    './components',
    // 是否查询其子目录
    false,
    // 匹配以.vue或js的正则表达式
    /\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 剥去文件名开头的 `'./` 和结尾的扩展名
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 全局注册组件
  Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
  )
})

Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$proxy = process.env.VUE_APP_PROXY;
Vue.prototype.$messageBox = MessageBox
Vue.config.productionTip = false

/**
 * 通过meta.roles判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = {...route}
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

//获取cookie
function getCookie(name) {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    store.commit('setData', {
      name: 'cookie',
      data: decodeURIComponent(arr[2])
    });
    return decodeURIComponent(arr[2]);
  }
  else
    return false;
}

//判断是否有token
function hasToken() {
  if (store.getters.token) {
    return true;
  }
  else if (sessionStorage.getItem('token') !== null) {
    store.commit('setToken', sessionStorage['token']);
    return true
  }
  else return false
}

router.beforeEach((to, from, next) => {
  if (hasToken()) {//如果store中有token
    console.log(1)
    if (store.getters.role.length === 0) {
      console.log(store.getters.role.length)
      store.dispatch('getInfo')
          .then(() => {
            if (store.state.roleList.length > 0) {//后台传了角色列表
              router.addRoutes(filterAsyncRouter(asyncRouterMap, store.getters.role));
              next({...to, replace: true});
            } else {//后台未传角色列表
              console.log('none roleList')
              Vue.prototype.$alert('您还没有角色', '标题', {
                confirmButtonText: '确定',
                callback: res => {
                 console.log(res)
                  axios.post('/logoutApi')
                      .then(res=>{
                        console.log(res)
                        login=res.data.casLoginUrl;
                        logout=res.data.casLogoutUrl;
                        $.ajax({
                          url: logout,
                          type: "GET",
                          dataType: "jsonp",
                          jsonp: "callback",
                          crossDomain: true,
                          cache: false,
                          success: function(data) {
                            sessionStorage.clear();
                            // window.location.href=login;
                            // console.log(data)
                          },
                          error: function(data) {
                            // console.log(data);
                          }
                        })
                      })
                }
              });
            }
          })
    }
    else next();
  }
  else {//store中没有token，需要从后台拿
    console.log(2)
    if(getCookie('LOGIN_UUID')){//如果有session
      console.log(2.1)
      store.dispatch('getToken')
        .then(() => {
          store.dispatch('getInfo')
              .then(() => {
                router.addRoutes(filterAsyncRouter(asyncRouterMap, store.getters.role));
                next({...to, replace: true});
              })
        })
    }
    else{//如果没有session
      console.log(2.2)
      axios.post('/getLoginUrl')
        .then(res=>{
          console.log(res)
          console.log('2.3')
          sessionStorage.clear();
          window.location.href=res.data.url;
        })
    }
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
