import {counter, actions} from '@/store/counter.ts'

it('should pass', () => {
    const context = {commit: jest.fn((type) => {}), state: {counter: 0}}
    console.log(actions.increase(context));
    expect(context.commit).toBeCalled();
})