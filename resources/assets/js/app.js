require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue')

// list post template

const ListPost = Vue.component('ListPost', require('./components/ListPost.vue'))
const AddPost = Vue.component('AddPost', require('./components/AddPost.vue'))
const EditPost = Vue.component('EditPost', require('./components/EditPost.vue'))
const DeletePost = Vue.component('DeletePost', require('./components/DeletePost.vue'))
const ViewPost = Vue.component('ViewPost', require('./components/ViewPost.vue'))


Vue.use(VueRouter, VueAxios, Axios);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'ListPost',
            path: '/',
            component: ListPost
        },

        {
            name: 'AddPost',
            path: '/add-post',
            component: AddPost
        },
        {
            name: 'EditPost',
            path: '/edit/:id',
            component: EditPost
        },
        {
            name: 'DeletePost',
            path: '/post-delete',
            component: DeletePost
        },
        {
            name: 'ViewPost',
            path: '/view/:id',
            component: ViewPost
        },

    ]
})

new Vue(
    Vue.util.extend({
            router
        },

        AppLayout
    )
).$mount('#app')