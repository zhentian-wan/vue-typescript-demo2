import {MutationTree, ActionTree, GetterTree} from 'vuex'
import { RootState, CounterState } from '@/types';

const state = () => ({
    total: 0
})

const mutations: MutationTree<CounterState> = {
    INCREASE(state) {
        state.total += 1
    },
    DECREASE(state) {
        state.total -= 1;
    },
    RESET(state, {value}) {
        state.total = value;
    }
}

export const actions: ActionTree<CounterState, RootState> = {
    increase({commit}) {
        commit('INCREASE')
    },
    decrease({commit}) {
        commit('DECREASE')
    },
    reset({commit}, payload) {
        commit('RESET', payload)
    }
}

const getters: GetterTree<CounterState, RootState> = {
    total: state => state.total,
    overflow: state => (max: number) => state.total > max,
}

export const counter = {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}