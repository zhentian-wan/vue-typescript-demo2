import {Store, Module} from 'vuex'
import {RootState, HistoryState} from '../types'

const historyModule: Module<HistoryState, RootState> = {
    state: {
        history: []
    },
    mutations: {
        add(state, mutation) {
            state.history.push(mutation)
        }
    },
    namespaced: true
}

export const history =  (store: Store<RootState>) => {
    
    store.registerModule('history', historyModule)
    store.subscribe((mutation, state) => {
        if (mutation.type !== 'history/add') {
            store.commit('history/add', mutation)
        }
        
    })
}