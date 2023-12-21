import React from 'react';
import ForceGraph from './components/ForceGraph';
import graphData from './data/graphData';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Interactive Mind Map</h1>
            </header>
            <ForceGraph data={graphData} />
        </div>
    );
}

export default App;
