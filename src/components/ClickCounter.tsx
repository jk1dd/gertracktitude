import {useState, useEffect} from 'react';

type ClickCounterProps = {
  clicks: number;
  clickHandler: () => void;
}

function ClickCounter({clicks, clickHandler}: ClickCounterProps) {
  const [msg, setMsg] = useState('default');

  useEffect(() => {
    if (clicks === 0) {
      setMsg('Start clicking')
    } else if (clicks < 5) {
      setMsg(`You've clicked ${clicks} time${clicks > 1 ? 's' : ''}, keep it up!`)
    } else {
      setMsg(`Woah ${clicks} clicks`)
    }
  }, [clicks]);

  return (
    <div style={{padding: '1rem'}}>
      <h1>Click the button each time you are grateful</h1>
      <p>{msg}</p>
      <button onClick={clickHandler}>
        I'm grateful
      </button>
    </div>
  );
}

export default ClickCounter;