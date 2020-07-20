import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

render(<App prefix={document.location.pathname} />, app);