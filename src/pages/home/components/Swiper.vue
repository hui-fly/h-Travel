<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for='item of list' :key="item.id" v-if="showSwiper">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list:Array
  },
  data () {
    return {
      swiperOption:{ 
      	pagination: ".swiper-pagination",
      	loop: true,
      }
    }
  },
  computed:{
    showSwiper (){
      return this.list.length;
    }
  }
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