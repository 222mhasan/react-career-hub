import { MdLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="mt-4"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{job_title}</h2>
                <p className="text-lg font-semibold">{company_name}</p>
                <div className="flex gap-5 ">
                    <button className="border border-blue-500 p-2 rounded-md font-semibold text-[#9873FF]">{remote_or_onsite}</button>
                    <button className=" border border-blue-500 px-3 py-2 rounded-md font-semibold text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-4 mt-3 text-lg font-semibold">
                    <div>
                        <h2 className="flex items-center gap-2"><MdLocationOn className="text-lg"></MdLocationOn>{location}</h2>
                    </div>
                    <div>
                        <h2 className="flex items-center gap-2"><CiDollar className="text-lg"></CiDollar>{salary}</h2>
                    </div>
                </div>

                <div className="card-actions  mt-4">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-[#9873FF] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;