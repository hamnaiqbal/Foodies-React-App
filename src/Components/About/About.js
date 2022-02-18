import React from 'react'
import img3 from "./3.jpg";
import img2 from "./2.jpg";
import img4 from "./4.jpg";
import img5 from "./peas.jpg";
import "./About.css";

export default function About() {
  return (
   
    <section className='section' id="about">
       <div className='boxes'>
        
         <div className='middle'>
         <div className='infoAbout'> Explore Tasty. </div>
           </div>  
      

      
      </div>
      <div className="container ">
        <div className="row">
          <div className="col  ">
            <h1  className="learn" style={{ marginTop: "40px" }}>Learn About Tasty</h1>
            <p className="para" style={{ marginTop: "40px" }}>Organic Food is grown without the usage of synthetic chemicals and preservatives
              such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's)
              Organic food produces fresh meat, dairy products which can be used in your daily routine.
              Our clients have been with us since decade and never got any complain in the terms of product quality , taste or cost.
              We are one ideal producers of organic foods and fruits right now in Pakistan.
            </p>
            <button type="button" className="btn btn-danger">Find Us</button>
          </div>
          <div className="col ">
            <img src={img4} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." style={{ marginTop: "60px", borderRadius: "50px" }} />
            <img src={img2} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." style={{ marginTop: "20px", borderRadius: "50px" }} />


            <div className="row" >
              <img src={img3} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." style={{ marginTop: "80px", height: "370px", width: "800px", borderRadius: "50px" }} />
6

            </div>

          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col order-1  ">
          <h1 className="learn" style={{ marginTop: "40px" }}>Fresh Vegetables for YOU.</h1>
           
            <p className="para" style={{ marginTop: "40px" }}>Organic Food is grown without the usage of synthetic chemicals and preservatives
              such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's)
              
            </p>
        
          </div>
          <div className="col ">
            
            <div className="row  order-4" >
              <img src={img5} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..." style={{ marginTop: "40px", height: "370px", width: "550px", borderRadius: "100px" }} />


            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
