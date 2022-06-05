const ShowBeach = (props) => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          className="img"
          onClick={(event) => {
            props.show(props.beach);
          }}
          src={props.beach.image[0]}
        />
        <br />
      </div>

      <div className="text">
      {props.creatureID !== props.beach._id ? (
      <span>
        <h3>
          Name:{props.beach.name}
          <br />
        </h3>
        <p className="p-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h3>
          location:
          {props.beach.location}
          <br />
        </h3>

        <h3>
          Popularity:{props.beach.popularity}
          <br />
        </h3>

        <button
          onClick={(event) => {
            props.handleDelete(props.beach);
          }}
        >
          Remove Beach
        </button>
        </span>) : ""}
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
            <input className="input" type="text" onChange={props.handleUpdateName} placeholder={props.beach.name} />
            <br />
            <input className="input" type="text" onChange={props.handleUpdateImage} placeholder="image" />
            <br />
            <input className="input" type="text" onChange={props.handleUpdateLocation} placeholder={props.beach.location} />
            <br />
            <input className="input" type="text" onChange={props.handleUpdatePopularity} placeholder={props.beach.popularity} />
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
