const ShowPage = (props) => {
  return (
    <div>
      <img className="show-image" src={props.showData.image[props.index]} />
      <div className="prev-next-btn">
        <button
          className="Previous-btn"
          onClick={() => {
            props.photoBackwards(props.showData);
          }}
        >
          Previous
        </button>
        <button
          className="Next-btn"
          onClick={() => {
            props.photoForward(props.showData);
          }}
        >
          Next
        </button>
      </div>
      <form
        onSubmit={(event) => {
          props.addImage(event, props.showData);
        }}
      >
        Add Photo:
        <input type="text" onChange={props.handleAddImage} />
        <input type="submit" />
      </form>
      <button onClick={props.show}>Back</button>
    </div>
  );
};

export default ShowPage;
