<template>
  <section class="container">
    <light-box :style="lightBox" :prize="prize" @close="hideLightBox" @confirm="confirmPrize"/>
    <success-light-box :style="successLightBox" :prize="prize" @close="hideSuccessLightBox"/>
    <header>
      <section class="image">
        <div :style="image"></div>
      </section>
      <section class="info">
        <h1>
          Win a {{ prize.name }}
        </h1>
        <p>{{prize.quantity}} left in stock</p>
        <button @click="showLightBox">Redeem &gt;</button>
      </section>
    </header>
    <section class="description">
      <header><h2>Description</h2></header>
      <p>{{prize.description}}</p>
    </section>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Prize from '~/components/Prize.vue'
import Redeem from '~/components/RedeemLightBox.vue'
import LightBox from '~/components/ConfirmationLightBox.vue'
import SuccessLightBox from '~/components/SuccessLightBox.vue'

export default {
  name: 'id',
  components: {
    Prize,
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
    async confirmPrize (event) {
      try {
        let { data } = await axios.post(`/api/prizes/${this.prize._id}`)
        this.prize = data
        this.lightBox.display = 'none'
        this.successLightBox.display = 'block'
      } catch (e) {
        console.log('Error')
      }
    }
  },
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get(`/api/prizes/${params.id}`)
      return {
        prize: data,
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
      error({ statusCode: 404, message: 'Prize not found' })
    }
  },
  head () {
    return {
      title: `Prize: ${this.prize.name}`
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
