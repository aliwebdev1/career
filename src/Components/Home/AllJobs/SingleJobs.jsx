import React from 'react';
import { FaBusinessTime } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SingleJobs = ({ job }) => {
    const { job_title, deadline, image, jobSummary, location,_id } = job;
    // console.log(job)
    return (
        <div className='border rounded-lg shadow-xl'>
           <div className='flex items-center'>
            <img src={image} className='h-56 w-56' alt="" />
            <div className='pt-5 pr-5 pb-5'>
            <h1 className='font-bold text-2xl'>{job_title}</h1>
            <p className='text-justify'>{jobSummary.slice(0,210)}...</p>
            <p className='flex font-bold gap-2 mt-1'><FaBusinessTime className='text-2xl'></FaBusinessTime>{deadline}</p>
            <p className='flex gap-2 font-bold mt-2'><FaLocationDot className='text-xl'></FaLocationDot>{location}</p>
            </div>
           </div>
           <div className='flex justify-end'>
           <Link to={`job/${_id}`}><button className='px-10 py-4 bg-blue-500 text-white font-bold rounded-xl m-4'>Details</button></Link>
           </div>
        </div>
    );
};

export default SingleJobs;