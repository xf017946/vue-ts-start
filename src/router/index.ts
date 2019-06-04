import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/raffle'
    },
    // 转盘抽奖活动原型
    {
      path: '/raffle',
      name: 'raffle',
      meta: {
        title: 'raffle',
        keepAlive: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "raffle" */ `@/views/Raffle.vue`)
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.meta.keepAlive
      && to.name
      && Store.state.keepAliveArray.indexOf(to.name) === -1) {
    Store.commit('setKeepAliveArr', to.name[0].toUpperCase() + to.name.substring(1));
  }

  next();
});
