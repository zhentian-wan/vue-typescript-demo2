<template>
<section>
    <h4>Todos</h4>
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
    <h4>Done</h4>
    <ul>
      <li v-for="todo in dones">{{ todo.text }}</li>
    </ul>
    <p>
      <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)">
    </p>
</section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Getter, Mutation} from 'vuex-class';
import {Todo} from '../types';

@Component({
})
export default class Todos extends Vue {
    @Getter todos: Todo[];
    @Getter dones: Todo[];

    @Mutation addTodo;

    newTodo: Todo = {
      text: '',
      checked: false
    }
}
</script>
