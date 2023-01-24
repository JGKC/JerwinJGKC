import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from "gsap";

import './style.css'
import './assets/main.css'

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font Awesome
import { 
    faHouse, faUserTie, faPenRuler, faAddressBook, faBars, // Menu

    faPeopleGroup, faRocket, faCode, // Home Page

    faCircleInfo, faTimeline, faBullseye, faEnvelope, faQuoteLeft, faTimes, faUpRightFromSquare, faFilePdf, // Project Info

} from '@fortawesome/free-solid-svg-icons'

import {
    faTwitter, faInstagram, faBehance, faLinkedinIn, // Social

    faHtml5, faJs, faVuejs, faCss3Alt, faPhp, faLaravel, // Skills
    
    


} from '@fortawesome/free-brands-svg-icons'




library.add(
    faHouse, faUserTie, faPenRuler, faAddressBook, faBars, // Menu

    faPeopleGroup, faRocket, faCode, // Home Page

    faCircleInfo, faTimeline, faBullseye, // Project Info
    
    faTwitter, faInstagram, faBehance, faLinkedinIn, faEnvelope,// Social Media

    faHtml5, faCss3Alt, faJs, faVuejs, faPhp, faLaravel,// Skills

    faQuoteLeft, faTimes, faUpRightFromSquare, faFilePdf
    )



const app = createApp(App)

app.use(router)
app.use(gsap)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
