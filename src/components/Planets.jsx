import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

function Planets() {
  const {data:planetsData,isLoading,isError,error}=useQuery("planets",async()=>{
    const resp=await fetch(`http://swapi.dev/api/planets/`)
    return resp.json()
  })
  if(isLoading){
   return <div>Loading...</div>
  }
  if(isError){
   return <div>{error.message}</div>
  }
  return (
    <div>
      {planetsData?.results?.map(data=>{
        return <Planet key={data.name} {...data}/>
      })}
    </div>
  )
}

export default Planets