<template>
  <div id="container">
      <div id="title">
        消息
      </div>
      <div id="mainsite" @click="count">
        <div class="chat">
          <div class="chat-icon"></div>
          <div class="chat-title">{{ qzone }}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'function'
    }
  },
  computed: {
    qzone () {
      return this.$store.state.qzone 
    }
  },
  methods: {
    count () {
      console.log(this.$store.commit('qzPlus'))
      console.log(this.$store);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../style/utils.styl'

#container
  display flex
  flex-direction column
  size 100vw 100vh
  
  #title
    size 100vw 12vw
    background #3b59c6
    color #fff
    text-align center
    line-height @height
    
  #mainsite
    flex 1
    overflow auto
  
  tab-bar
    size 100vw 20vw
</style>
