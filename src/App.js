import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TakeNotes from './pages/TakeNotes';
import Notes from './pages/Notes';

function App(){
    return (

        
        <BrowserRouter>
         <Switch> 
            <Route exact path="https://carolinaperezflores.github.io/GDL003-lab-notes/public/" component={TakeNotes}/>
            <Route exact path="https://carolinaperezflores.github.io/GDL003-lab-notes/public/Notes" component={Notes}/>
        </Switch>
        </BrowserRouter>
        

     );
}

export default App;