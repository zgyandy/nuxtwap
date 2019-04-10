<template>
  <div class="homePage">
    <!-- banner -->
    <div class="banner">
      <Banner :banner="banner"></Banner>
    </div>
    <linkList></linkList>
    <Leature :lecture="lectureArr"></Leature>
  </div>
</template>

<script>
import Banner from '~/components/common/banner.vue'
import linkList from '~/components/common/linkList'
// import bulletin from '~/components/common/bulletin'
import CheerStation from '~/components/cheerstation/cheer'
import Leature from '~/components/lecture/lecture'
// import Article from '~/components/article/article'
import loadMore from '~/components/common/loadMore'
import listTitle from '~/components/common/listTitle'
import {post, get} from '~/plugins/getData'
export default {
  async asyncData () {
    let { data } = await post('video/indexAdvertiement')
    return {
      banner : data.carousel,
      title : data.carousel[0]['title'],
      keywords: data.cutScreen[0]['title'],
    }
  },
  data () {
    return {
      banner: [],
      title: '名侦探柯南',
      keywords: '',
      description: '',
      lectureArr: []
    }
  },
  beforeCreate () {
    post('/video/indexVideo').then((res) => {
      this.lectureArr = res.data
      this.description = res.data['description']
    }).catch((err) => {
      throw err
    });
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
        name: 'keywords',
        content: this.keywords
      },
      {
        name: 'description',
        content: this.description
      }
      ]
    }
  },
  created () {

  },
  methods: {
  },
  components: {
    Banner, linkList, Leature
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
