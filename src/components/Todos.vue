<template>
<section>
    <h4>Todos</h4>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)">
        {{ todo.text }}
      </li>
    </ul>
    <h4>Done</h4>
    <ul>
      <li v-for="todo in dones">
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)">
        {{ todo.text }}
      </li>
    </ul>
    <p>
      <label for="">
        Add todo:
        <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)">
      </label>
      <label for="">
        Add todo async:
        <input type="text" v-model="id" @keyup.enter="addTodoAsync(id)">
      </label>

    </p>
</section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Action, State, Getter, Mutation} from 'vuex-class';
import {Todo} from '../types';

@Component({
})
export default class Todos extends Vue {
    @Getter todos: Todo[];
    @Getter dones: Todo[];

    @Mutation addTodo;
    @Mutation toggleTodo;
    @Action addTodoAsync;

    newTodo: Todo = {
      text: '',
      checked: false
    }

    id: string = '1';
}
</script>
