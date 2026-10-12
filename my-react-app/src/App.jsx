import './App.css'
import { useCallback, useEffect, useState } from 'react'
import { useRef,useMemo } from 'react'
import Child from './Child.jsx'

function App() {  
  const [name,setName] =useState("")
  const [email,setEmail]=useState("")
  const [error,setError]=useState("")
  const [status,setStatus]=useState("")
  const [loading,setLoading]=useState(false)
  async function handleSubmit(event){
    event.preventDefault();
    if(!name.trim()){
      setError("Name is empty !")
      return
    }
    if(!email.includes("@")){
      setError("Email is invalid!")
      return
    }
    setLoading(true)

    try{
      const response=await fetch("api/fetch")
      if(!response.ok){
        throw new Error("Registration failed")
      }
      setStatus("Registration is successful")
    }catch(err){
      setStatus(err.message || "Somehting went wrong")
    }
    finally{
      setLoading(false)
    }
  } 
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(event)=>setName(event.target.value)} />
      <input value={email} onChange={(event)=>setEmail(event.target.value)} />
      {error && <p>{error}</p>}
      {status && <p>{status}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Registering...." :"Register"}
      </button>
    </form>
    </>
  )
}

export default App
