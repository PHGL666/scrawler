import React from 'react';
import './App.css';
import ScrawlyList from "./containers/ScrawlyList";
import ScrawlyHomepage from "./containers/ScrawlyHomepage";
import NewScrawlyInitiate from "./containers/NewScrawlyInitiate";
import NewScrawlyEdit from "./components/NewScrawlyEdit";

function App() {
    return (
        <div className="App">
            <ScrawlyHomepage/>
            <NewScrawlyInitiate/>
            <NewScrawlyEdit/>
            <ScrawlyList/>
        </div>
    );
}

export default App;

