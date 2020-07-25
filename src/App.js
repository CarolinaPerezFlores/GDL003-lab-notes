import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TakeNotes from './pages/TakeNotes';
import Notes from './pages/Notes';

function App(){
    return (

        
        <BrowserRouter>
         <Switch> 
            <Route exact path="/" component={TakeNotes}/>
            <Route exact path="/Notes" component={Notes}/>
        </Switch>
        </BrowserRouter>
        

     );
}

export default App;