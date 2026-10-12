import './App.css'
import { useCallback, useEffect, useState } from 'react'
import { useRef,useMemo } from 'react'
import Child from './Child.jsx'

function App() {  
  const [employees,setEmployees]=useState([])
  const [status,setStatus]=useState("")
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    async function retrieveEmployees(){
      try{
        const response=await fetch("api/get");
        if(!response.ok){
          throw new Error("Failed to Retrive")
        }
        const emps=await response.json()
        setEmployees(emps)
        setStatus("Employees retrieved successfully !")
      }catch(err){
        setStatus(err.message || "something went wrong")
      }finally{
        setLoading(false)
      }
    }
    retrieveEmployees();
  },[])
  return(
    <>
      {status && <p>{status}</p>}
      {loading && <p>laoding spinner</p>}
      <ul>
        {employees.map((emp)=>{
          return <li key={emp.id}>{emp.name}</li>
        })}
      </ul>
    </>
  )
}

export default App
