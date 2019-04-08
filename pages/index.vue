<template>
  <div class="homePage">
    <!-- banner -->
    <div class="banner">
      <Banner :banner="banner"></Banner>
    </div>
  </div>
</template>

<script>
import Banner from '../components/common/banner.vue'
export default {
  data () {
    return {
      banner: [],
      title: '名侦探柯南'
    }
  },
  // head () {
  //   return {
  //     title: this.title
  //   }
  // },
  metaInfo: {
    title: 'title', // set a title
    titleTemplate: '%s', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  created () {
    this.$axios.post('video/indexAdvertiement').then(res => {
      this.banner = res.carousel
      this.title = this.banner[1]['title']
    }).catch(err => {
      throw err
    })
  },
  methods: {
  },
  components: {
    Banner
  }
}
</script>

<style lang="less">
  .homePage {
    // height: 3.46rem;
    width: 7.5rem;
    overflow: hidden;
    margin: 0 auto;
    .banner {
      height: 3.46rem;
      width: 7.5rem;
      overflow: hidden;
      .mint-swipe-indicators {
        bottom: .23rem;
      }
      .mint-swipe-item {
        height: 3.46rem;
      }
      img {
        height: 3.46rem;
        width: 7.5rem;
      }
    }
    input {
      height: 30px;
      width: 300px;
    }
  }
</style>
