<template>
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State} from 'vuex-class';
import {Todo} from '../types';

@Component({
})
export default class Todos extends Vue {
    @State todos: Todo[]
}
</script>
