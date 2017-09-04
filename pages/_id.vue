<template>
  <section class="container">
    <light-box :style="lightBox" :reward="reward" @close="hideLightBox" @confirm="confirmReward"/>
    <success-light-box :style="successLightBox" :reward="reward" @close="hideSuccessLightBox"/>
    <header>
      <section class="image">
        <div :style="image"></div>
      </section>
      <section class="info">
        <h1>
          Win a {{ reward.name }}
        </h1>
        <p>{{reward.quantity}} left in stock</p>
        <button @click="showLightBox">Redeem &gt;</button>
      </section>
    </header>
    <section class="description">
      <header><h2>Description</h2></header>
      <p>{{reward.description}}</p>
    </section>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Reward from '~/components/Reward.vue'
import Redeem from '~/components/RedeemLightBox.vue'
import LightBox from '~/components/ConfirmationLightBox.vue'
import SuccessLightBox from '~/components/SuccessLightBox.vue'

export default {
  name: 'id',
  components: {
    Reward,
    Redeem,
    LightBox,
    SuccessLightBox
  },
  methods: {
    showLightBox (event) {
      this.lightBox.display = 'block'
    },
    hideLightBox (event) {
      this.lightBox.display = 'none'
    },
    showSuccessLightBox (event) {
      this.successLightBox.display = 'block'
    },
    hideSuccessLightBox (event) {
      this.successLightBox.display = 'none'
    },
    confirmReward (event) {
      this.lightBox.display = 'none'
      this.successLightBox.display = 'block'
    }
  },
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get(`/api/rewards/${params.id}`)
      return {
        reward: data,
        lightBox: {
          display: 'none'
        },
        successLightBox: {
          display: 'none'
        },
        image: {
          background: `url(${data.image_url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '12em',
          width: '100%'
        }
      }
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
.container{
  display: flex;
  flex-direction: column;
}
.redeem{
  padding-left: 3em;
  padding-right: 3em;
}

@media (min-width:480px){
  .container{
    width: 75%;
    margin: auto;
  }

  .container>header{
    display: flex;
    width: 100%;
  }

  .container>section{
    display: flex;
  }

  .image{
    width: 50%;
  }

  .info{
    width: 50%;
  }
}
</style>
