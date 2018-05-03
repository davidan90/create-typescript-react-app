import * as React from 'react';
import './index.scss';

interface HelloWorldProps {
    greeting: string;
    destination?: string;
}

export default class HelloWorld extends React.Component<HelloWorldProps, {}> {
    public static defaultProps: Partial<HelloWorldProps> = {
        destination: 'World'
    };

    constructor(props: HelloWorldProps) {
        super(props);
    }

    render() {
        return <h1 className='title'> {this.props.greeting} {this.props.destination}!</h1>;
    }
}
