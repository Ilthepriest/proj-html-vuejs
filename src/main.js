import Vue from 'vue'
import App from './App.vue';

/* Font Awesome icons*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faMinus, faMagnifyingGlass, faTrophy, faBoltLightning, faQuestion, faAngleLeft, faAngleRight,  faClock, faLocationArrow, faUser, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'
import {faFacebookSquare, faTwitter, faLinkedin, faGooglePlusSquare, faPinterestSquare, faFlickr } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add( faMinus, faMagnifyingGlass, faTrophy, faBoltLightning, faQuestion, faAngleLeft, faAngleRight, faClock, faLocationArrow, faUser, faPhone, faEnvelope, faFacebookSquare, faTwitter, faLinkedin, faGooglePlusSquare, faPinterestSquare, faFlickr ) 


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const bootstrap = require('bootstrap')
Vue.use(bootstrap)


