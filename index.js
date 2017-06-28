import Vue from 'vue'
import {router} from './src/router.js'
import {OAuth} from './src/service/OAuthService.js'

import "./globale.css"

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
    router,
    render() {
        return (
            <div>
                <router-view/>
            </div>
        )
    }
});