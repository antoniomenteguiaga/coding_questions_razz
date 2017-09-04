<template>
        <nuxt-link :to="to" class="redeem">
		Redeem &gt;
        </nuxt-link>
</template>

<script>
export default {
  props: ['to']
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
