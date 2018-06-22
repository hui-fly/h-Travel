<template>
	<div class="header">
		<div class="header-left">
		  <div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
		  <span class="iconfont">&#xe632;</span>
		  <span>输入城市/景点/游玩主题</span>
		</div>
		<router-link to='./city'>
		  <div class="header-right">
		    <span>城市</span>
		    <span class="iconfont arrow-icon">&#xe6aa;</span>
		  </div>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style>
  .header{                
  	display: flex;
  	line-height: .86rem;/*会继承到子元素,使子元素撑开header*/
  	background:#00bcd4;
  	color:#fff;
  }
  	
  .header-left{
  	width:.84rem;
  	text-align: center;
  }
 
    
  .header-input{
  	flex:1;
  	margin-top: .12rem;
  	color: #ccc;
    padding-left:.2rem; 
  	height: .64rem;
  	line-height: .64rem;
  	background: #fff;
  	border-radius: .1rem;
  }
     
  .header-right{
    width:1.24rem;
    text-align: center;
    color:#fff;
  }

  .arrow-icon{
    margin-left: .-04rem;
    font-size: .24rem;
  }
</style>