import React from 'react';
import Basics from './Basics';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

library.add(fab,faPhone,faEnvelope);

const App = () => {
	return <Basics />;
};

export default App;
