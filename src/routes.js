import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Inicial from './pages/Inicial';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Inicial} />
    </BrowserRouter>
  );
}