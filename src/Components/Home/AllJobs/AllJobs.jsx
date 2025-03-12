import React, { useEffect, useState } from 'react';
import SingleJobs from './SingleJobs';

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([])

    const [showAll, setShowAll] = useState(true)

    const handleClick=()=>{
        setShowAll(!showAll)
    }
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])
    return (
        <div>
            <div className='border-2 shadow-xl py-5  rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <h1 className=' font-bold text-3xl text-center text-white uppercase'>All Jobs</h1>
            </div>
            <div className='mt-20 '>
                {
                    showAll === true?<div>
                        {
                            allJobs.length?<div className='grid grid-cols-1 md:grid-cols-2 gap-16 duration-200'>{
                                allJobs.slice(0,4).map(job => <SingleJobs key={job._id} job={job}></SingleJobs>)
                            }</div>:<div className='grid grid-cols-3 gap-[1000px]'>
                            <div>
                                <div className="skeleton h-32 w-56"></div>
                            </div>
                            <div className="skeleton h-32 w-56"></div>
                        </div>
                        }
                        
                    </div>
                :<div>
                    {
                        allJobs.length?<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                        {
                            allJobs.map(job => <SingleJobs key={job._id} job={job}></SingleJobs>)
                        }
                    </div>:<div className='grid grid-cols-3 gap-96'>
                        <div>
                            <div className="skeleton h-32 w-56"></div>
                        </div>
                        <div className="skeleton h-32 w-56"></div>
                        <div className="skeleton h-32 w-56"></div>
                    </div>
                    }
                    
                </div>
}

            </div>
            <div className='text-center mt-5'>
                {
                    showAll?<button onClick={handleClick} className='px-10 py-4 bg-blue-500 text-white font-bold rounded-xl m-4'>Show All</button>:<button onClick={handleClick} className='px-10 py-4 bg-blue-500 text-white font-bold rounded-xl m-4'>Show Less</button>
                }
                
            </div>
        </div>
    );
};

export default AllJobs;