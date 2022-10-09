import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import database from './config/firebase';

function EditPage() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.counter)
  const[name,setName]=useState(data? data.editData.data.nameSurname:"")
  const[phone,setPhone]=useState(data? data.editData.data.phone:"")
  const[email,setEmail]=useState(data? data.editData.data.email:"")
  const[travel,setTravel]=useState(data? data.editData.data.travellerType:"")
  const[date,setDate]=useState(data? `${data.editData.data.dateDay}/${data.editData.data.dateMonth}/${data.editData.data.dateYear}`:"")
  const[start,setStart]=useState(data? data.editData.data.start:"")
  const[end,setEnd]=useState(data? data.editData.data.end:"")
  const[car,setCar]=useState(data? data.editData.data.car.car:"")
  const[driver,setDriver]=useState(data? data.editData.data.car.driver:"")
  const[carIdData,setCarIdData]=useState(data? data.editData.data.car.carID:"")

  // console.log(date.slice(6,10));
// console.log(allDataFilter);


  function clickButton(){ 
    database.collection("database").doc(data.editData.id).set({
      nameSurname:name,
      phone:phone,
      email:email,
      travellerType: travel,
      car:{car: car, driver: driver, carID: carIdData},
      dateYear:date.slice(6,10),
      dateMonth:date.slice(3,5),
      dateDay:date.slice(0,2),
      start:start,
      end:end,
      allRegisterData:[]
  },{merge:true})
    
  navigate(-1)
    // console.log(data);
  }
  const transferDataAll =
    <ul className="allTransferU2 allTransferU1" >
      <li   >
        <div  className="card-body ">
          <h5 className="card-title editInput ">Ad Soyad: <input className='editInput'  value={name} onChange={(e)=>setName(e.target.value)}  /></h5>
          <p className="card-text editInput ">Telefon: <input className='editInput' value={phone} onChange={(e)=>setPhone(e.target.value)}  /> </p>
          <p className="card-text editInput ">Email: <input className='editInput' value={email} onChange={(e)=>setEmail(e.target.value)}  /> </p>
          <p className="card-text editInput ">Yolcu Tipi: <input className='editInput' value={travel} onChange={(e)=>setTravel(e.target.value)}  /> </p>
          <p className="card-text editInput">Sefer Tarihi: <input className='editInput' value={date} onChange={(e)=>setDate(e.target.value)}  /> </p>
          <p className="card-text editInput">Başlangıç: <input className='editInput' value={start} onChange={(e)=>setStart(e.target.value)}  /> </p>
          <p className="card-text editInput">Bitiş: <input className='editInput' value={end} onChange={(e)=>setEnd(e.target.value)}  /> </p>
          <p className="card-text editInput">Araç: <input className='editInput' value={car} onChange={(e)=>setCar(e.target.value)}  /> </p>
          <p className="card-text editInput">Sürücü: <input className='editInput'value={driver} onChange={(e)=>setDriver(e.target.value)}  /></p>
          <p className="card-text editInput">Araç ID: <input className='editInput'value={carIdData} onChange={(e)=>setCarIdData(e.target.value)}  /> </p>
          <button onClick={clickButton}>Kaydet</button>

        </div>
      </li>
    </ul>
  return (
    <div className='allTransferContainer '>

      <div className='transferler'>
      <div className='h3Div'>
        <h3 className='h3'>Edit</h3>
      </div>
        {transferDataAll}
      </div>
    </div>
  )
}

export default EditPage