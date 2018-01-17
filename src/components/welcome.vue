<template lang="html">
  <div class="welcome">
    <figure>
      <img :src="logo">
    </figure>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'welcome',

  props: ['logo'],

  data () {
    return {
      title: 'WPVue Plugin'
    }
  }
}
</script>

<style lang="css" scoped>
/*
  Scoped styles

  Use the 'scoped' attribute to scope CSS styles to their parent components
*/
figure {
  padding-bottom: 1.5rem;
}

img {
  width: 250px;
  border-radius: 50%;
}
</style>
