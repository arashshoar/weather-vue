<template>
  <div :class="styles.links">
    <LinkItem
      :icon="['fas', 'address-card']"
      :linkHref="'http://arashshoar.com'"
      :linkText="'Resume'"
      :linkLine1="'Portfolio'"
      :linkLine2="'Resume'"
    />
    <LinkItem
      :icon="['fab', 'react']"
      :linkHref="'https://arashshoar-weather-redux-thunk.herokuapp.com/'"
      :linkText="'React Version'"
      :linkLine1="'Vue-Vuex'"
      :linkLine2="'Weather App'"
    />
    <LinkItem
      :icon="['fab', 'github']"
      :linkHref="'https://github.com/arashshoar/weather-vue'"
      :linkText="'Review'"
      :linkLine1="'Vue-Vuex'"
      :linkLine2="'Weather App'"
    />
    <LinkItem
      :icon="['fab', 'github']"
      :linkHref="'https://github.com/arashshoar/weather-redux-thunk'"
      :linkText="'Review'"
      :linkLine1="'Redux-Saga'"
      :linkLine2="'Weather App'"
    />
    <LinkItem
      :icon="['fab', 'github']"
      :linkHref="'https://github.com/arashshoar/weather-redux-thunk/tree/redux-thunk'"
      :linkText="'Review'"
      :linkLine1="'Redux-Thunk'"
      :linkLine2="'Weather App'"
    />
    <LinkItem
      :icon="['fas', 'users']"
      :linkHref="'http://arashshoar.com/tasks/arash-shoar-apple-id/#/'"
      :linkText="'User App'"
      :linkLine1="'Angular 1.5'"
      :linkLine2="'Apr 2017'"
    />
    <LinkItem
      :icon="['fas', 'clipboard-check']"
      :linkHref="'http://arashshoar.com/tasks/arash-shoar-apple-id/#/signup'"
      :linkText="'Form Validation'"
      :linkLine1="'Angular 1.5'"
      :linkLine2="'Apr 2017'"
    />
    <LinkItem
      :icon="['fab', 'linkedin']"
      :linkHref="'https://www.linkedin.com/in/arash-shoar-439ab198'"
      :linkText="'LinkedIn'"
      :linkLine1="'Profile'"
      :linkLine2="'More About Me'"
    />
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faUsers, faClipboardCheck, faCloudSunRain } from '@fortawesome/free-solid-svg-icons'

import LinkItem from '../LinkItem/LinkItem.vue'

import styles from './Links.module.scss'

library.add(faGithub, faLinkedin, faAddressCard, faUsers, faClipboardCheck, faCloudSunRain, faReact)

export default {
  name: 'HelloWorld',
  components: {
    LinkItem
  },
  data() {
    return {
      styles
    }
  },
}
</script>
