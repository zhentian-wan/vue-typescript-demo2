import {inject, injectable} from 'inversify';
import {TYPES} from './types';

@injectable()
export class UsersService {

    constructor(@inject(TYPES.HttpClient) private http) {
    }

    getUsers(): Promise<any> {
        return this.http.get('https://jsonplaceholder.type');
    }
}