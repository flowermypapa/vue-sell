<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="avatar">
      </div><!--remove space
      --><div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          <span>{{seller.description}}/{{seller.deliveryTime}}分钟</span>
        </div>
        <div class="support">
          <span v-if="seller.supports" class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span v-if="seller.supports" class="text">{{seller.supports[0].description}}</span>
        </div>
        <div v-if="seller.supports" class="support-count">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-icon"></span><!-- remove space
      --><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="avatar">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="detail-title">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="discount-info">
            <div class="discount-title">
              <span class="line"></span>
              <span class="title">优惠信息</span>
              <span class="line"></span>
            </div>
            <div v-for="support in seller.supports" class="support" tracked-by="$index">
              <span class="icon" :class="classMap[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </div>
            <div class="discount-title">
              <span class="line"></span>
              <span class="title">商家公告</span>
              <span class="line"></span>
            </div>
            <div class="seller-board">{{seller.bulletin}}</div>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">
        <i class="icon-close"></i>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import star from '../star/star';

export default {
  name: 'vheader',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  created: function() {
    this.classMap = ['decrease', 'discount', 'special', 'guarantee', 'invoice'];
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  },
  components: {
    star
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";

.header
  position relative
  color white
  background-color rgba(7, 17, 27, 0.5)
  .content-wrapper
    position relative
    padding 24px 16px 12px 24px
    font-size 0
    .avatar
      display inline-block
      img
        width 64px
        height 64px
        border-radius 2px
    .content
      display inline-block
      font-size 14px
      font-weight 200
      margin 2px 0 0 16px
      vertical-align top
      .title
        font-size 0
        .brand
          display inline-block
          vertical-align top
          margin-right 6px
          width 30px
          height 18px
          bg-image('./brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          display inline-block
          vertical-align top
          font-size 16px
          font-weight bold
          line-height 18px
      .description
        margin 8px 0 10px 0
        font-size 12px
        font-weight 200
        line-height 12px
      .support
        font-size 0
        .icon
          display inline-block
          vertical-align top
          margin-right 4px
          width 12px
          height 12px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image("./decrease_1")
          &.discount
            bg-image("./discount_1")
          &.special
            bg-image("./special_1")
          &.guarantee
            bg-image("./guarantee_1")
          &.invoice
            bg-image("./invoice_1")
        .text
          display inline-block
          vertical-align top
          font-size 10px
          font-weight 200
          line-height 12px
      .support-count
        position absolute
        right 12px
        bottom 13px
        height 24px
        line-height 24px
        padding 0px 8px
        font-size 10px
        font-weight 200
        border-radius 14px
        background-color rgba(0,0,0,0.2)
        text-align center
        .count
          margin-right 2px
        .icon-keyboard_arrow_right
          vertical-align middle
          line-height 24px
  .bulletin-wrapper
    position relative  
    height 28px
    line-height 28px
    padding 0 22px 0 12px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    background-color rgba(7, 17, 27, 0.2)
    .bulletin-icon
      display inline-block
      vertical-align top 
      margin-top 8px
      width 22px
      height 12px
      background-size 22px 12px
      background-repeat no-repeat
      bg-image("./bulletin")
    .bulletin-text
      vertical-align middle
      margin 0 4px
      overflow hidden
      font-size 10px
      font-weight 200
      line-height 28px
    .icon-keyboard_arrow_right
      position absolute
      right 12px
      bottom 8px
      font-size 10px
  .background
    position absolute
    top:0
    left:0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
    img 
      width 100%
      height 100%
  .detail
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 100%
    background-color rgba(7, 17, 27, 0.8)
    backdrop-filter blur(10px)
    overflow auto
    .detail-wrapper
      width 100%
      min-height 100%
      .detail-main
        padding 64px 36px
        text-align center
        .detail-title
          font-size 16px
          font-weight 700
          line-height 16px
        .star-wrapper
          margin-top 16px
          padding 2px 0
          text-align center
        .discount-info
          font-size 0
          .discount-title
            font-size 0
            display flex
            margin 28px auto 24px auto
            .title
              flex none
              padding 0 12px
              font-size 14px
              font-weight bold
              line-height 14px
            .line
              flex auto
              position relative
              top 7px
              width 112px
              border-top 1px solid rgba(255, 255, 255, 0.2)
          .support
            font-size 0
            padding 0 12px
            margin-bottom 12px
            text-align left
            &:last-child
              margin-bottom 0
            .icon
              display inline-block
              vertical-align middle
              margin-right 6px
              width 16px
              height 16px
              background-size 16px 16px
              background-repeat no-repeat
              &.decrease
                bg-image("./decrease_2")
              &.discount
                bg-image("./discount_2")
              &.special
                bg-image("./special_2")
              &.guarantee
                bg-image("./guarantee_2")
              &.invoice
                bg-image("./invoice_2")
            .text
              display inline-block
              vertical-align middle
              font-size 12px
              font-weight 200
              line-height 12px
          .seller-board
            text-align left
            font-size 12px
            font-weight 200
            line-height 24px
    .detail-close
      position relative
      width 32px
      height 32px
      margin -48px auto 0 auto
      clear both
      font-size 32px
      color rgba(255, 255, 255, 0.5)

</style>
