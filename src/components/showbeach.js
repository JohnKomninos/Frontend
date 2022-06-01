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
      <form
        onSubmit={(event) => {
          props.handleUpdate(props.beach, event);
        }}
      >
        Name:{" "}
        <input
          type="text"
          onChange={props.handleName}
          placeholder={props.beach.name}
        />
        <br />
        Image:
        <input
          type="text"
          onChange={props.handleImage}
          placeholder={props.beach.image}
        />
        <br />
        Location:
        <input
          type="text"
          onChange={props.handleLocation}
          placeholder={props.beach.location}
        />
        <br />
        Popularity:
        <input
          type="text"
          onChange={props.handlePopularity}
          placeholder={props.beach.popularity}
        />
        <br />
        <input type="submit" value="Edit Beach" />
      </form>
      <form onSubmit={props.submitComment}>
        Leave A Comment: <input type="text" onChange={props.handleText} />
        <input type="submit" value="Add comment" />
        {/* <button
          onClick={(event) => {
            props.handleDeleteComment(props.text);
          }}
        >
          Delete Comment
        </button> */}
        <br />
      </form>
    </div>
  );
};

export default ShowBeach;
