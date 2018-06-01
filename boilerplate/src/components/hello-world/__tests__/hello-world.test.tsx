import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { HelloWorld } from '../hello-world';

it('HelloWorld with no destination prop', () => {
    const helloWorld = new HelloWorld({greeting: 'hello'});
    expect(helloWorld.props.greeting).toBe('hello');
    expect(helloWorld.props.destination).toBeUndefined();
});

it('HelloWorld with destination prop', () => {
    const helloWorld = new HelloWorld({greeting: 'hello', destination: 'World'});
    expect(helloWorld.props.destination).toBe('World');
});
