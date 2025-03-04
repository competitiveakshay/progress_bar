import { useState, useEffect } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
        aria-live="polite"
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [5, 10, 35, 45, 75, 85, 95, 100];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
