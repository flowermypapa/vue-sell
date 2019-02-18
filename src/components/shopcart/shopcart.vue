<template>
  <div class="shopcart">
      <div class="cart-left">
        <div class="icon">
          <span class="icon-shopping_cart"></span> 
        </div>
        <span>￥0</span>
        <span>另需配送费￥{{seller.deliveryPrice}}元</span>
      </div>
      <div class="cart-right">
        ￥{{seller.minPrice}}起送
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.shopcart
    display block
    position absolute
    left 0
    bottom 0
    .cart-left
      .icon
        background-color rgba(0, 0, 0, 0.2)
        .icon-shopping_cart
          font-size 24px
          color rgba(255, 255, 255, 0.4)
          line-height 24px
    .cart-right
      width 105px
      padding 0 8px
</style>

