import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home               from './vues/home.vue'
import workshopIdea       from './vues/workshopIdea.vue'
import scheduledWorkshops from './vues/scheduledWorkshops.vue'
import demosApi           from './vues/demosApi.vue'
import Contact            from './vues/contact.vue'
import app                from './vues/appSkeleton.vue'


const routes = [
    {path: '/',     component:  Home },
    {path: '/app',  component:  app, children: [
        { path:'scheduledWorkshops', component: scheduledWorkshops},
        { path:'workshopIdea',       component: workshopIdea},
        { path:'demosApi',           component: demosApi},
        { path:'Contact',            component: Contact},
    ] },
];

export const router = new VueRouter({
    routes: routes
});