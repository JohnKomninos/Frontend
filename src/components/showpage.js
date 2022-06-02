const ShowPage = (props) =>{
  return(
    <div>
    <img src ={props.showData.image[0]}/>
    <form onSubmit={(event)=>{props.addImage(event, props.showData)}}>
    Add Photo:<input type="text" onChange={props.handleAddImage}/>
    <input type="submit"/>
    </form>
      <button onClick={props.show}>Back</button>
    </div>
  )
}

export default ShowPage
