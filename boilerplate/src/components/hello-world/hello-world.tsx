import * as React from 'react';
import { HelloWorldProps } from './interfaces';
import './hello-world.scss';

export class HelloWorld extends React.Component<HelloWorldProps, {}> {
    public static defaultProps: Partial<HelloWorldProps> = {
        destination: 'World'
    };

    constructor(props: HelloWorldProps) {
        super(props);
    }

    render() {
        const { greeting, destination } = this.props;
        return greeting ? <h1 className='title'>{`${greeting} ${destination}!`}</h1> : null;
    }
}
