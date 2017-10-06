<template>
  <div id="tabbar">
    <router-link to="/">
    	<div :class="'bar-item' + ' to1 ' + (activebar === '1' ? 'ACTIVE' : '')"></div>
    </router-link>
    <router-link to="/friends">
    	<div :class="'bar-item' + ' to2 ' + (activebar === '2' ? 'ACTIVE' : '')"></div>
    </router-link>
    <router-link to="/user">
    	<div :class="'bar-item' + ' to3 ' + (activebar === '3' ? 'ACTIVE' : '')"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  methods: {
  },
  props: [ 'activebar' ]
}
</script>

<style lang="stylus" scoped>
@import '../style/utils.styl'

#tabbar
	display flex
	size 100vw 15vw
	border-top 1px solid #d6d9d8
	
a
	flex 1
	display block
	
.bar-item
	size 100%
	background no-repeat center center / 10vw 10vw
	
.to1
	background-image url(../assets/chat.png)
	&.ACTIVE
		background-image url(../assets/chat-A.png)

.to2
	background-image url(../assets/friends.png)
	&.ACTIVE
		background-image url(../assets/friends-A.png)
		
.to3
	background-image url(../assets/user.png)
	&.ACTIVE
		background-image url(../assets/user-A.png)
</style>
