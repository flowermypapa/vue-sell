import Vue from "vue";
import Router from "vue-router";

import goods from './components/goods/goods.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "goods",
      component: goods
    },    
    {
      path: "/goods",
      name: "goods",
      component: goods
    },
    {
      path: "/ratings",
      name: "ratings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/ratings/ratings.vue")
    },
    {
      path: "/seller",
      name: "seller",
      component: () =>
        import('./components/seller/seller.vue')
    }
  ]
});
