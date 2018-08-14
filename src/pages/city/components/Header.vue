<template>
	<div class="header">
		<router-link to='/'>
			<div class="iconfont header-back">&#xe624;</div>
		</router-link>
		<span>城市选择</span>
	</div>
</template>
<script>
export default{
	name:'CityHeader',
}
</script>
<style scoped>
	.header{
		overflow: hidden;
		position: relative;
		height:0.86rem;
		line-height: 0.86rem;
		text-align: center;
		color: #fff;
		background:#00bcd4;
		font-size: 0.32rem
	}
	.header-back{
		font-size: 0.4rem;
		position: absolute;
		top: 0;
		left: 0;
		color:#fff;   /*因为router-link带有默认样式color*/
	}
</style>