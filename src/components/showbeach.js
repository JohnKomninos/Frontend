const ShowBeach = (props) => {
  return (
    <div className="child-div">
      Name:{props.beach.name}
      <br />
      Image:{props.beach.image}
      <br />
      location:{props.beach.location}
      <br />
      Popularity:{props.beach.popularity}
      <br />
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
  );
};

export default ShowBeach;
