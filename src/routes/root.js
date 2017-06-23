import Home from 'pages/home';
import TopicList from 'pages/list';
import TopicDetail from 'pages/detail';

const RouterView = {
  render(h) {
    return h('router-view')
  }
}

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const root = [
  {
    path: '/',
    component: RouterView,
    children: [
      // {
      //   path: '',
      //   name: 'topic-list',
      //   component: TopicList
      // },
      // {
      //   path: '/:id',
      //   name: 'topic-detail',
      //   component: TopicDetail
      // },
      { path: '/home', component: Home },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/user/:id', component: User }
    ]
  }
];

export default root



