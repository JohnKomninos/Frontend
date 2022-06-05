const NewBeach = (props) => {
  return (
    <div>
      <nav> Healthy Travel Tips</nav>
      <header className="header">
        <h1> Beaches around the World</h1>
        <p className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </header>
      {props.showForm !== true ? (
        <button onClick={props.toggleForm}>Add Beach</button>
      ) : (
        <button onClick={props.toggleForm}>Close</button>
      )}
      {props.showForm ? (
        <form onSubmit={props.submitBeach}>
          <input
            className="input"
            type="text"
            onChange={props.handleName}
            placeholder="name"
            required
          />
          <br />
          <input
            className="input"
            type="text"
            onChange={props.handleImage}
            placeholder="Image"
            required
          />
          <br />
          <input
            className="input"
            type="text"
            onChange={props.handleLocation}
            placeholder="Location"
            required
          />
          <br />
          <input
            className="input"
            type="text"
            onChange={props.handlePopularity}
            placeholder="Popularity"
            required
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default NewBeach;
