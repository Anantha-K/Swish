'use client'
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [availableQty, setAqty] = useState('');
  const [category,setCategory]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, slug, desc, img,category, size, color, price, availableQty };
    console.log(data);

    try {
      let res = await fetch('http://localhost:3000/api/addProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      let response = await res.json();
      console.log(response);

      if (response.message === 'User created') {
        // Perform actions after successful user creation
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <>
      <div className='flex w-full'>
        <div className='border-r-2 border-gray-50 flex flex-col w-[20%] h-screen'>
          <div className='bg-white h-1/4 flex flex-col space-y-3 items-center justify-center'>
            <div className='bg-yellow-500 rounded-full h-36 w-36'></div>
            <h1>User Name</h1>
          </div>
          <div className='h-3/4 bg-red-50 flex flex-col space-y-3 items-center'>
            <button className='font-semibold py-2 w-full'>Add Products</button>
            <button className='font-semibold py-2 w-full'>Orders</button>
            <button className='font-semibold py-2 w-full'>Users</button>
            <button className='font-semibold py-2 w-full'>Analytics</button>
          </div>
        </div>
        <div className='bg-red-50 w-[80%] h-screen'>
          <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            <input type='text' value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Slug' />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description'></textarea>
            <input type='text' value={img} onChange={(e) => setImg(e.target.value)} placeholder='Image URL' />
            {/* You may need to handle size and color inputs differently based on your UI */}
            {/* Here's an example for handling an array of strings */}
            <input type='text' value={size} onChange={(e) => setSize(e.target.value)} placeholder='Sizes (comma-separated)' />
            <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='Colors (comma-separated)' />
            <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' />
            <input type='text' value={availableQty} onChange={(e) => setAqty(e.target.value)} placeholder='Available Quantity' />
            <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' />

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
