import Vue from 'vue'
import {Router} from './src/router.js'
import Navigation from './src/navigation.vue'

/**
 * Auto import of components
 */
const requireComponent = require.context('./src/components', true, /(\.vue|\.component\.js)$/)

requireComponent.keys().map(key => {
    const name = key.replace(/.*\/([^/]+)(?:\.vue|\.component\.js)/, '$1')

    const { __esModule, ...module } = requireComponent(key)

    Vue.component(name, __esModule ? module.default : module)
})

new Vue({
    el: '#app',
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <h1>Haking Monday</h1>
                <Router></Router>
            </div>
        )
    }
});