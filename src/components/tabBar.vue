<template>
  <div id="tabbar">
    <div class="bar-item"></div>
    <div class="bar-item"></div>
    <div class="bar-item"></div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
}
</script>

<style lang="stylus" scoped>
@import '../style/utils.styl'

#tabbar
	display flex
	size 100vw 15vw
	border-top 1px solid #d6d9d8
	
.bar-item
	display inline-block
	flex 1
	background url(../assets/test.png) no-repeat center center / 10vw 10vw
</style>
