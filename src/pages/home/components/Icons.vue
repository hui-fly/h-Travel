<template>
  <div class="icons">
	  <swiper :options="swiperOption">
		<swiper-slide v-for='page of pages'>
		  <div class="icon" v-for='item of page'>
		    <img class="icon-img" :src="item.imgUrl">
		    <p class="icon-desc">{{item.desc}}</p>
		  </div>
		</swiper-slide>
	  </swiper>
  </div>
</template>
<script>
export default{
	name:'HomeIcons',
	props:{
		list:Array,
	},
	data () {
		return {
			swiperOption:{
				autoPlay:false,
			}
		}
	},
	computed:{
		pages() {
			const pages = [];
			this.list.forEach((item,index)=>{ //将一维数组分成二维数组
				const page = Math.floor(index/8);
				if(!pages[page]){
					pages[page]=[];
				}
				pages[page].push(item);
			})
			return pages
		}
	}
}
</script>

<style>
  .swiper-container{       /*swiper添加的容器*/
  	height: 0px;
  	padding-bottom: 50%;  /*是宽高比是50%*/
  }
  .icon{
  	overflow: hidden;
  	float: left;
  	width: 25%;
  	height: 0px;
  	box-sizing: border-box;
  	padding: 2% 5% 23% 5%;
  }
  .icon-img{
  	width: 100%;
  }
  .icon-desc{
    display: block;
    margin: 0 auto;
    text-align: center;
    height: .5rem;
    line-height: .5rem;
    overflow: hidden;
    white-space: nowrap;   /*当字符串过长时显示...*/
    text-overflow: ellipsis;
  }
</style>