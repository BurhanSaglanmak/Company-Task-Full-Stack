import React, { useEffect, useState } from 'react'
import "./style.css"
import { NavLink} from "react-router-dom"
import {useDispatch} from   "react-redux"
import {nameData,phoneData,emailData,travellerTypeData} from "./config/counterSlice"

function UsersRegister() {
 const [toData, setToData]=useState("")
 const [name, setName]=useState("")
 const [phone, setPhone]=useState("")
 const [email, setEmail]=useState("")
 const [travellerType, setTravellerType]=useState("Yolcu Tipi")
  const dispatch = useDispatch()

  useEffect(()=>{
    if (name!==""&&phone!==""&&email!==""&&travellerType!=="Yolcu Tipi") {
      setToData("cardriver")

    }   

  },[name,phone,email,travellerType])

  function transferClick(){
    if (name!==""&&phone!==""&&email!==""&&travellerType!=="Yolcu Tipi") {
      dispatch(nameData(name))
      dispatch(phoneData(phone))
      dispatch(emailData(email))
      dispatch(travellerTypeData(travellerType))
      setToData("cardriver")
      // alert("kayıt başarılı...")
      setName("")
      setPhone("")
      setEmail("")
      setTravellerType("Yolcu Tipi")
    }
    else if (name===""||phone===""||email!==""||travellerType==="Yolcu Tipi") {
      alert("Lütfen tüm alanları doldurunuz...")
    }
  }

  return (
    <div className='users' >
      <div className='users1'>
      <div className='h1'>
        <h1 className='h1'>Türkiye'de Kaliteli
          Sağlık Hizmetleri ile Tanışın</h1>
      </div>
      <div className='Register' >
        <h5>Bizimle İletişime Geçin</h5>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Ad Soyad' />
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Telefon Numaranız' />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <div className="dropdown">
          <button className="dropdownBtn btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {travellerType}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><p onClick={()=>setTravellerType("Hasta")} className="dropdown-item" >Hasta</p></li>
            <li><p onClick={()=>setTravellerType("Hastane Personali")} className="dropdown-item" >Hastane Personali</p></li>
          </ul>
        </div>
        <NavLink onClick={transferClick} type="button" className="btn btn-outline-dark" to={toData}>Transfere Başla!!</NavLink>
      </div>
      </div>
    </div>
  )
}

export default UsersRegister