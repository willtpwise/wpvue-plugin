<template lang="html">
  <div id='wpvue-plugin'>
    <welcome :logo="logo"></welcome>
  </div>
</template>

<script>
import logo from './assets/logo.png'
import welcome from './components/welcome.vue'
export default {
  name: 'app',

  data () {
    return {
      logo: logo
    }
  },

  components: {
    welcome
  }
}
</script>

<style lang="scss">
  #wpvue-plugin {
    text-align: center;
  }
</style>
