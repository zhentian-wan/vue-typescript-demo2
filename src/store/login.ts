import {GetterTree, MutationTree, Module} from 'vuex'
import {LoginState, RootState} from '../types';

const state: LoginState = {
    user: '',
    isLoggedIn: false,
}

const getters: GetterTree<LoginState, RootState> = {

}

const mutations: MutationTree<LoginState> = {
    login (state) {
        state.isLoggedIn = true;
        state.user =  'alice';
    }
}

export const login: Module<LoginState, RootState> = {
    state,
    getters,
    mutations,
    namespaced: true
}