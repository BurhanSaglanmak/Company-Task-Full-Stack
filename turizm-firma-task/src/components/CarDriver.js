import React from 'react'
import { NavLink } from 'react-router-dom'
import { Car } from './Car'
import  "./style.css"
import {
  // useSelector,
  useDispatch} from  "react-redux"
import {carData} from "./config/counterSlice"


function CarDriver() {
  // const data = useSelector((state)=>state.counter)
  // console.log(data);
  const dispatch = useDispatch()

  function transfer(i){
    dispatch(carData(i))
  }

  return (
    <div className='carMapContainer' >
      <div className='h1'>
        <h1>Araç / Sürücü</h1>
      </div>
        {Car.map((item,index)=>
        
        <div key={index} className="carMap ">
         <ul key={index} className="carMap ">
          <li key={index}  >
        <NavLink key={index} onClick={()=> transfer(item)}  type="button" className=" btn btn-outline-dark card1" to="transfer">
            <div key={index} className="card-body ">
              <h5 className="card-title">{item.car}</h5>
              <p className="card-text">{item.driver} </p>
          </div>
          </NavLink>
          </li>
          </ul></div>)} 
    </div>
  )
}

export default CarDriver