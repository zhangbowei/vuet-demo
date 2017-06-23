import Home from 'pages/home';
<<<<<<< HEAD
import TopicList from 'pages/list';
import TopicDetail from 'pages/detail';
=======
import optionPage from 'pages/opt';
>>>>>>> 957df1eb152db4847122d9756fdbfe7033b7e287

const RouterView = {
  render(h) {
    return h('router-view')
}
}

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const opt = { template: '<div>opt</div>'}
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const root = [
  {
    path: '/',
    component: RouterView,
    children: [
      { path: '/home/1', component: Home },
      { path: '/home/opt', component: optionPage},
      { path: '/home', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/user/:id', component: User }
    ]
  }
];

export default root



