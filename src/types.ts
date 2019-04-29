export const TYPES = {
    UsersService: Symbol('UsersService'),
    HttpClient: Symbol('HttpClient')
}

export interface Todo {
    text: string;
    checked: boolean;
}

export interface RootState {
    todos: TodosState;
    login: LoginState
}

export interface TodosState {
    todos: Todo[];
}

export interface LoginState = {
    user: string;
    isLoggedIn: boolean;
}