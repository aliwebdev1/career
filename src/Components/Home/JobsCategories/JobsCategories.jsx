import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const JobsCategories = () => {
    const [categories, setCategories] = useState([])
    // console.log(categories)
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='border-2 shadow-xl py-5  rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h1 className=' font-bold text-3xl uppercase text-center text-white'>All Categories</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-20'>
                {
                    categories.length ? categories.map(category => <SingleCategory key={category.id} category={category}></SingleCategory>) : <div className='grid grid-cols-3 gap-96'>
                        <div>
                            <div className="skeleton h-32 w-56"></div>
                        </div>
                        <div className="skeleton h-32 w-56"></div>
                        <div className="skeleton h-32 w-56"></div>
                    </div>
                }

            </div>
        </div>
    );
};

export default JobsCategories;