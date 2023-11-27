import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormProvider } from './context/TaskContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import { Modal } from './components/index.js'
import { ProjectsProvider } from './context/ProjectsContext.jsx'
import { ActiveProjectsProvider } from './context/ActiveProjectContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FormProvider>
    <ActiveProjectsProvider>
    <ProjectsProvider>
    <ModalProvider>
    <App />
    </ModalProvider>
    </ProjectsProvider>
    </ActiveProjectsProvider>
  </FormProvider>
    
)
