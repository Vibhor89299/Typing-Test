const wordList = [
    "keyboard", "typing", "accuracy", "speed", "test", "challenge",
    "focus", "practice", "fast", "code", "react", "electron", "javascript",
    "logic", "words", "skill", "track", "motion", "smooth", "shadcn"
  ];
  
  const generateWords = (count) => {
    const words = [];
    for (let i = 0; i < count; i++) {
      const word = wordList[Math.floor(Math.random() * wordList.length)];
      words.push(word);
    }
    return words;
  };
  
  export default generateWords;
  