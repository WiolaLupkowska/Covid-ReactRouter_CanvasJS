import React, {Component} from 'react';
import Nav from './Nav'
import Table from './Table'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';


import TableDetail from './TableDetail'





function App() {
    return(

        <Router>
        <div className={"App"}>
            <Nav />
            <Switch>
                <Route path="/info/:country" component={TableDetail}/>
                <Route path="/table" exact component={Table}/>


            </Switch>
            <div>
                <h1>Here you can find current data on virus. </h1>
                <h3>Click above</h3>
            </div>
        </div>
        </Router>
    )
}

export default App;
