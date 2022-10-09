import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import { NavLink } from 'react-router-dom';
import "./style.css"
import {dateDayData,dateYearData,dateMonthData,startData,endData
  // ,allRegisterData
} from "./config/counterSlice"
import {useDispatch,useSelector} from "react-redux"
import database from "./config/firebase";
import firebase from "firebase/compat/app";

function Transfer() {
  const data = useSelector((state)=>state.counter)
 const [toData, setToData]=useState("")
  const [value, onChange] = useState(new Date());
  const [start,setStart]=useState("")
  const [end,setEnd]=useState("")
// console.log(value.getFullYear())
const dispatch = useDispatch()

useEffect(()=>{
  if (start!==""&&end!==""&&value!==null) {
  setToData("allTransfers") 

  }
},[start,end,value,data])

function transferStart(){
  if (start!==""&&end!==""&&value!==null) {
    alert("Kayıt Tamamlandı!")
    dispatch(startData(start))
    dispatch(endData(end))
    dispatch(dateDayData(value.getDate()))
    dispatch(dateMonthData(value.getMonth()+1))
    dispatch(dateYearData(value.getFullYear()))
    // dispatch(allRegisterData( {nameSurname:data.nameSurname,
    // phone:data.phone,
    // email:data.email,
    // travellerType:data.travellerType,
    // car:data.car,
    // dateYear:value.getFullYear(),
    // dateMonth:value.getMonth()+1,
    // dateDay: value.getDate()<=9?  `0${value.getDate()}`:value.getDate(),
    // start:start,
    // end:end,
    // allRegister:[]}))

    database.collection("database").add({nameSurname:data.nameSurname,
      phone:data.phone,
      email:data.email,
      travellerType:data.travellerType,
      car:data.car,
      dateYear:value.getFullYear(),
      dateMonth:value.getMonth()+1,
      dateDay: value.getDate()<=9?  `0${value.getDate()}`:value.getDate(),
      start:start,
      end:end,
      allRegister:[],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

  } else if( start===""&&end===""&&value===null){
      alert("Lütfen alanları doldurun...")
  }

}
  return (
    <div className='seferContainer'>
    <div className='sefer'>
      <h1>Sefer Zamanı</h1>
      <div className="sefer1">
      <DatePicker  className=" date"    onChange={onChange} value={value} />
      <div className='inputSefer'>
      <input className="sefer1 " value={start} onChange={(e)=>setStart(e.target.value)} placeholder='Başlangıç Noktası' />
      <input className="sefer1 " value={end} onChange={(e)=>setEnd(e.target.value)} placeholder='Bitiş Noktası' />
      </div>
      <NavLink onClick={transferStart}  type="button" className=" btn btn-outline-dark" to={toData}  >Transfer Et!! </NavLink>
    </div>
    </div>
    </div>
  );
}

export default Transfer