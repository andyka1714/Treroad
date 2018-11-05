import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// --------------------------------
// 頁面主架構
// --------------------------------
const Home = () =>
  import ( /* webpackChunkName: "pages" */ '@/pages/Home')
const SearchResults = () =>
  import ( /* webpackChunkName: "pages" */ '@/pages/SearchResults')
const Train = () =>
  import ( /* webpackChunkName: "pages" */ '@/pages/Home/Train')
const Thsr = () =>
  import ( /* webpackChunkName: "pages" */ '@/pages/Home/Thsr')
const MRT = () =>
  import ( /* webpackChunkName: "pages" */ '@/pages/Home/MRT')

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/train',
      children: [{
          path: 'train',
          name: 'Train',
          meta: {
            title: '台鐵查詢'
          },
          component: Train
        }, {
          path: 'thsr',
          name: 'Thsr',
          meta: {
            title: '高鐵查詢'
          },
          component: Thsr
        },
        {
          path: 'mrt',
          name: 'MRT',
          meta: {
            title: '捷運轉乘'
          },
          component: MRT
        },
      ]
    },
    {
      path: '/searchresults/:departureStation/:arrivalStation/:searchTime/:hour/:minute/:transportation',
      name: 'SearchResults',
      component: SearchResults,
      // redirect: '/SearchResults',
      // children: []
    }
  ]
})