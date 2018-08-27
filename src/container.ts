import {Container} from 'inversify';
import {UsersService} from './user-service';
import {HttpClient} from './http-client';
import {TYPES} from './types';
import getDecorators from 'inversify-inject-decorators';

const container = new Container();

container.bind<UsersService>(TYPES.UsersService).to(UsersService);
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient);

// Lazy inject is good for props
const {lazyInject} = getDecorators(container);

export {container, lazyInject}