import logo from "./logo.svg";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import axios from "axios";
import NewBeach from "./components/newbeach";
import ShowBeach from "./components/showbeach";
import ShowPage from "./components/showpage";

function App() {
  const lcl = `http://localhost:3000/`;
  const hrk = `https://mysterious-meadow-36213.herokuapp.com/`;

  //setting all the states
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState();
  const [popularity, setPopularity] = useState();
  const [updateName, setUpdateName] = useState();
  const [updateImage, setUpdateImage] = useState();
  const [updateLocation, setUpdateLocation] = useState();
  const [updatePopularity, setUpdatePopularity] = useState();
  const [creatureID, setCreatureID] = useState();
  const [showForm, setShowForm] = useState();
  const [displayShow, setDisplayShow] = useState();
  const [beach, setBeach] = useState([]);
  const [showData, setShowData] = useState();
  const [showCommentData, setShowCommentData] = useState();
  const [addPhoto, setAddphoto] = useState();
  const [index, setIndex] = useState(0);
  const [addComment, setAddComment] = useState();

  //function to handle name input
  const handleName = (event) => {
    setName(event.target.value);
  };

  //function to handle image input
  const handleImage = (event) => {
    setImage(event.target.value);
  };

  //function to handle location input
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  //function to handle popularity input
  const handlePopularity = (event) => {
    setPopularity(event.target.value);
  };

  //function to handle name input
  const handleUpdateName = (event) => {
    setUpdateName(event.target.value);
  };
  //function to handle image input
  const handleUpdateImage = (event) => {
    setUpdateImage(event.target.value);
  };
  //function to handle location input
  const handleUpdateLocation = (event) => {
    setUpdateLocation(event.target.value);
  };
  //function to handle popularity input
  const handleUpdatePopularity = (event) => {
    setUpdatePopularity(event.target.value);
  };

  const handleAddImage = (event) => {
    setAddphoto(event.target.value);
  };

  const handleAddComment = (event) => {
    setAddComment(event.target.value);
  };
  //this displays our database on page load
  useEffect(() => {
    axios.get(hrk).then((response) => {
      setBeach(response.data);
    });
  }, []);

  //lets users add new beaches
  const submitBeach = (event) => {
    event.preventDefault();
    setShowForm(false);
    axios
      .post(hrk, {
        name: name,
        image: image,
        location: location,
        popularity: popularity,
      })
      .then(() => {
        axios.get(hrk).then((response) => {
          setBeach(response.data);
        });
      });
  };

  //lets users delete beaches
  const handleDelete = (beachData) => {
    const lclID = `http://localhost:3000/${beachData._id}`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${beachData._id}`;
    axios.delete(hrkID).then(() => {
      axios.get(hrk).then((response) => {
        setBeach(response.data);
      });
    });
  };

  const handleUpdate = (beachData, event) => {
    const lclID = `http://localhost:3000/${beachData._id}`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${beachData._id}`;
    event.preventDefault();
    setCreatureID();
    if (updateName === "") {
      setUpdateName(undefined);
    }
    axios
      .put(hrkID, {
        name: updateName,
        image: updateImage,
        location: updateLocation,
        popularity: updatePopularity,
      })
      .then(() => {
        axios.get(hrk).then((response) => {
          setBeach(response.data);
        });
      });
  };

  const toggleEdit = (beachData) => {
    setCreatureID(beachData._id);
    setUpdateName();
    setUpdateImage();
    setUpdateLocation();
    setUpdatePopularity();
  };

  const closeEdit = () => {
    setCreatureID();
  };

  const toggleForm = () => {
    if (showForm === true) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const show = (beachData) => {
    setShowData(beachData);
    setShowCommentData(beachData.comments);
    setIndex(0);
    if (displayShow === true) {
      setDisplayShow(false);
    } else {
      setDisplayShow(true);
    }
    axios.get(hrk).then((response) => {
      setBeach(response.data);
    });
  };

  const addImage = (event, beachData) => {
    const lclID = `http://localhost:3000/photo/${beachData._id}/`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/photo/${beachData._id}/`;
    event.preventDefault();
    event.currentTarget.reset();
    axios
      .put(hrkID, {
        image: addPhoto,
      })
      .then(() => {
        axios.get(hrkID).then((response) => {
          setShowData(response.data[0]);
          // console.log(response.data)
        });
      });
  };

  const photoForward = (beachData) => {
    setIndex(index + 1);
    if (index >= beachData.image.length - 1) {
      setIndex(0);
    }
  };

  const photoBackwards = (beachData) => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(beachData.image.length - 1);
    }
  };

  const addReview = (event, beachData) => {
    const lclID = `http://localhost:3000/comment/${beachData._id}/`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/comment/${beachData._id}/`;
    event.preventDefault();
    event.currentTarget.reset();
    axios
      .put(hrkID, {
        comments: addComment,
      })
      .then(() => {
        axios.get(hrkID).then((response) => {
          setShowData(response.data[0]);
          setShowCommentData(response.data[0].comments);
        });
      });
  };

  const deletePhoto = (beachData) => {
    const lclID = `http://localhost:3000/removephoto/${beachData._id}/`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/removephoto/${beachData._id}/`;
    const removePhoto = beachData.image[index];
    // console.log(beachData._id)
    // console.log(removePhoto)
    axios
      .put(hrkID, {
        image: removePhoto,
      })
      .then(() => {
        axios.get(hrkID).then((response) => {
          setShowData(response.data[0]);
          if (index > response.data[0].image.length - 1) {
            setIndex(0);
          }
        });
      });
  };

  const deleteComment = (beachData, comment) => {
    const lclID = `http://localhost:3000/removecomment/${beachData._id}/`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/removecomment/${beachData._id}/`;
    axios
      .put(hrkID, {
        comments: comment,
      })
      .then(() => {
        axios.get(hrkID).then((response) => {
          setShowCommentData(response.data[0].comments);
        });
      });
  };

  // Created newBeach component for adding beaches to the data base
  return (
    <>
      {displayShow !== true ? (
        <NewBeach
          handleName={handleName}
          handleImage={handleImage}
          handleLocation={handleLocation}
          handlePopularity={handlePopularity}
          submitBeach={submitBeach}
          toggleForm={toggleForm}
          showForm={showForm}
        />
      ) : (
        <ShowPage
          show={show}
          showData={showData}
          showCommentData={showCommentData}
          handleAddImage={handleAddImage}
          addImage={addImage}
          index={index}
          photoForward={photoForward}
          photoBackwards={photoBackwards}
          deletePhoto={deletePhoto}
          handleAddComment={handleAddComment}
          addReview={addReview}
          deleteComment={deleteComment}
        />
      )}
      {displayShow !== true ? (
        <div className="flex-parent">
          {beach.map((beach) => {
            return (
              <ShowBeach
                beach={beach}
                handleDelete={handleDelete}
                handleName={handleName}
                handleImage={handleImage}
                handleLocation={handleLocation}
                handlePopularity={handlePopularity}
                handleUpdate={handleUpdate}
                handleUpdateName={handleUpdateName}
                handleUpdateImage={handleUpdateImage}
                handleUpdateLocation={handleUpdateLocation}
                handleUpdatePopularity={handleUpdatePopularity}
                creatureID={creatureID}
                toggleEdit={toggleEdit}
                closeEdit={closeEdit}
                show={show}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
