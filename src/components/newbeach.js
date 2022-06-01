const NewBeach = (props) =>{
  return(
    <div>
      <h3>Beaches</h3>
      {props.showForm !== true ? <button onClick={props.toggleForm}>Add Beach</button> : <button onClick={props.closeForm}>Close</button>}
      { props.showForm ?
      <form onSubmit={props.submitBeach}>
        Name: <input type ="text" onChange={props.handleName} required/><br/>
        Image:<input type ="text" onChange={props.handleImage} required/><br/>
        Location:<input type ="text" onChange={props.handleLocation} required/><br/>
        Popularity:<input type ="text" onChange={props.handlePopularity} required/><br/>
        <input type="submit" value="submit"/>
      </form> : "" }
    </div>
  )
}

export default NewBeach
