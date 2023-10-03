import { useLoaderData, useParams } from "react-router-dom";

import { BiDollarCircle, BiReceipt } from "react-icons/bi";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = ()=>{
        saveJobApplication(idInt);
        toast("You have applied successfully");
    }


    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4 my-10">
                <div className="border md:col-span-3 px-4">
                    <h2 className="text-4xl text-center">Details coming here</h2>
                    <h2>Job details Id : {job.job_title}</h2>
                    <p><span className="text-2xl">Job Description:</span>{job.job_description}</p>

                    <p><span className="text-2xl">Job Responsibility:</span>{job.job_responsibility}</p>

                    <div>
                        <h3 className="text-2xl">Educational Requirements:</h3>
                        <p>{job.educational_requirements}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl">Experiences:</h3>
                        <p>{job.experiences}</p>
                    </div>
                </div>

                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <h2 className="flex gap-2 items-center"><BiDollarCircle className="text-lg"></BiDollarCircle><span>Salary :</span>{job.salary}</h2>

                    <h2 className="flex gap-2 items-center"><BiReceipt className="text-lg"></BiReceipt><span>Job Title :</span>{job.job_title}</h2>

                    <h2 className="text-lg font-semibold">Contact Information</h2>

                    <h2 className="flex gap-2 items-center"><AiFillPhone className="text-lg"></AiFillPhone><span>Phone :</span>{job.contact_information.phone}</h2>

                    <h2 className="flex gap-2 items-center"><AiOutlineMail className="text-lg"></AiOutlineMail><span>Email :</span>{job.contact_information.email}</h2>

                    <h1 className="flex gap-2 items-center"><FaLocationArrow className="text-lg"></FaLocationArrow><span>Address</span>:{job.contact_information.address}</h1>


                    <button onClick={handleApplyJob} className="btn bg-[#9873FF] w-full text-white hover:text-black">Apply Now</button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;