import { createMemoryHistory, createRouter } from 'vue-router'

import PogledPocetna from './view/pogledPocetna.vue'
import PogledOnama from './view/pogledOnama.vue'
import PogledVijesti from './view/pogledVijesti.vue'
import PogledRezultati from './view/pogledRezultati.vue'
import PogledRaspored from './view/pogledRaspored.vue'


const routes = [
  { path: '/', component: PogledPocetna },
  { path: '/onama', component: PogledOnama },
  { path: '/vijesti', component: PogledVijesti },
  { path: '/rezultati', component: PogledRezultati },
  { path: '/raspored', component: PogledRaspored},
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})