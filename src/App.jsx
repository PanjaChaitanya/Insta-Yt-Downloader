import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState('')

  const themeChange = () => {
    if (darkMode) {
      setDarkMode('')
      document.documentElement.classList.remove("dark")
    } else {
      setDarkMode('dark')
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <>
      <header className='bg-white border-2 dark:bg-gray-900 text-gray-900 dark:text-white flex justify-between items-center p-2'>
        <div className='titile-logo'></div>
        <nav>
          <ul className='flex items-center gap-x-3'>
            <li>Home</li>
            <li>How it Works?</li>
          </ul>
        </nav>
        <div>
          <button onClick={themeChange}>
            {darkMode ?
              <img src="/icons/light.png" className='max-w-8' alt='sun-logo' />
              :
              <img src="/icons/dark.png" className='max-w-8' alt="moon-logo" />
            }
          </button>
        </div>
      </header>
    </>
  )
}

export default App
