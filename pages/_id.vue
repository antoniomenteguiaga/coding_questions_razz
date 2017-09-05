<template>
  <section class="container">
    <light-box :style="lightBox" :prize="prize" @close="hideLightBox" @confirm="confirmPrize"/>
    <success-light-box :style="successLightBox" :prize="prize" @close="hideSuccessLightBox"/>
    <failure-light-box :style="failureLightBox" :prize="prize" @close="hideFailureLightBox"/>
    <header>
      <section class="image">
        <div :style="image"></div>
      </section>
      <section class="info">
        <h1>
          Win a {{ prize.name }}
        </h1>
        <button class="redeem button" @click="showLightBox">Redeem &gt;</button>
        <p>{{prize.quantity}} left in stock</p>
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
import FailureLightBox from '~/components/FailureLightBox.vue'

export default {
  name: 'id',
  components: {
    Prize,
    Redeem,
    LightBox,
    SuccessLightBox,
    FailureLightBox
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
    showFailureLightBox (event) {
      this.failureLightBox.display = 'block'
    },
    hideFailureLightBox (event) {
      this.failureLightBox.display = 'none'
    },
    async confirmPrize (event) {
      try {
        let { data } = await axios.post(`/api/prizes/${this.prize._id}`)
        this.prize = data
        this.lightBox.display = 'none'
        this.successLightBox.display = 'block'
      } catch (e) {
        this.lightBox.display = 'none'
        this.failureLightBox.display = 'block'
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
        failureLightBox: {
          display: 'none'
        },
        image: {
          background: `url(${data.image_url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          paddingTop: '100%',
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
  padding-left: 3rem;
  padding-right: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.info{
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0.1rem 0.1rem 0.05rem 0rem grey;
  padding: 1em;
  display: table;
}
.info>h1{
  border-bottom: 0.1rem solid grey;
  padding-bottom: 2rem;
  font-size: 1.5rem;
  margin: 0;
}
.info>p{
  border-top: 0.1rem solid grey;
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: 0.75rem;
  margin: 0;
}
.description *{
  margin: 0;
  padding: 0;
}
.description{
  border-top: 0.1rem solid grey;
  padding-top: 3rem;
  margin-top: 3rem;
}

@media (min-width:480px){
  .container{
    width: 75%;
    margin: auto;
  }

  .container>header{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .container>section{
    display: flex;
  }

  .image{
    width: 45%;
  }

  .info{
    width: 45%;
  }
  .description > header{
    margin-right: 3em;
  }
}
</style>
