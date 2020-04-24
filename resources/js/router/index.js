import Vue from 'vue';
import VueRouter from 'vue-router';

// Pages
import Home from '../../vue/pages/Home';
import Login from '../../vue/pages/Login';
// End Pages

Vue.use(VueRouter);

const base = "local.bdgt-mngr.com/"

export default new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return savedPosition ? savedPosition : { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        }
    ]
});