import { createMemoryHistory, createRouter } from 'vue-router'

import PogledPocetna from './view/pogledPocetna.vue'
import PogledOnama from './view/pogledOnama.vue'
import PogledVijesti from './view/pogledVijesti.vue'


const routes = [
  { path: '/', component: PogledPocetna },
  { path: '/onama', component: PogledOnama },
  { path: '/vijesti', component: PogledVijesti },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})