require('./bootstrap');

import 'bootstrap';
import Vue from 'vue';
import App from '../vue/App';
import router from './router'
// import store from './store'


var app = new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    template: "<App/>"
});