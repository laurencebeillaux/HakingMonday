import Home         from './vues/home.vue'
import workshopIdea from './vues/workshopIdea.vue'
import Contact      from './vues/contact.vue'
import NotFound     from './vues/notFound.vue'

const routes = {
    '/': Home,
    '/workshopIdea': workshopIdea,
    '/contact': Contact
};

export const Router = {
    data: () => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        viewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h){
        return h(this.viewComponent)
    }

};