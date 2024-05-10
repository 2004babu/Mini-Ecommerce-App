import React, { useContext, useEffect, useState } from 'react'
import { Productcontext } from '../../context/product'
import Product from '../components/Product'
import { useSearchParams } from 'react-router-dom'

const Home = () => {

  const {data,Search,setsearch}=useContext(Productcontext)
  const [post,setpost]=useState([])
  useEffect(()=>{
    setsearch('')
  },[])
useEffect(()=>{
if(Search===''){
  setpost(data)
  return
}else{
 const filtered= data.filter((item)=>{
  return item.name.toLowerCase().includes(Search.toLowerCase())||item.description.toLowerCase().includes(Search.toLowerCase())
 })
setpost(filtered);
}
},[data,Search])
  return (
    <>
     <div className="Home_Container">
      {post.map((item ,index)=><Product item={item} key={index}/>)}
     </div>
    </>
  ) 
}

export default Home
 