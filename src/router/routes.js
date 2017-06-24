import Sketch from 'pages/sketch'
import Signin from 'pages/signin'
import Signout from 'pages/signout'
import Home from 'pages/home'

const routes = [
  {
    path: '/',
    component: Sketch,
    children: [
      {
        path: '', // 登录
        name: 'signin',
        meta: { auth: false },
        component: Signin
      },
      {
        path: 'signout', // 退出
        name: 'signout',
        component: Signout
      },
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '*', // 其他页面
        redirect: 'home'
      }
    ]
  }
];

export default routes