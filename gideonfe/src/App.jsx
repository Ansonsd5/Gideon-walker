import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { useDarkMode } from './hooks/useTheme'

function App() {
  const [count, setCount] = useState(0)
  const {theme,toggleTheme } = useDarkMode();

  return (
    <>
    <Button onClick={toggleTheme}>ADD</Button>
    </>
  )
}

export default App
