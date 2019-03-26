<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from '@/components/common/header.vue'
export default {
  beforeMount () {
    this.remFn ()
  },
  methods: {
    // rem布局
    remFn () {
      if (window) {
        (function (win) {
          var doc = win.document
          var docEl = doc.documentElement
          var tid
          function refreshRem () {
            var width = docEl.getBoundingClientRect().width
            if (width > 750) {
              // 最大宽度
              width = 750
            }
            var rem = width / 7.5
            sessionStorage.setItem('rem', rem)
            docEl.style.fontSize = rem + 'px'
          }
          win.addEventListener(
            'resize',
            function () {
              clearTimeout(tid)
              tid = setTimeout(refreshRem, 300)
            },
            false
          )
          win.addEventListener(
            'pageshow',
            function (e) {
              if (e.persisted) {
                clearTimeout(tid)
                tid = setTimeout(refreshRem, 300)
              }
            },
            false
          )
          refreshRem()
        })(window)
      }
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less">

</style>
