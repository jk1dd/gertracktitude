import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4'>
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Gertracktitude</h1>
      <div className="w-full max-w-md">
        <ClickCounter clicks={count} clickHandler={handleClick}/>
      </div>
    </div>
  )
}

export default App
