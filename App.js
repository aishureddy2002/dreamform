import React, { useState } from 'react';
import DreamForm from './DreamForm';
import MoodChart from './MoodChart';

function App() {
    const [dreams, setDreams] = useState([]);

    const addDream = (newDream) => {
        setDreams([...dreams, newDream]);
    };

    return (
        <div className="app">
            <h1>DreamScope - Sleep & Dream Mood Analyzer</h1>
            <DreamForm onAddDream={addDream} />
            <MoodChart dreams={dreams} />
        </div>
    );
}

export default App;
