//reference https://react.dev/reference/react/useRef

import { useState, useRef } from 'react';

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = ((now - startTime) / 1000).toFixed(2);
  }

  let paddedSeconds = secondsPassed.toString().padStart(5, "0");
  return (
    <>
      <h1>Time passed: {paddedSeconds.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}
function DurationComponent(exerciseItems) {
    return (
        <div> 
            <h1>{exerciseItems.exerciseName}</h1>
            <Stopwatch />
        </div>
    );
}

export default DurationComponent;
