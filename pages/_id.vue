<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Reward
    </h1>
    <h2 class="info">
      {{ reward.name }}
    </h2>
    <nuxt-link class="button" to="/">
      Rewards
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get(`/api/rewards/${params.id}`)
      return { reward: data }
    } catch (e) {
      error({ statusCode: 404, message: 'Reward not found' })
    }
  },
  head () {
    return {
      title: `Reward: ${this.reward.name}`
    }
  }
}
</script>

<style scoped>
</style>
