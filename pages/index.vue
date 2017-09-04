<template>
  <section class="container">
    <h1 class="title">
	    Here is the full list of prizes that you can win.
    </h1>
    <ul class="rewards">
      <li v-for="reward in rewards" :key="index" class="reward">
	      <reward :reward="reward" />
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Reward from '~/components/Reward.vue'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/rewards')
    return { rewards: data }
  },
  head () {
    return {
      title: 'Rewards'
    }
  },
  components: {
    Reward
  }
}
</script>

<style scoped>
.rewards{
	display: flex;
	list-style:none;
	flex-direction: column;
	padding: 0;
	margin: 0;
}

.reward{
	width: 100%;
}

@media all and (min-width: 480px){
	.rewards{
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0.5em;
	}

	.reward{
		padding: 1em;
		width: 30%;
	}
}
</style>
