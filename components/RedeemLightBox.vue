<template>
  <a href="#" class="redeem">
    Redeem &gt;
  </a>
</template>

<script>
import Redeem from '~/components/Redeem'

export default {
  props: ['prize'],
  components: {
    Redeem
  }
}
</script>

<style scoped>
.redeem{
	background-color: yellow;
	padding-top: 1em;
	padding-bottom: 1em;
	border-radius:2em;
	text-decoration: none;
}
</style>
