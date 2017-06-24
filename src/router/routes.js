import Signin from 'pages/signin'
import Signout from 'pages/signout'

const routes = [
  {
    path: '/signin', // 登录
    name: 'signin',
    meta: { auth: false },
    component: Signin
  },
  {
    path: '/signout', // 退出
    name: 'signout',
    component: Signout
  },
  {
    path: '*', // 其他页面
    redirect: '/signin'
  }
];

export default routes