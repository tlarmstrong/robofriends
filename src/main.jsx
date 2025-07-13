import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'tachyons';

import { robots } from './assets/robots';

import './index.css'

import App from './containers/app/app.component';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
