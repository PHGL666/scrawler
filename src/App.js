import React from 'react';
import './App.css';
import NewScrawly from "./containers/NewScrawly";
import ScrawlyList from "./containers/ScrawlyList";

function App() {
  return (
    <div className="App">
      <NewScrawly/>
      <ScrawlyList/>
    </div>
  );
}

export default App;

