import {MutationPayload} from 'vuex';

export const TYPES = {
    UsersService: Symbol('UsersService'),
    HttpClient: Symbol('HttpClient')
}

export interface Todo {
    text: string;
    checked: boolean;
}

export interface HistoryState {
    history: MutationPayload[]
}

export interface RootState {
    todos: TodosState;
    login: LoginState,
    history: HistoryState,
    counter: CounterState
}

export interface TodosState {
    todos: Todo[];
}

export interface LoginState {
    user: string;
    isLoggedIn: boolean;
}

export interface PluginOptions {
    presist: boolean
}

export interface SpinnerState {
    loading: boolean;
}

export interface CounterState {
    total: number
}