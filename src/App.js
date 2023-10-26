import { useEffect, useState } from "react";
import Tours from "./Tours";

const App = () => {
  const url = 'https://course-api.com/react-tours-project'
  const [isLoading, setIsLoading] = useState(true)
  const [tourDetails, setTourDetails] = useState([])

  const removeMe = (id) => {
    let remove = tourDetails.filter((tour)=>id !== tour.id)
    setTourDetails(remove)
  }
  const fetchData = async () =>{
    try{
      const response = await fetch(url)
      const data = await response.json();
      setTourDetails(data)
      setIsLoading(false)
    }
    catch(error){
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData();
  }, [])

  if(isLoading){
    return(
      <h2 style={{textAlign:"center", marginTop:"4rem"}}>... Loading</h2>
    )
  }
  if(tourDetails.length === 0){
    return(
      <main className="title">
        <h2>Sorry, no tours left</h2>
        <button onClick={()=>fetchData()}>Refresh</button>
      </main>
    )
  }
  return(
    <main>
      <Tours removeMe={removeMe} tours={tourDetails}/>
    </main>
  )
}

export default App;