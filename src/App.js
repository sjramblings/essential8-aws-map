import React, { useState } from 'react'; // Import useState from React
import ForceGraph from './components/ForceGraph';
import graphData from './data/graphData';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
    return (
        <div className="App container bg-light">
            <header className="App-header my-4">
                <h1 className="text-center">Essential 8 AWS Mapping</h1>
            </header>
            <div className="Graph-container my-4">
                <ForceGraph data={graphData} />
            </div>
        </div>
    );
}

export default App;
