'use client'
import React, { useState } from 'react'


const handleSubmit= async (e:any)=>{
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const [price, setPrice] = useState('')
  const [aqty, setAqty] = useState('')


    e.preventDefault();
    
    const data={title,slug,desc,img,size,color,price,aqty};
    setTitle('');
    setSlug('');
    setDesc('');
    setImg('')
    setSize([])
    setColor([])
    setPrice('')
    setAqty('')
    console.log(data)
    let res = await fetch('http://localhost:3000/api/SignUp',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data)
    }
    
    )

    let response = await res.json();
    console.log(response);
    if(response.message==="User created"){
      toast.success("User Created!");
  

      
    }
   

   }
  
const page = () => {
  return (
    <>
    <div className='flex w-full'> 

    <div className='border-r-2 border-gray-50 flex flex-col w-[20%] h-screen'>
        <div className='bg-white h-1/4 flex flex-col space-y-3 items-center justify-center'>
            <div className='bg-yellow-500 rounded-full h-36 w-36'>
            

            </div>
            <h1>User Name</h1>

        </div>
        <div className='h-3/4 bg-red-50 flex flex-col space-y-3 items-center'>
            <button className=' font-semibold  py-2 w-full'>Add Products</button>
            <button className='  font-semibold  py-2 w-full'>Orders</button>

            <button className='  font-semibold  py-2 w-full'>Users</button>

            <button className='  font-semibold  py-2 w-full'>Analytics</button>

            

        </div>

    </div>
    <div className='bg-red-50 w-[80%] h-screen'>
 


    </div>
    </div>
    </>
  )
}

export default page