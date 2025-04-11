import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import WordDisplay from './WordDisplay';
import StatsPanel from './StatsPanel';
import generateWords from '../data/generateWords';

const TypingTest = () => {
  const TEST_DURATION = 60; // in seconds
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const inputRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [wpmData, setWpmData] = useState([]);

  useEffect(() => {
    setWords(generateWords(50));
  }, []);

  const getWPM = () => {
    const minutes = (TEST_DURATION - timeLeft) / 60;
    const wpm = minutes > 0 ? (correctChars / 5) / minutes : 0;
    return Math.round(wpm);
  };

  const handleInput = (e) => {
    if (!started) {
      setStarted(true);
      setStartTime(Date.now());
    }
    const value = e.target.value;
    const currentWord = words[wordIndex];

    if (value.endsWith(' ')) {
      if (value.trim() === currentWord) {
        setCorrectChars(prev => prev + currentWord.length);
      } else {
        const correct = currentWord
          .split('')
          .filter((char, i) => char === value[i])
          .length;
        setCorrectChars(prev => prev + correct);
        setIncorrectChars(prev => prev + (currentWord.length - correct));
      }
      setWordIndex(prev => prev + 1);
      setCharIndex(0);
      setInput('');
    } else {
      setInput(value);
      setCharIndex(value.length);
    }
  };

  useEffect(() => {
  let interval;

  if (started && !ended) {
    interval = setInterval(() => {
      setTimeLeft(prev => {
        const minutes = (TEST_DURATION - (prev - 1)) / 60;
        const wpmNow = minutes > 0 ? (correctChars / 5) / minutes : 0;

        setWpmData(prevData => [...prevData, Math.round(wpmNow)]);

        if (prev === 1) {
          clearInterval(interval);
          setEnded(true);
        }

        return prev - 1;
      });
    }, 1000);
  }

  return () => clearInterval(interval);
}, [started, ended, correctChars]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 bg-muted">
      <Card className="w-full max-w-4xl p-6 shadow-2xl rounded-2xl">
        <CardContent className="space-y-6">
          <h2 className="text-3xl font-bold text-center">🧠 Typing Test</h2>

          <div
            className="relative h-48 overflow-y-auto p-4 border rounded-xl bg-background"
            onClick={() => inputRef.current?.focus()}
          >
            <WordDisplay
              words={words}
              currentWordIndex={wordIndex}
              userInput={input}
            />
          </div>

          <input
            ref={inputRef}
            className="w-full p-3 text-xl border rounded-lg outline-none"
            value={input}
            onChange={handleInput}
            autoFocus
          />

          <StatsPanel correct={correctChars} incorrect={incorrectChars} wpm={getWPM()} timeLeft={timeLeft} />
          {ended && <WPMChart dataPoints={wpmData} />}

        </CardContent>
      </Card>
    </div>
  );
};

export default TypingTest;
