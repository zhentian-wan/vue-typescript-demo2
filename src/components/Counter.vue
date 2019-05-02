<template>
    <div class="counter">
        <div class="total" v-bind:style="{ color: overflow(5) ? 'red': 'black'}">
            {{total}}
        </div>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
        <button @click="resetCount({value: 0})">c</button>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Emit, Prop} from 'vue-property-decorator';
import {Action, State, Getter, Mutation} from 'vuex-class';
import {mapGetters, mapActions} from 'vuex';

@Component({
})
export default class Counter extends Vue {

    
    @Getter('counter/overflow') overflow;

    @Prop() total: number;
    @Emit('increase') increase() {};
    @Emit('decrease') decrease() {};
    @Emit('reset') resetCount(payload: any) {
      return payload;
    }
}
</script>

