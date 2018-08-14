<template>
  <div class="recommend">
	  <div class="recommend-tittle">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.tittle}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    list:Array,
  },
}
</script>

<style scoped>
  .recommend-tittle{
    line-height: .8rem;
    text-indent: .2rem;/*缩进*/
    background: #eee;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem; 
    padding: .1rem;
  }
  .item-img{
    width: 1.7rem;
    height: 1.7rem;
  }
  .item-info{
    flex: 1;
    min-width: 0;
    padding-left: .1rem;
  }
  .item-title{
    line-height: .54rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc{
    line-height: .4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-button{
    background: #ff9300;
    padding: 0 .1rem;
    border-radius: .06rem;
    color: #fff;
    margin-top: .2rem;
  }
</style>


