<template>
	<redeem :to="{ name: 'id', params: { id: prize._id }}" />
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
</style>
