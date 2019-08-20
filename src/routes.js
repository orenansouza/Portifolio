import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Inicial from './pages/Inicial';
import Experiencias from './pages/Experiencias';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Inicial} />
      <Route path='/experiencias' component={Experiencias} />
    </BrowserRouter>
  );
}