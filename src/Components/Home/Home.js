import React from 'react'
import './Home.css';
import d from "./d.png";
import cook from "./cook.png";

import HomeItem from './HomeItem.js/HomeItem';
import data from './HomeItem.js/HomeCards';
import About from '../About/About';
import Top from '../TopPicks/Top';
import Find from '../Find/Find';

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <h1 className='heading'> Just Eat <span className="healthy">Healthy</span> Food to Live Longer & <span className="healthy">Aspiring Life</span> </h1>
            <p className='para'>Enjoy a healthy Life by eating healthy foods that have extraordinary
              flavours which make your life healthier day by day, prepared by our top chefs with extra care and <span className=' love'>LOVE </span> especially for you!!
            </p>
            <button type="button" className="btn btn-success">Order Now</button>



            <div className="box">
              <img src={cook} className="cook" style={{ height: "200px" }}>

              </img>


              <div className="center">
                <div className="dialog-1">
                  <div className="left-point"></div>
                </div>

                <div className="dialog-2">
                  <h5 className='chef'> Recommended By Top Chefs to ensure your health!!</h5>
                  <div className="right-point"></div>
                </div>
              </div>

            </div>


          </div>

          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 mt-4">

            <img src={d} className="plate" style={{ marginLeft: "50px" }}></img>


          </div>

        </div>

      </div>
      <div className='section-2 mt-5 pt-5'>

        <div className="container">
          <div className="row justify-content-md-center">

            <div className="col-md-auto">
              <h1 class="why"> Why Choose US?</h1>
            </div>
            <p className='row justify-content-md-center'> Organic Food is grown without the usage of preservatives and is free of Toxic Chemicals</p>



          </div>
          <div className="card-group mx-auto " >
            {data.map((val, index, key) => {
              return <HomeItem img={val.img} title={val.title} para={val.para} />
            })}

          </div>


        </div>


      </div>
      <div className="container mx-auto" id='scroll'>
        <div className="row mx-auto">
          <div className="col order 3 menu">
            <h1 className='text-center head'> 40+ </h1>
            <p className='text-center parap'> Food Partners</p>
          </div>
          <div className="col order-3 menu">
            <h1 className='text-center head'> 460+</h1>
            <p className='text-center parap'> Trusted Clients</p>
          </div>
          <div className="col order-3 menu">
            <h1 className='text-center head'> 15k+ </h1>
            <p className='text-center parap'> Orders</p>
          </div>
        </div>
      </div>

      <div id='about'>
        <About />
      </div>
   
   
      <div id='top'>
        <Top />
      </div>
      
      <div id='find'>
        <Find />
      </div>





    </>

  )
}

