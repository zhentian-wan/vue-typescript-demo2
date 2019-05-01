import {Store, Module} from 'vuex'
import {RootState, HistoryState, PluginOptions} from '../types'

const historyModule: Module<HistoryState, RootState> = {
    state: {
        history: []
    },
    mutations: {
        add(state, mutation) {
            state.history.push(mutation)
        },
        load (state) {
            console.log(JSON.parse(localStorage.getItem('history') || '[]'))
            state.history = JSON.parse(localStorage.getItem('history') || '[]')
        }
    },
    namespaced: true
}

export const history = (options: PluginOptions) => (store: Store<RootState>) => {
    
    store.registerModule('history', historyModule)
    if (options.presist) {
        store.commit('history/load')
    } 

    store.subscribe((mutation, state) => {
        if (mutation.type !== 'history/add') {
            store.commit('history/add', mutation)

            if (options.presist) {
                localStorage.setItem('history', JSON.stringify(state.history.history))
            }
        }
        
    })
}