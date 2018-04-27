import * as React from 'react';

interface HelloWorldProps { 
    greeting: string;
}

export class HelloWorld extends React.Component<HelloWorldProps, {}> {
    render() {
        return <h1> {this.props.greeting} world!</h1>;
    }
}
