import {GetterTree, MutationTree} from 'vuex'
import {LoginState} from '../types';

const state: LoginState = {
    user: '',
    isLoggedIn: false,
}

const getters: GetterTree<LoginState, any> = {

}

const mutations: MutationTree<LoginState> = {
    login (state) {
        state.isLoggedIn = true;
        state.user =  'alice';
    }
}

export const login = {
    state,
    getters,
    mutations,
}