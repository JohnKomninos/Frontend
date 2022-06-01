import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewBeach from './components/newbeach'
import ShowBeach from './components/showbeach'

function App() {
  const lcl = `http://localhost:3000/`
  const hrk = `https://mysterious-meadow-36213.herokuapp.com/`

//setting all the states
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [location, setLocation] = useState()
  const [popularity, setPopularity] = useState()
  const [updateName, setUpdateName] = useState()
  const [updateImage, setUpdateImage] = useState()
  const [updateLocation, setUpdateLocation] = useState()
  const [updatePopularity, setUpdatePopularity] = useState()


  const [index, setIndex] = useState(0)
  const [creatureID, setCreatureID] = useState()
  const [showForm, setShowForm] = useState()
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

  //function to handle name input
    const handleUpdateName = (event) =>{
      setUpdateName(event.target.value)
    }

  //function to handle image input
    const handleUpdateImage = (event) =>{
      setUpdateImage(event.target.value)
    }

  //function to handle location input
    const handleUpdateLocation = (event) =>{
      setUpdateLocation(event.target.value)
    }

  //function to handle popularity input
    const handleUpdatePopularity = (event) =>{
      setUpdatePopularity(event.target.value)
    }


//this displays our database on page load
  useEffect(()=>{
    axios.get(lcl).then((response)=>{
      setBeach(response.data)
    })
  },[])

//lets users add new beaches
  const submitBeach = (event) =>{
    event.preventDefault()
    setIndex(index+1)
    axios.post(lcl, {
      name:name,
      image:image,
      location:location,
      popularity:popularity,
      index:index
    }).then(()=>{
      axios.get(lcl).then((response)=>{
        setBeach(response.data)
      })
    })
  }

//lets users delete beaches
  const handleDelete = (beachData) =>{
    const lclID = `http://localhost:3000/${beachData._id}`
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${beachData._id}`
    axios.delete(lclID).then(()=>{
      axios.get(lcl).then((response)=>{
        setBeach(response.data)
      })
    })
  }

  const handleUpdate =(beachData, event)=>{
    const lclID = `http://localhost:3000/${beachData._id}`
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${beachData._id}`
    event.preventDefault()
    setCreatureID()
    axios.put(lclID ,{
      name:updateName,
      image:updateImage,
      location:updateLocation,
      popularity:updatePopularity
    }).then(()=>{
      axios.get(lcl).then((response)=>{
        setBeach(response.data)
      })
    })
  }

  const toggleEdit = (beachData) =>{
    setCreatureID(beachData._id)
    setUpdateName()
    setUpdateImage()
    setUpdateLocation()
    setUpdatePopularity()
  }

  const closeEdit = () =>{
    setCreatureID()
  }

  const toggleForm = () =>{
    setShowForm(true)
  }
// Created newBeach component for adding beaches to the data base
  return (
    <>
      <NewBeach handleName={handleName} handleImage={handleImage} handleLocation={handleLocation} handlePopularity={handlePopularity} submitBeach={submitBeach} toggleForm={toggleForm} showForm={showForm}/>
      <div className="flex-parent">
        {beach.map((beach)=>{
          return <ShowBeach beach={beach} handleDelete={handleDelete} handleName={handleName} handleImage={handleImage} handleLocation={handleLocation} handlePopularity={handlePopularity} handleUpdate={handleUpdate} handleUpdateName={handleUpdateName} handleUpdateImage={handleUpdateImage} handleUpdateLocation={handleUpdateLocation} handleUpdatePopularity={handleUpdatePopularity} index={index} creatureID={creatureID} toggleEdit={toggleEdit} closeEdit={closeEdit}/>
        })}
      </div>
    </>
  );
}

export default App;
