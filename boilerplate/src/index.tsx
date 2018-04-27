import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from './components';

ReactDOM.render(
    <HelloWorld greeting="Hello"/>,
    document.getElementById('ts-react-app')
);