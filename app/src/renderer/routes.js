export default [
  {
    path: '/',
    name: 'home',
    component: require('components/HomeView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
