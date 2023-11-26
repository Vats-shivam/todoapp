import { createContext, useState } from "react";

// export const TaskContext = createContext("");

const FormContext = createContext();

const FormProvider=({children})=>{
    const [tasks,setTasks]=useState([]);
    return(
        <FormContext.Provider value={{tasks,setTasks}}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormProvider}