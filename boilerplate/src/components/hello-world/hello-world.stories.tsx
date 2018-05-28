import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { HelloWorld } from './hello-world';

storiesOf('HelloWorld', module)
    .add('default prop destination', () => (
        <HelloWorld greeting='Hello'/>
    ))
    .add('custom props', () => (
        <HelloWorld greeting='Hi' destination='Human'/>
    ));
