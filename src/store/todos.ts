import {GetterTree, MutationTree} from 'vuex';
import {State} from '../types';
import {Todo} from '../types';

const state: State = {
    todos: [
        {text: 'Buy milk', checked: false},
        {text: 'Learning', checked: true},
        {text: 'Algorithom', checked: false},
    ],
};

const getters: GetterTree<State, any> = {
    todos: state => state.todos.filter(t => !t.checked),
    dones: state => state.todos.filter(t => t.checked)
};

const mutations: MutationTree<State> = {
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

const actions: ActionTree<tate, any> = {
    addTodoAsync(context, id) {
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(data => data.json())
            .then(item => {
                const todo: Todo = {
                    checked: false,
                    text: item.title
                }

                context.commit('addTodo', todo);
            })
    }
}

export const todos = {
    actions,
    state,
    mutations,
    getters
};
