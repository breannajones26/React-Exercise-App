import './App.css';
import './components/DurationExercise/index.js'
import DurationComponent from './components/DurationExercise/index.js';
import './components/RepetitionExercise'
import RepetitionComponent from './components/RepetitionExercise/index.js';
import React, { useState } from 'react';

const exerciseItems = [
  {
    exerciseType: "Duration",
    exerciseNames: [
      {exerciseName: "Running"},
      {exerciseName: "Planks"}
    ]
  },
  {
    exerciseType: "Repetition",
    exerciseNames: [
      {exerciseName: "Push-Ups"},
      {exerciseName: "Squats"}
    ]
  }
];

function App() {
  const [selectedExercise, setselectedExercise] = useState(null);

  const button = (exerciseType, exerciseName) => {
    setselectedExercise({ exerciseType, exerciseName});
  };

  const renderExerciseComponent = () => {
    if (!selectedExercise) return null;
    
    const { exerciseType, exerciseName } = selectedExercise;

    if (exerciseType === "Duration") {
      return <DurationComponent exerciseName={exerciseName} />;
    }
    if (exerciseType === "Repetition") {
      return <RepetitionComponent exerciseName={exerciseName} />;
    }
    return null;
  }
  return (
    <div className="App">
      {!selectedExercise && <h1>The Exercise App</h1>}
      {selectedExercise ? (
        renderExerciseComponent()
      ) : (
        <div>
          <p>My Exercises:</p>
          {exerciseItems.map(item => 
          item.exerciseNames.map(exercise => (
            <button
            key={exercise.exerciseName}
            onClick={() => button(item.exerciseType, exercise.exerciseName)}
            >
              {exercise.exerciseName}
            </button>
          ))
      )}
    </div>
    )}
    </div>
  );
}


export default App;
