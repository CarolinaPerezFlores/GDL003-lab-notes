 import React from 'react';
 import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TakeNotes from './pages/TakeNotes';
import Notes from './pages/Notes';
function App(){
    return (

        <BrowserRouter>
         <Switch> 
            <Route exact path="/TakeNotes" component={TakeNotes}/>
            <Route exact path="/TakeNotes/Notes" component={Notes}/>
            

        </Switch>
        </BrowserRouter>
        

     );
}

export default App;