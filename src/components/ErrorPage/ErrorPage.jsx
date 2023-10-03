import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-7xl text-center ">Opps ..!!</h1>
            <div className="text-center mt-10">
                <Link className="bg-rose-600 text-lg text-white px-4 py-2 font-semibold rounded-lg " to='/'>Go Back to Home</Link>
            </div>

        </div>
    );
};

export default ErrorPage;