import { useState } from "react";

function useEmployees(){
    const [employees,setEmployees]=useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
        fetch("api/employees")
        .then(res=>res.json())
        .then(emps=>setEmployees(emps))
        .finally(()=>setLoading(false))
    })

    return {employees,loading}
}

export default useEmployees;