import {Container} from 'inversify';
import {UserService} from './user-service';
import {HttpClient} from './http-client';
import {TYPES} from './types';
import getDecorators from 'inversify-inject-decorators';

const container = new Container();

container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<HttpClient>(TYPES.HttpClient).to(HttpClient);

// Lazy inject is good for props
const {lazyInject} = getDecorators(container);

export {container, lazyInject}