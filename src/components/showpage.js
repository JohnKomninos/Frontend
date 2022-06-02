const ShowPage = (props) =>{
  return(
    <div>
    <img src ={props.showData.image[0]}/>
      <button onClick={props.show}>Back</button>
    </div>
  )
}

export default ShowPage
