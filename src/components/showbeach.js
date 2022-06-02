const ShowBeach = (props) => {
  return (
    <div className="container-fluid">
      {/* <div className="card"> */}
      <div className="row">
        <div className="col-12 mt-3">
          <div class="card">
            <div class="card-horizontal">
              <div class="img-square-wrapper">
                <img class="" src={props.beach.image} alt="card image cap" />

                <div className="card-body">
                  <h2 className="card-title mt-2">
                    {" "}
                    Name:{props.beach.name}
                    <br />{" "}
                  </h2>
                  <p className="card-text">
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
                        Name:{" "}
                        <input type="text" onChange={props.handleUpdateName} />
                        <br />
                        Image:
                        <input type="text" onChange={props.handleUpdateImage} />
                        <br />
                        Location:
                        <input
                          type="text"
                          onChange={props.handleUpdateLocation}
                        />
                        <br />
                        Popularity:
                        <input
                          type="text"
                          onChange={props.handleUpdatePopularity}
                        />
                        <br />
                        <input type="submit" value="Submit" />
                      </form>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBeach;
