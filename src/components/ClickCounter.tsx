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
    <div className='bg-white rounded-lg shadow p-6 space-y-4'>
      <h2 className='text-2xl font-semibold text-gray-800 text-center break-words'>Click the button each time you are grateful</h2>
      <p className='text-gray-600 text-center break-words'>{msg}</p>
      <div className='flex justify-center'>
        <button onClick={clickHandler} className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
          I'm grateful
        </button>
      </div>
    </div>
  );
}

export default ClickCounter;