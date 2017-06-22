import Home from 'pages/home';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const routes = [
      { path: '/home', component: Home },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/user/:id', component: User }
]


export default routes
