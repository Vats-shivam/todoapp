import React, { useState } from 'react'
import './App.css'
import {Dashboard,Navbar} from './components'
import {ModalContext} from './context/ModalContext'

function App() {
  const {modalActive,setModalActive}=React.useContext(ModalContext);

  return(
    <>
    <div className={`absolute bg-transparent w-full h-full -z-10 ${modalActive?'ActiveScreen':'DisableScreen'}`}></div>
    <div className='flex h-full'>
      <Navbar/>
      <Dashboard/>
    </div>
    </>
  );
}

export default App
