const ShowBeach = (props) =>{
  return(
    <div className="child-div">
      Name:{props.beach.name}<br/>
      Image:{props.beach.image}<br/>
      location:{props.beach.location}<br/>
      Popularity:{props.beach.popularity}<br/>
      <button onClick={(event)=>{props.handleDelete(props.beach)}}>Remove Beach</button>
    </div>
  )
}

export default ShowBeach
