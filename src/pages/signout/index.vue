<template>
  <div></div>
</template>
<script>

  import { mapRules } from 'vuet'

  export default {
    mixins: [
      mapRules({ manual: 'user' })
    ],
    mounted () {
      this.$user.signout()
      this.$router.replace('/')
    }
  }

</script>
<style scoped>
</style>
