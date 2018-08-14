<template>
	<div class="list" ref="wrapper">
		<div>
		<div class="area">
			<div class="title boder-topbottom">当前城市</div>
			<div class="button-list">
			    <div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title boder-topbottom">热门城市</div>
			<div class="button-list">
			    <div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title boder-topbottom">A</div>
			<div class="item-list">
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
			</div>
			<div class="title boder-topbottom">A</div>
			<div class="item-list">
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
				<div class="item border-topbottom">阿拉善</div>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default{
	name:'CityList',
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper) 
	}
}
</script>
<style scoped>
	.title{
		line-height: 0.56rem;
		color: #fff;
		background:#eee;
		font-size: 0.32rem;
		color: #666;
		border:#ccc solid 1px;
	}
	.list{
		overflow: hidden;
		position: absolute;
		top: 1.72rem;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.button-list{
		overflow: hidden;
		padding: 0.1rem 0.6rem 0.1rem 0.1rem;
	}
	.button-wrapper{
		float: left;
		width: 33.3%;
	}
	.button{
		margin: 0.1rem;
		padding: 0.1rem 0;
		text-align: center;
		border: 0.02rem solid #ccc;
		border-radius: 0.06rem;
	}
	.item{
		line-height: 0.76rem;
		padding-left: 0.2rem;
		border:#ccc solid 1px;
	}
</style>