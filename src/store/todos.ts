import {GetterTree, ActionTree,  MutationTree} from 'vuex';
import {TodosState, RootState} from '../types';
import {Todo} from '../types';

const state: TodosState = {
    todos: [
        {text: 'Buy milk', checked: false},
        {text: 'Learning', checked: true},
        {text: 'Algorithom', checked: false},
    ],
};

const getters: GetterTree<TodosState, RootState> = {
    todos: (state, getters, rootState) => state.todos.filter(t => !t.checked),
    dones: (state, getters, rootState) => state.todos.filter(t => t.checked)
};

const mutations: MutationTree<TodosState> = {
    addTodo(state, newTodo) {
        const copy = {
            ...newTodo
        };
        state.todos.push(copy);
    },
    toggleTodo(state, todo) {
        todo.checked = !todo.checked;
    }
};

const actions: ActionTree<TodosState, RootState> = {
    addTodoAsync(context, id) {
        console.log('root', context)
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(data => data.json())
            .then(item => {
                const todo: Todo = {
                    checked: false,
                    text: context.rootState.login.user + ': ' + item.title
                }

                context.commit('addTodo', todo);
            })
    }
}

export const todos = {
    actions,
    state,
    mutations,
    getters,
    namespaced: true
};
