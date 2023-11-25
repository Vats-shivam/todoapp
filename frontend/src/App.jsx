import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard,Navbar} from './components'

function App() {
  const tasksToDo=[{title:"Task1"},{title:"Task2"},{title:"Task3"}]
  const tasksDone=[{title:"Task1"},{title:"Task2"},{title:"Task3"}]

  return(
    <div className='flex h-full'>
      <Navbar/>
      <Dashboard tasksToDo={tasksToDo} tasksDone={tasksDone}/>
    </div>
  );
}

export default App
