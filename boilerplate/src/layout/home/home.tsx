import * as React from 'react';
import { HelloWorld } from '../../components';

export class Home extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <section id='Home'>
                <HelloWorld greeting='Hello'/>
            </section>
        );
    }
}
