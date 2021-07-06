import Vue from "vue";

Vue.component('app-navbar', require('./AppNavbar').default);
Vue.component('app-main', require('./AppMain').default);
Vue.component('app-products', require('./AppProducts').default);
Vue.component('app-product-cart', require('./AppProductCart').default);
Vue.component('sidebar-left-canvas', require('./sidebars/SidebarLeftCanvas').default);
Vue.component('sidebar-right-canvas', require('./sidebars/SidebarRightCanvas').default);
Vue.component('side-fashion', require('./sidebars/Fashion').default);