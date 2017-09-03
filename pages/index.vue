<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      REWARDS
    </h1>
    <ul class="rewards">
      <li v-for="(reward, index) in rewards" :key="index" class="reward">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ reward.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/rewards')
    return { rewards: data }
  },
  head () {
    return {
      title: 'Rewards'
    }
  }
}
</script>

<style scoped>
</style>
