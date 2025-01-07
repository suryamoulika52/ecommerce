import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);
dom.watch();
