<template>
  <div class="text-extra" @click="dropFn">
    <div class="title-box" :class="{h100: drop, shadow: !drop}">
      <span :class="{ellipsis: drop}">{{value}}</span>
      <!-- <van-icon style="padding: 0 5px;" :name="drop? 'arrow-down': 'arrow-up'" /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextExtraComponent',
  props: {
    value: String,
    stopDrop: { type: Boolean, default: false }
  },
  data() {
    return {
      drop: true
    };
  },
  methods: {
    dropFn() {
      this.$emit('click', '222');
      if (!this.stopDrop) {
        this.drop = !this.drop;
      }
    }
  }
};
</script>
<style scoped>
.text-extra {
  position: relative;
  width: 100%;
  bottom: 1px;
}
.text-extra .title-box {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  display: inline-flex;
  align-items: baseline;
  justify-content: space-between;
  text-align: left;
}
.text-extra .ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.text-extra .h100 {
  height: 100%;
}
.text-extra .shadow {
  box-shadow: 0 0 10px #d8d0d0;
  border-radius: 5px;
}
</style>
