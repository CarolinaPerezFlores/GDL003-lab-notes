 import React from 'react';
 import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Log from './pages/Log';
import Notes from './pages/Notes';
function App(){
    return (

        <BrowserRouter>
         <Switch> 
            <Route exact path="/Log" component={Log}/>
            <Route exact path="/Log/Notes" component={Notes}/>
            

        </Switch>
        </BrowserRouter>
        

     );
}

export default App;