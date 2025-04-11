const StatsPanel = ({ correct, incorrect, wpm, timeLeft }) => {
    const total = correct + incorrect;
    const accuracy = total === 0 ? 100 : ((correct / total) * 100).toFixed(1);
  
    return (
      <div className="flex justify-between text-lg font-medium">
        <span>✅ Correct: {correct}</span>
        <span>❌ Incorrect: {incorrect}</span>
        <span>⚡ WPM: {wpm}</span>
        <span>⏱ Time Left: {timeLeft}s</span>
      </div>
    );
  };
  
  export default StatsPanel;
  