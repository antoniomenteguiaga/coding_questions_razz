<template>
	<redeem :to="{ name: 'id', params: { id: reward.id }}" />
</template>

<script>
import Redeem from '~/components/Redeem'

export default {
  props: ['reward'],
  components: {
    Redeem
  }
}
</script>

<style scoped>
</style>
