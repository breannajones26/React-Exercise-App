import './App.css';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(prev => prev + 1);
    };
    const resetButton = () => {
        setCount(0);
    };

    return (
    <div>
        <p>Reps: {count}</p>
    <button onClick={addOne}>Add Rep:</button>
    <button onClick={resetButton}>Reset:</button>
    </div>
    );
}

function RepetitionComponent(exerciseItems) {
    return (
        <div> 
            <h1>{exerciseItems.exerciseName}</h1>
            <Counter />
        </div>
    );
}

export default RepetitionComponent;