import { useState } from 'react'
import './App.css'

function App() {

  const [darkMode, setDarkMode] = useState('')

  const themeChange = () =>{
    darkMode ? setDarkMode('') : setDarkMode('dark')
  }
  return (
    <>
      <header className='bg-indigo-200 flex justify-between items-center p-2'>
        <div className='titile-logo'></div>
        <nav>
          <ul className='flex items-center gap-x-3'>
            <li>Home</li>
            <li>How it Works?</li>
          </ul>
        </nav>
        <div>
          <button onClick={themeChange}>
            {darkMode?
              <img src="/icons/dark.png" className='max-w-8' alt="moon-logo" />
              :
              <img src="/icons/light.png" className='max-w-8' alt='sun-logo' />
            }
          </button>
        </div>
      </header>
    </>
  )
}

export default App
