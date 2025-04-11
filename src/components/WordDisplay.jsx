const WordDisplay = ({ words, currentWordIndex, userInput }) => {
    return (
      <div className="flex flex-wrap gap-2 text-xl leading-relaxed font-mono">
        {words.map((word, index) => {
          const isCurrent = index === currentWordIndex;
          const chars = word.split('');
          const inputChars = isCurrent ? userInput.split('') : [];
  
          return (
            <span
              key={index}
              className={isCurrent ? 'bg-yellow-100 px-1 rounded' : ''}
            >
              {chars.map((char, i) => {
                let color = '';
                if (isCurrent) {
                  if (!inputChars[i]) color = '';
                  else if (inputChars[i] === char) color = 'text-green-500';
                  else color = 'text-red-500';
                }
                return (
                  <span key={i} className={color}>
                    {char}
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
    );
  };
  
  export default WordDisplay;
  