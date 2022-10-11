import React, {  useEffect, useState } from 'react'
import "./style.css"
import { useDispatch } from "react-redux"
import {editData} from "./config/counterSlice"
import { NavLink } from 'react-router-dom'
import database from "./config/firebase";

function AllTransfers() {  
  const [text, setText] = useState([]);
 const [toData, setToData]=useState("edit/")
  // console.log(data.allRegister);
  const [drop,setDrop]=useState("Filter")

  var currentdate = new Date(); 
  var datetimeDay = currentdate.getDate() <=9? `0${currentdate.getDate()}`  :currentdate.getDate() 
 var datetimeMonth = (currentdate.getMonth()+1)
 var datetimeYear =currentdate.getFullYear()

 const dispatch=useDispatch()
 function trash (i){
   database.collection("database").doc(i).delete();
//  console.log(filter);  
 }

function iconClick(i){
  setToData(`edit/`)
  //  console.log(i);
  dispatch(editData(i))
//  console.log(filter);  
  
}

useEffect(() => {
  database
    .collection("database")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshop) =>
      setText(
        snapshop.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
}, [setText]);
  //  console.log(text);
    const transferDataFilter = drop!=="Filter"? text && text.filter((items)=>items.data.travellerType===drop): text
    const transferData = transferDataFilter&& transferDataFilter.map((item, index) =>
    (<ul key={index} className="allTransferUl" >
      <li key={index}  >
        <div key={index} className="card-body cardAllTransfer">
          <h5 className="card-title cardH5">Ad Soyad: {item.data.nameSurname}</h5>
          <p className="card-text">{item.data.travellerType} </p>
          <ion-icon onClick={()=>trash(item.id)}  name="trash-outline"></ion-icon>
          <NavLink  to={toData} >
          <ion-icon  onClick={()=>iconClick(item)} name="settings-outline"></ion-icon>
          </NavLink>          
        </div>
      </li>
    </ul>))
    const transferDataAll = text &&  text.map((item, index) =>
    (<ul key={index} className="allTransferUl" >
      <li key={index}  >
        <div key={index} className="card-body cardAllTransfer">
          <h5 className="card-title cardH5">Ad Soyad: {item.data.nameSurname}</h5>
          <p className="card-title">Telefon: {item.data.phone}</p>
          <p className="card-text">Yolcu Tipi: {item.data.travellerType} </p>
          <p className="card-text">Sefer Tarihi: {item.data.dateDay}/{item.data.dateMonth}/{item.data.dateYear} </p>
          <p className="card-text">Başlangıç: {item.data.start} </p>
          <p className="card-text">Bitiş: {item.data.end} </p>
          <p className="card-text">Araç: {item.data.car.car} </p>
          <p className="card-text">Sürücü: {item.data.car.driver}</p>
          <p className="card-text">Araç ID: {item.data.car.carID} </p>
          <NavLink to={toData} >
          <ion-icon  onClick={()=>iconClick(item)} name="settings-outline"></ion-icon>
          </NavLink>
        </div>
      </li>
    </ul>))
    const transferDataFilterDay =  text.filter((items)=>String(items.data.dateDay)===String(datetimeDay) )
    //  console.log(datetimeDay);
    const transferDataFilterMonth =   transferDataFilterDay.filter((items)=>String(items.data.dateMonth)===String(datetimeMonth))
    const transferDataFilterYear =   transferDataFilterMonth.filter((items)=>String(items.data.dateYear)===String(datetimeYear))
     const transferDataDay =  transferDataFilterYear.map((item, index) =>
     (<ul key={index} className="allTransferUl" >
       <li key={index}  >
         <div key={index} className="card-body cardAllTransfer ">
           <h5 className="card-title cardH5">Ad Soyad: {item.data.nameSurname}</h5>
           <p className="card-text">Yolcu Tipi: {item.data.travellerType} </p>
           <p className="card-text">Sefer Tarihi: {item.data.dateDay}/{item.data.dateMonth}/{item.data.dateYear} </p>
           <p className="card-text">Başlangıç: {item.data.start} </p>
           <p className="card-text">Bitiş: {item.data.end} </p>
           <p className="card-text">Araç: {item.data.car.car} </p>
           <p className="card-text">Sürücü: {item.data.car.driver}</p>
           <p className="card-text">Araç ID: {item.data.car.carID} </p>          
         </div>
       </li>
     </ul>))
    //  console.log(data.allRegister);

  return (
    <div className='allTransferContainer '>
      <div className='yolcular '>
        <div className='h3Div1'>
        <div className='h3'>
        <h3 className='h3' >Yolcular</h3>
          <div className="dropdown">
            <button className="btn btn-outline-dark dropdown-toggle dropdown1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {drop}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><p onClick={()=>setDrop("Filter")} className="dropdown-item" >Hepsi</p></li>
              <li><p onClick={()=>setDrop("Hasta")} className="dropdown-item" >Hasta</p></li>
              <li><p onClick={()=>setDrop("Hastane Personali")} className="dropdown-item" >Hastane Personali</p></li>
            </ul>
          </div>
        </div>
        </div>
        {transferData}
      </div>
      <div className='transferler'>
      <div className='h3Div'>
        <h3 className='h3'>Transferler</h3>
      </div>

        {transferDataAll}
      </div>
      <div className='gününTransferleri'>
        <div className='h3Div'>
        <h3 className='h3'>Günün Transferi</h3>
        </div>
        {transferDataDay}
      </div>
    </div>
  )
}

export default AllTransfers