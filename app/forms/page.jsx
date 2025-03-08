'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const AddProductPage = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Fruits",
        price: "",
        origin: "",
        nutrients: "",
        availability: "In Stock",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Product Data:", { ...data, image });
        alert("Product added successfully!");
    };

    return (
        <form onSubmit={onSubmitHandler} className='ml-30 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <p className='text-xl'>Upload Product Image</p>
            <label htmlFor="image">
                    <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='upload area' width={140} height={70} />
                </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />

            <p className='text-xl mt-4'>Product Name</p>
            <input name='name' onChange={onChangeHandler} value={data.name} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Enter product name' required />

            <p className='text-xl mt-4'>Product Description</p>
            <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' placeholder='Describe the product' rows={6} required />

            <p className='text-xl mt-4'>Category</p>
            <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Grains">Grains</option>
                <option value="Nuts">Nuts</option>
                <option value="Bakery">Bakery</option>
            </select>

            <p className='text-xl mt-4'>Price (per kg or unit)</p>
            <input name='price' onChange={onChangeHandler} value={data.price} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Enter price' required />

            <p className='text-xl mt-4'>Origin</p>
            <input name='origin' onChange={onChangeHandler} value={data.origin} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Country/Region' required />

            <p className='text-xl mt-4'>Nutritional Value</p>
            <input name='nutrients' onChange={onChangeHandler} value={data.nutrients} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Key nutrients' required />

            <p className='text-xl mt-4'>Availability</p>
            <select name="availability" onChange={onChangeHandler} value={data.availability} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
            </select>
            <br />

            <button type='submit' className='mt-8 w-40 h-12 bg-green-600 text-white hover:bg-green-700 transition'>ADD PRODUCT</button>
        </form>
    );
};

export default AddProductPage;