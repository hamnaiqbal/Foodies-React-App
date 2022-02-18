import React from 'react'

export default function TopItems(props) {
  return (
    
      <div className="card ">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.para}</p>
          <p className="card-text">{props.price}</p>
        </div>
      </div>
 
  )
}
