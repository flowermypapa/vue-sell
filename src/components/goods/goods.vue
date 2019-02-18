<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item" tracked-by="$index">
          <span class="text">
            <span v-if="item.type >= 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-category" tracked-by="$index">
          <h2 class="category">{{item.name}}</h2>
          <ul>
            <li v-for="food in item.foods" class="food" tracked-by="$index">
              <img class="food-icon" :src="food.icon"></img>
              <div class="food-info">
                <h3 class="food-name">{{food.name}}</h3>
                <div class="food-description">{{food.description}}</div>
                <div class="sell-data">
                  <span class="sell-count">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="new-price">￥{{food.price}}</span>
                  <span v-show="food.oldPrice"  class="old-price">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <shopcart v-ref:shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
</template>

<script type="text/ecmascript-6">
import shopcart from 'components/shopcart/shopcart.vue';
const ERR_OK = 0;
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: []
    };
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'guarantee', 'invoice'];
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
      }
		});
  },
  components: {
    shopcart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";

.goods
  position absolute
  display flex
  font-size 0
  top 168px
  bottom 48px
  width 100%
  overflow hidden
  .menu-wrapper
    flex none 
    width 80px
    background-color #f3f5f7
    .menu-item
      display table
      font-size 0
      padding 0 12px
      height 54px
      .icon
        display inline-block
        vertical-align top
        margin-right 2px
        width 12px
        height 12px
        background-size 12px 12px
        background-repeat no-repeat
        &.decrease
          bg-image("./decrease_3")
        &.discount
          bg-image("./discount_3")
        &.special
          bg-image("./special_3")
        &.guarantee
          bg-image("./guarantee_3")
        &.invoice
          bg-image("./invoice_3")
      .text
        display table-cell
        vertical-align middle
        width 56px
        font-size 12px
        font-weight 200
        line-height 14px
        border-1px(rgba(7, 17, 27, 0.1))
  .foods-wrapper
    flex 1
    overflow auto
    .food-category
      font-size 0
      .category
        font-size 12px
        color rgb(147, 153, 159)
        height 26px
        padding-left 14px
        line-height 26px
        background-color #f3f5f7
        border-left 2px solid #d9dde1
      .food
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.2))
        &:last-child
          border-none()
          padding-bottom 0
        .food-icon
          flex none
          width 57px
          height 57px
        .food-info
          flex 1
          margin-left 10px
          padding-top 2px
          .food-name
            font-size 14px
            color rgb(7, 17, 27)
            line-height 14px
            margin-bottom 8px
          .food-description, .sell-data
            font-size 10px
            color rgb(147, 153, 159)
            line-height 10px
          .food-description
            margin-bottom 8px
          .sell-data
            .sell-count
              margin-right 12px
          .price
            font-weight 700
            line-height 24px
            .new-price
              font-size 14px
              color rgb(240, 20, 20)
              margin-right 8px
            .old-price
              font-size 10px
              color rgb(147, 153, 159)
              text-decoration line-through


          
</style>