const ShowPage = (props) => {
  return (
    <div>
      <div className="back">
        <button onClick={props.show}>Back</button>
      </div>
      <div className="image-show">
        <div className="child-div-image">
          <img className="show-image" src={props.showData.image[props.index]} />{" "}
        </div>
        <div className="show-btn">
          <button
            className="previous"
            onClick={() => {
              props.photoBackwards(props.showData);
            }}
          >
            Previous
          </button>
          <button
            className="next"
            onClick={() => {
              props.photoForward(props.showData);
            }}
          >
            Next
          </button>
        </div>
        <div className="addPhoto">
          <form
            onSubmit={(event) => {
              props.addImage(event, props.showData);
            }}
          >
            Add Photo:
            <input type="text" onChange={props.handleAddImage} />
            <input type="submit" />
          </form>
          <button
            className="delete-photo"
            onClick={(event) => {
              props.deletePhoto(props.showData);
            }}
          >
            Delete current photo
          </button>
        </div>
        <div className="addComment">
          <form
            onSubmit={(event) => {
              props.addReview(event, props.showData);
            }}
          >
            Add Comment:
            <input type="text" onChange={props.handleAddComment} />
            <input type="submit" />
          </form>
        </div>
        <div className="show-comment">
          {props.showCommentData.map((comment) => {
            return (
              <div className="comment">
                {comment}
                <button
                  className="delete-comment"
                  onClick={(event) => {
                    props.deleteComment(props.showData, comment);
                  }}
                >
                  Delete comment
                </button>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
