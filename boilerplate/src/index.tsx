import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from './components/hello-world/hello-world';

ReactDOM.render(
    <HelloWorld greeting="Hello"/>,
    document.getElementById('ts-react-app')
);