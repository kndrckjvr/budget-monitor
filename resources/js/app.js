require('./bootstrap');

import Vue from 'vue';
import App from '../vue/App';

var app = new Vue({
    el: "#app",
    components: {
        App
    },
    template: "<App/>"
});