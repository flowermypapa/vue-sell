<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" class="star-item" :class="itemClass" track-by="$index"></span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  data() {
    return {
      LENGTH: 5,
      CLS_ON: 'on',
      CLS_OFF: 'off',
      CLS_HALF: 'half'
    };
  },
  computed: {
    starType: function() {
      return 'star-' + this.size;
    },
    itemClasses: function() {
      let result = [];
      // 四舍五入
      let score = Math.floor(this.score * 2) / 2;
      let scoreFloatPart = score % 1;
      let scoreIntPart = Math.floor(score);
      // draw on-star
      for (let i = 0; i < scoreIntPart; i++) {
        result.push(this.CLS_ON);
      }
      // draw half-star if it has
      if(scoreFloatPart != 0) {
        result.push(this.CLS_HALF);
      }
      // draw off-star
      while(result.length < this.LENGTH) {
        result.push(this.CLS_OFF);
      }
      return result;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"

.star
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right 0
      &.on
        bg-image("./star48_on")
      &.off
        bg-image("./star48_off")
      &.half
        bg-image("./star48_half")
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image("./star36_on")
      &.off
        bg-image("./star36_off")
      &.half
        bg-image("./star36_half")
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 4px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image("./star24_on")
      &.off
        bg-image("./star24_off")
      &.half
        bg-image("./star24_half")

</style>

