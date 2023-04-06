import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './assets/styles/Global.style';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <SideBarContainer /> */}
    {/* <NavigationContainer /> */}
  </React.StrictMode>
);
