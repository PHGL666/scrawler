import React from 'react';
import './css/normalize.css';
import './css/skeleton.css';
import './font-awesome/css/font-awesome.min.css';
import './css/style.css';
import {Route, Switch} from "react-router-dom";
import ScrawlyHomepage from "./containers/ScrawlyHomepage";
import NewScrawlyInitiate from "./containers/NewScrawlyInitiate";
import NewScrawlyEdit from "./containers/NewScrawlyEdit";
import Scrawly_1_master from "./containers/Scrawly_1_master";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={ScrawlyHomepage}/>
                <Route path="/ScrawlyInitiate" exact component={NewScrawlyInitiate}/>
                <Route path="/ScrawlyEdit" exact component={NewScrawlyEdit}/>
                <Route path="/ScrawlyMaster" exact componoent={Scrawly_1_master}/>
            </Switch>
        </div>
    );
}

export default App;