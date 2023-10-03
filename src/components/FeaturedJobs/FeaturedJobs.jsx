import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    // this is not the best way to load data to show

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div >
            <div className="mt-4">
                <h2 className="text-6xl text-center">Featured Jobs {jobs.length}</h2>
                <p className="text-center mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="mt-5 text-center mb-14">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button
                        onClick={() => setDataLength(jobs.length)}
                        className="bg-[#9873FF] px-4 py-3 text-white rounded-lg font-semibold ">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;