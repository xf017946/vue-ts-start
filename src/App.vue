<template>
  <div id="app">
    <keep-alive :include="keepAliveArray">
      <router-view class="router_view"/>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';
// import { Toast } from 'mint-ui';
@Component
export default class App extends Vue {
  // @State keepAliveArray!: string[];  // @State('foo') stateFoo
  @State keepAliveArray!: string[];
  keepAliveArr: string[] = [];
  headVisible: boolean = false;
}
</script>

<style lang="scss">
body,
html,
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
body{
  -webkit-overflow-scrolling: touch;
}

#app {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  .router_view {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    position: relative;
    overflow: hidden;
  }
}
/* 全局处input  textarea标签组织选中操作*/
*:not(input, textarea) {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>
