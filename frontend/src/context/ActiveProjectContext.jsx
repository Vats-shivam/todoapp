import { useContext,createContext,useState } from "react";

const ActiveProjectsContext = createContext();

const ActiveProjectsProvider=({children})=>{
  const [projectId,setProjectId]=useState(null);
  const {projects} = useContext(ProjectsContext);
  const [isLoading,setIsLoading] = useState(true);

  const handleProjectId=()=>{
    if(isLoading){
      projectId!==null && setTasks(projects[projectId].task);
      setIsLoading(false);
      console.log("hello")
    }
  }

  return(
    <ActiveProjectsContext.Provider value={{projectId,setProjectId}}>
      {children}
    </ActiveProjectsContext.Provider>
  )
}

export {ActiveProjectsContext,ActiveProjectsProvider}