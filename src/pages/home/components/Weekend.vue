<template>
  <div class="weekend">
    <div class="weekend-tittle">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrpper">
          <img class="item-img" :src="item.imgUrl">
        </div>
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
  name: 'HomeWeekend',
  props:{
    list:Array,
  },
}
</script>

<style scoped>
  .weekend-tittle{
    line-height: .8rem;
    text-indent: .2rem;/*缩进*/
    background: #eee;
  }
  .item-img-wrpper{
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom:37.5%;        /*是宽高比为26.25%*/
  }
  .item-img{
    width: 150%;
  }
  .item-info{
    padding: 0.1rem;
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
</style>


