import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewBeach from './components/newbeach'
import ShowBeach from './components/showbeach'

function App() {
  const local = 'http://localhost:3000/'
  const heroku = 'https://mysterious-meadow-36213.herokuapp.com/'

//setting all the states
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")
  const [popularity, setPopularity] = useState("")
  const [beach, setBeach] = useState([])

//function to handle name input
  const handleName = (event) =>{
    setName(event.target.value)
  }

//function to handle image input
  const handleImage = (event) =>{
    setImage(event.target.value)
  }

//function to handle location input
  const handleLocation = (event) =>{
    setLocation(event.target.value)
  }

//function to handle popularity input
  const handlePopularity = (event) =>{
    setPopularity(event.target.value)
  }

  useEffect(()=>{
    axios.get(local).then((response)=>{
      setBeach(response.data)
    })
  },[])

  const submitBeach = (event) =>{
    event.preventDefault()
    axios.post(heroku, {
      name:name,
      image:image,
      location:location,
      popularity:popularity
    })
  }

// Created newBeach component for adding beaches to the data base
  return (
    <>
      <NewBeach handleName={handleName} handleImage={handleImage} handleLocation={handleLocation} handlePopularity={handlePopularity} submitBeach={submitBeach}/>
      {beach.map((beach)=>{
        return <ShowBeach beach={beach}/>
      })}
    </>
  );




}

export default App;
