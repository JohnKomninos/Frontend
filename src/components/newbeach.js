const NewBeach = (props) =>{
  return(
    <div>
      <h3>Beaches</h3>
      <form onSubmit={props.submitBeach}>
        Name: <input type ="text" onChange={props.handleName}/><br/>
        Image:<input type ="text" onChange={props.handleImage}/><br/>
        Location:<input type ="text" onChange={props.handleLocation}/><br/>
        Popularity:<input type ="text" onChange={props.handlePopularity}/><br/>
        <input type="submit" value="Add Beach"/>
      </form>
    </div>
  )
}

export default NewBeach
