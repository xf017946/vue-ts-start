<template>
  <div class="raffle">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    raffle
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Raffle extends Vue {
  mounted() {
    console.warn('mounted');
  }
  activated() {
    console.warn('keep alived activated');
  }
}
</script>
