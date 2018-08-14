<template>
  <div class="icons">
	  <swiper>
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
	data () {
		return {
			iconList:[{
				id:"002",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1804/53/f7c33a4412d59e02.png",
				desc: '滑雪',
			},{
				id:"003",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png",
				desc: '温泉',
			},{
				id:"004",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png",
				desc: '滑雪',
			},{
				id:"005",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1704/fd/7b733d3656f4d002.png",
				desc: '动物园',
			},{
				id:"006",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png",
				desc: '门票',
			},{
				id:"007",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png",
				desc: '一日游',
			},{
				id:"008",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png",
				desc: '滑雪',
			},{
				id:"009",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png",
				desc: '滑雪',
			},{
				id:"010",
				imgUrl:"https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png",
				desc: '滑雪',
			}]
		}
	},
	computed:{
		pages() {
			const pages = [];
			this.iconList.forEach((item,index)=>{
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