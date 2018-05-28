import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './layout';
import './app.scss';

export class App extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </React.Fragment>
        );
    }
}
