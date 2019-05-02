<template>
  <div class="home">
    <Counter :total="total" @increase="increase" @decrease="decrease" @reset="reset"/>
    <Counter :total="total2" @increase="increase2" @decrease="decrease2" @reset="reset2"/>
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Counter from '@/components/Counter.vue'; // @ is an alias to /src
import { State } from 'vuex-class';
import {Action, Getter, Mutation} from 'vuex-class';
import {CounterState} from '../types'

@Component({
  components: {
    HelloWorld,
    Counter
  },
})
export default class Home extends Vue {

    @Getter('counter/total') total: CounterState;
    @Action('counter/increase') 
    public increase() {}
    @Action('counter/decrease') 
    public decrease() {}
    @Action('counter/reset')
    public reset() {}

    @Getter('counter2/total') total2: CounterState;
    @Action('counter2/increase') 
    public increase2() {}
    @Action('counter2/decrease') 
    public decrease2() {}
    @Action('counter2/reset')
    public reset2() {}
}
</script>
