import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import Cookies from 'js-cookie';

import HelloWorld from '@/components/HelloWorld'

import {routers} from './router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();

  let ex = Cookies.get('user');
  if(!ex && to.name !== 'login'){
    next({
      name: 'login'
    })
  }else if(ex && to.name === 'login') {
    next({
      name: 'base-examples'
    })
  }else {
    next();
  }
})

router.afterEach((to) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router
