<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for='item of swiperList' :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption:{ 
      	pagination: ".swiper-pagination",
      	loop: true,
      },
      swiperList:[{
   		id:'001',
   		imgUrl:'https://imgs.qunarzz.com/piao/fusion/1805/5f/2b2abe4a02a62602.jpg_640x170_f410ac67.jpg'
      },{
        id:'002',
   		imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/bd/04554e7c67650302.jpg_640x170_a793a191.jpg"
      },{
        id:'003',
   		imgUrl:"https://imgs.qunarzz.com/piao/fusion/1805/c0/858481b3e2d65802.png_640x170_90ebc386.png"
        }
      ]
    }
  },
}
</script scoped>
<style>
  .swiper-img{
  	width: 100%;
  }
  .wrapper{
  	overflow: hidden;
  	height: 0;
  	width: 100%;
  	padding-bottom:26.25%;        /*是宽高比为26.25%*/
  	background: #333;
  }
  .swiper-pagination-bullet-active{
	  background: #fff;
  }
</style>