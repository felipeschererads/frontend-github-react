import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

/**é preciso ter um route por página da aplicação 
* 
<Route path="/gituser/:id" component={Repositories}/>
*/
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
  
    </BrowserRouter>
  );
}