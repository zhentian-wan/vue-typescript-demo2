import {GetterTree, MutationTree} from 'vuex';
import {State} from '../types';

const state: State = {
    todos: [
        {text: 'Buy milk', checked: false},
        {text: 'Learning', checked: true},
        {text: 'Algorithom', checked: false},
    ],
};

export const getters: GetterTree<State, any> = {
    todos: state => state.todos.filter(t => !t.checked),
    dones: state => state.todos.filter(t => t.checked)
};

export const mutations: MutationTree<State> = {
    addTodo(state, newTodo) {
        const copy = {
            ...newTodo
        };
        state.todos.push(copy);
    }
};

export default state;
