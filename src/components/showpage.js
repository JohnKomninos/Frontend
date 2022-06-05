const ShowPage = (props) => {
  return (
    <div>
    <div className="hello">
      <img className="show-image" src={props.showData.image[props.index]} />
    </div>
      <button
        onClick={() => {
          props.photoBackwards(props.showData);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          props.photoForward(props.showData);
        }}
      >
        Next
      </button>
      <button
        onClick={(event) => {
          props.deletePhoto(props.showData);
        }}
      >
        Delete current photo
      </button>
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
      <form
        onSubmit={(event) => {
          props.addReview(event, props.showData);
        }}
      >
        Add Comment:
        <input type="text" onChange={props.handleAddComment} />
        <input type="submit" />
      </form>
      {props.showCommentData.map((comment) => {
        return (
          <div>
            {comment}
            <button
              onClick={(event) => {
                props.deleteComment(props.showData, comment);
              }}
            >
              Delete comment
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowPage;
