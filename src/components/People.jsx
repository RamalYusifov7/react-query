import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

function People() {
  const [page, setPage] = useState(1)
  const { data: peopleData, isLoading, isError, error } = useQuery(["people", page], async () => {
    const resp = await fetch(`http://swapi.dev/api/people/?page=${page}`)
    return resp.json()
  }, {
    // cacheTime:5000,
    // staleTime:0,
    // onSuccess:()=>console.log("success")
  })
  console.log(peopleData);
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <>
      <div>
        {peopleData?.results?.map(data => {
          return <Person key={data.name} {...data} />
        })}
      </div>
    </>
  )
}

export default People