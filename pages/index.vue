<template>
  <section class="container">
    <h1 class="title">
	    Here is the full list of prizes that you can win.
    </h1>
    <ul class="prizes">
      <li v-for="prize in prizes" :key="index" class="prize">
	      <prize :prize="prize" />
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Prize from '~/components/Prize.vue'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/prizes')
    return { prizes: data }
  },
  head () {
    return {
      title: 'Prizes'
    }
  },
  components: {
    Prize
  }
}
</script>

<style scoped>
.prizes{
	display: flex;
	list-style:none;
	flex-direction: column;
	padding: 0;
	margin: 0;
}

.prize{
	width: 100%;
}
.title{
  margin: 0;
  text-align: center;
  font-weight: lighter;
}

@media all and (min-width: 480px){
	.prizes{
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.prize{
		width: 30%;
	}
}
</style>
