import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NewBeach from "./components/newbeach";
import ShowBeach from "./components/showbeach";
// import NewComment from "./components/newComment";

function App() {
  const lcl = `http://localhost:3000/`;
  const hrk = `https://mysterious-meadow-36213.herokuapp.com/`;

  //setting all the states
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState();
  const [popularity, setPopularity] = useState();
  const [beach, setBeach] = useState([]);
  // const [comment, setComment] = useState();
  const [text, setText] = useState();

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

  // function to handle comment input
  // const handleComment = (event) => {
  //   setComment(event.target.value);
  // };

  // function to handle text imput
  const handleText = (event) => {
    setText(event.target.value);
  };

  //this displays our database on page load
  useEffect(() => {
    axios.get(lcl).then((response) => {
      setBeach(response.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(lcl).then((response) => {
  //     setText(response.data);
  //   });
  // }, []);

  //lets users add new beaches
  const submitBeach = (event) => {
    event.preventDefault();
    axios
      .post(lcl, {
        name: name,
        image: image,
        location: location,
        popularity: popularity,
      })
      .then(() => {
        axios.get(lcl).then((response) => {
          setBeach(response.data);
        });
      });
  };

  // lets user add new comment
  const submitComment = (event) => {
    event.preventDefault();
    axios
      .post(lcl, {
        comments: text,
      })
      .then(() => {
        axios.get(lcl).then((response) => {
          setText(response.data);
        });
      });
  };

  //lets users delete beaches
  const handleDelete = (beachData) => {
    const lclID = `http://localhost:3000/${beachData._id}`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${beachData._id}`;
    axios.delete(lclID).then(() => {
      axios.get(lcl).then((response) => {
        setBeach(response.data);
      });
    });
  };

  // lets users delete comment
  const handleDeleteComment = (commentData) => {
    const lclID = `http://localhost:3000/${commentData._id}`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${commentData._id}`;
    axios.delete(lclID).then((response) => {
      axios.get(lcl).then((response) => {
        setText(response.data);
      });
    });
  };

  const handleUpdate = (beachData, event) => {
    const lclID = `http://localhost:3000/${beachData._id}`;
    const hrkID = `https://mysterious-meadow-36213.herokuapp.com/${beachData._id}`;
    event.preventDefault();
    axios
      .put(lclID, {
        name: name,
        image: image,
        location: location,
        popularity: popularity,
      })
      .then(() => {
        axios.get(lcl).then((response) => {
          setBeach(response.data);
        });
      });
  };

  // Created newBeach component for adding beaches to the data base
  return (
    <>
      <NewBeach
        handleName={handleName}
        handleImage={handleImage}
        handleLocation={handleLocation}
        handlePopularity={handlePopularity}
        submitBeach={submitBeach}
      />

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
              handleText={handleText}
              submitComment={submitComment}
              // handleDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
