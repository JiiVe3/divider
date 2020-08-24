import React, { useState } from 'react';

function App() {
  const [ result, setResult ] = useState('');
  const [ numberOne, setNumberOne ] = useState(0);
  const [ numberTwo, setNumberTwo ] = useState(0);
  const [ limit, setLimit ] = useState(0);

  const style = {
    wordWrap: 'break-word',
    width: '90%'
  }

  const calculate = () => {
    let resString = '';
    let number = 0;
    let jaannos = numberOne;
    let isDone;
    let i = 0;

    while(!isDone) {
      if (jaannos - numberTwo >= 0) {
        jaannos -= numberTwo;
        number++;
        isDone = false;
      } else {
        isDone = true;
      }
    }
    resString = number.toString()
    setResult(resString);

    if (jaannos > 0) {
      if(limit > 0) {
        resString = resString + ',';
        setResult(resString);
      }
      while(i < limit) {
        jaannos = jaannos * 10;
        isDone = false;
        number = 0;
        while(!isDone) {
          if (jaannos - numberTwo >= 0) {
            jaannos -= numberTwo;
            number++;
            isDone = false;
          } else {
            resString = resString + number.toString();
            setResult(resString);
            isDone = true;
          }
        }
        if (jaannos === 0) break;
        i++;
      }
    }

    // if (!(jaannos === 0)) {
    //   jaannos = jaannos * 10;
    //   isDone = false;
    //   number = 0;
    //   while(!isDone) {
    //     if (jaannos - numberTwo >= 0) {
    //       jaannos -= numberTwo;
    //       number++;
    //       isDone = false;
    //     } else {
    //       if (number >= 5) {
    //         resString = resString.slice(0, -1) + (parseInt(resString.slice(-1)) + 1).toString();
    //         setResult(resString);
    //         isDone = true;
    //       }
    //     }
    //   }
    // }
  }

  return (
    <div>
      <input value={numberOne} onChange={(e) => setNumberOne(e.target.value)} />/<input value={numberTwo} onChange={(e) => setNumberTwo(e.target.value)} />
      <button onClick={calculate}>divide</button><br/>
      limit <input value={limit} onChange={(e) => setLimit(e.target.value)} />
      <p style={style}>{result}</p>
    </div>
  );
}

export default App;