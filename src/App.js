import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Billing from './components/billing';
import Confirm from './components/confirm';
import Login from './components/Login';
import Secure from './components/secure';
import Done from './components/done';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}>
      </Route>
      <Route path='/secure' element={<Secure />}>
      </Route>
      <Route path='/billings' element={<Billing />}>
      </Route>
      <Route path='/confirm' element={<Confirm />}>
      </Route>
      <Route path='/done' element={<Done />}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
