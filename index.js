import TextExtraComponent from './components/text-extra-comp.vue';

// 注册组件 vue.js 插件的install方法

const TextExtra = {
  install: function (Vue) {
    Vue.component('TextExtra', TextExtraComponent);
  }
};
export default TextExtra;
