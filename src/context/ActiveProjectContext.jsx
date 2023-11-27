import { useContext,createContext,useState } from "react";
import { ProjectsContext } from "./ProjectsContext";
import { FormContext } from "./TaskContext";

const ActiveProjectsContext = createContext();

const ActiveProjectsProvider=({children})=>{
  const {tasks,setTasks} = useContext(FormContext);
  const [projectId,setProjectId]=useState(null);
  const {projects,setProjects} = useContext(ProjectsContext);
  const [isLoading,setIsLoading] = useState(true);

  const handleProjectId=()=>{
    if(isLoading){
      projectId!==null && setTasks(projects[projectId].task);
      setIsLoading(false);
      console.log("hello")
    }
  }

  return(
    <ActiveProjectsContext.Provider value={{projectId,setProjectId,projects,isLoading,setIsLoading,handleProjectId}}>
      {children}
    </ActiveProjectsContext.Provider>
  )
}

export {ActiveProjectsContext,ActiveProjectsProvider}