import React from 'react'
import HomeCards from "./HomeCards";

export default function HomeItem(props) {
  return (
    <div className="card"style={{border:"none"}} >
    <img src={props.img} className="card-img-top mx-auto" alt="..." style={{ maxHeight: "130px", maxWidth: "130px" }}/>
    <div className="card-body " >
      <h5 className="card-title text-center">{props.title}</h5>
      <p className="card-text text-center">{props.para}</p>
     
    </div>
  </div>
  )
}
