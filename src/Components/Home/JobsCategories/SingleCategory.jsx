import React from 'react';
import { GrTechnology } from "react-icons/gr";

const SingleCategory = ({category}) => {
    const {img,category_name} = category;
    return (
        <div className='border-2 flex justify-center rounded-xl shadow-lg'>
            <div>
            <div>
                <img className='h-56 w-56' src={img} alt="" />
            </div>
            <div className='flex justify-center items-center gap-3  my-5'>
                <GrTechnology></GrTechnology><h1 className='text-center text-xl font-bold'>{category_name}</h1>
            </div>
            </div>
        </div>
    );
};

export default SingleCategory;