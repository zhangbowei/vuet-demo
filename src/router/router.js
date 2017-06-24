import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
  // base: '/seetatech/'
})

// router.beforeEach(({ meta, path }, from, next) => {
//   const { auth = true } = meta
//   const isLogin = Boolean(localStorage.getItem('seetatech_accesstoken')) // true用户已登录， false用户未登录
//   if (auth && !isLogin && path !== '/login') {
//     let to = { path: '/login' }
//     return next(to)
//   }
//   next()
// })

export default router