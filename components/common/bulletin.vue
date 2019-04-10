<template>
  <dl class="bulletin" v-show="bulletin"  >
    <dt>海同快报</dt>
    <dd class="content">
        <swiper :options="swiperOption" class="swiper-no-swiping" v-if="bulletin.length">
            <swiper-slide  v-for="(item,index) in bulletin" :key="index">
                <a :href="item.url ? item.url : ''">{{item.title ? item.title : ''}}</a>
            </swiper-slide>
        </swiper>
    </dd>
    <dd  v-show="sandian">
      <img src="../../assets/img/sandian.png" alt="">
    </dd>
  </dl>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['bulletin'],
  data () {
    return {
      sandian: false,
      swiperOption:{
          pagination:".swiper-pagination",
          direction:"vertical",
          autoplay:{
              disableOnInteraction:false,
              delay:3000,
          },
          loop:true,
      }
    }
  },
  methods: {
    // 中文字符 符号判断
    isChinese(temp){
      var num = 0
      var re=/^[\u4e00-\u9FEF\u3002\uff1f\uFF01\uFF0C\u3001\uFF1A-\uFF1B\u300C-\u300F\u2018-\u2019\u201C-\u201D\uFF08-\uFF09\u3014-\u3015\u3010-\u3011\u2013\u2014\u2026\uFF0E\u3008-\u300B]/
      for (var i = 0; i < temp.length; i++) {
        if (re.test(temp[i])) {
          num +=2
        }else {
          num +=1
        }
      }
      if (num > 18) {
        this.sandian = true
      }
    },
  },
  watch: {
    bulletin: function (newData, oldData) {
      if (newData && newData.title) {
        this.isChinese(newData.title)
      }
    }
  },
    components: {
        swiperSlide, swiper
    }
}
</script>

<style lang="less" scoped>
  .bulletin {
    width: 7.1rem;
    height: 0.71 - .11rem;
    padding: .11rem .2rem;
    border-top: 1px solid #dadada;
    font-size: 0.26rem;
    background: #fff;
    line-height: .6rem;
    overflow: hidden;
    position: relative;
    dt {
      height: .6rem;
      width: 1.4rem;
      float: left;
      color: #e10030;
      font-size: 0.28rem;
      border-right: 1px solid #dadada;
    }
    dd.content {
      height: .6rem;
      width: 5.2rem;
      float: left;
      padding-left: .2rem;
      color: #999999;
      overflow: hidden;
      white-space: nowrap;
      .swiper-container{
          height: 1.8rem;
          margin-top: 0.02rem;
      }
     a {
       height: 100%;
       width: 100%;
     }
    }
    dd:last-child {
      width: .16rem;
      float: left;
      img {
        width: .16rem;
      }
    }
  }
</style>
