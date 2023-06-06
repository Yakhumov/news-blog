import { useState } from "react"

export const useFetching=(callback)=>{
   const [isLoadings, setIsLoadings] = useState(false)
   const [error , setError] = useState(false)   

   const fetch = async ()=>{
    try{
        setIsLoadings(true)
        await callback()
    }catch(error){
        setError(error.message)     
    }
    finally{
         setIsLoadings(false)
    }
   }

   return [fetch, isLoadings, error]
}