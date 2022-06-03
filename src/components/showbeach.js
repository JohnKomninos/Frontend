const ShowBeach = (props) => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          onClick={(event) => {
            props.show(props.beach);
          }}
          src={props.beach.image[0]}
        ></img>
      </div>
      <div className="text">
        <h3>
          Name:{props.beach.name}
          <br />{" "}
        </h3>
        <p>location:{props.beach.location}</p>
        <p>Popularity:{props.beach.popularity}</p>
        <button
          onClick={(event) => {
            props.handleDelete(props.beach);
          }}
        >
          Remove Beach
        </button>
        {props.creatureID !== props.beach._id ? (
          <button
            onClick={(event) => {
              props.toggleEdit(props.beach);
            }}
          >
            Edit Beach
          </button>
        ) : (
          <button onClick={props.closeEdit}>Close</button>
        )}
        {props.creatureID === props.beach._id ? (
          <form
            onSubmit={(event) => {
              props.handleUpdate(props.beach, event);
            }}
          >
            Name: <input type="text" onChange={props.handleUpdateName} />
            <br />
            Image:
            <input type="text" onChange={props.handleUpdateImage} />
            <br />
            Location:
            <input type="text" onChange={props.handleUpdateLocation} />
            <br />
            Popularity:
            <input type="text" onChange={props.handleUpdatePopularity} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShowBeach;
