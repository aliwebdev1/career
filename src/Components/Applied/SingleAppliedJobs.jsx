import React from 'react';
import { deleteDataFromLocalStorage } from '../../LocalStorage/LocalStorage';

const SingleAppliedJobs = ({ data,handleDelete }) => {
    // console.log(data)
    
    return (
        <div className='border my-10 shadow-xl pr-10'>
            <div className='flex items-center gap-10'>
                <div className=''>
                    <img className='w-72 h-36' src={data?.image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>{data?.job_title}</h1>
                    <p className='text-justify'>{data?.jobSummary.slice(0,200)}</p>
                    <p className='font-bold mt-2'>{data?.location}</p>
                    <div className='flex justify-end'>
                    <button className='px-10 py-4 bg-blue-500 text-white font-bold rounded-xl my-3' onClick={()=>handleDelete(data?._id)}>Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleAppliedJobs;