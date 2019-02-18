<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{'highlight':totalCount>0}">
            <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
          </div>
          <div class="num" v-show="totalCount>0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{'hightlight':totalPrice>0}">￥{{totalPrice}}</div>
        <div class="desc">另需配送费￥{{deliveryPrice}}</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'shopcart',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {

  },
  methods: {

  },
  transitions: {

  },
  components: {

  }
};
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl";
.shopcart
    position fixed
    left 0
    bottom 0
    background-color #141d27
    width 100%
    height 48px
    z-index 50
    .content
      display flex
      background-color #141d27
      font-size 0
      color rgba(255, 255, 255, 0.4)
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        box-sizing border-box
        border-radius 50%
        background-color #141d27
        .logo
          width 100%
          height 100%
          border-radius 50%
          text-align center
          background-color #212a33
          &.highlight
            background-color #00a0dc
          .icon-shopping_cart
            line-height 44px
            font-size 24px
            color #7a8085
            &.hightlight
              color #fff
        .num
          position absolute
          left 44px
          top 0
          width 24px
          font-size 9px
          font-weight 700
          color white
          background-color #rgb(240, 20, 20)
          box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
          line-height 16px
          border-radius 6px
          transform translateY(50%)
    .content-right
      flex 1
      pay
        width 105px
        padding 0 8px
        font-size 12px
        color rgba(255, 255, 255, 0.4)
        font-weight 700
        line-height 24px
</style>

