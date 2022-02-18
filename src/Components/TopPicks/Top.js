import React from 'react'
import TopItems from './TopItems';
import data from './TopData';
import Chef from './Chef.jpg';


export default function Top() {
  return (
    <div className='section m-4'  >
      <h3 className='text-center m-3 pt-3' style={{fontSize:"30px"}} > Our Most Selling Hot Products</h3>
      <p className='text-center m-3 pb-4 pt-3'> Get Your Hands on our Most Loved Items</p>
       <div className="card-group mx-auto " >
       
         {data.map((val,index,key)=>{
           return <TopItems img={val.img} title={val.title} para={val.para} price={val.price}
           />
         })}

       </div>
     
      
   
    </div>
  )
}
