import './App.css'
import { useCallback, useEffect, useState } from 'react'
import { useRef,useMemo } from 'react'
import Child from './Child.jsx'
import useEmployees from './customHook.jsx'
import Main from './Context_API/Main.jsx'

function App() {  
  // const [employees,laoding]=useEmployees();
  
  // return (<>
  //   {laoding && <p>loading....</p>}
  //   <ul>
  //     {employees.map(emp=>{
  //       return <li key={emp.id}>{emp.name}</li>
  //     })}
  //   </ul>
  // </>)
  return (<>
      <Main/>
    </>)

}

export default App
