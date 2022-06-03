const ShowPage = (props) =>{
  return(
    <div>
    <img className="show-image" src ={props.showData.image[props.index]}/>
    <button onClick={()=>{props.photoBackwards(props.showData)}}>Previous</button>
    <button onClick={()=>{props.photoForward(props.showData)}}>Next</button>
    <button onClick={(event)=>{props.deletePhoto(props.showData)}}>Delete current photo</button>
    <form onSubmit={(event)=>{props.addImage(event, props.showData)}}>
    Add Photo:<input type="text" onChange={props.handleAddImage}/>
    <input type="submit"/>
    </form>
      <button onClick={props.show}>Back</button>
    </div>
  )
}

export default ShowPage
