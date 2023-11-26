import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard,Navbar} from './components'

function App() {
  

  return(
    <div className='flex h-full'>
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App
