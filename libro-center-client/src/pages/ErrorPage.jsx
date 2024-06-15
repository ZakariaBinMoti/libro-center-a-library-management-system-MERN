import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";

const ErrorPage = () => {
    return (
        <div className="max-w-7xl mx-auto text-center">
            <Navbar></Navbar>
            {/* <h2 className="text-2xl">Error Page</h2> */}
            <h2 className="text-3xl mt-32">Ooops! Could Not Find It</h2>
            <h1 className="text-9xl font-bold text-[#77b748]">404</h1>
            <p>Go to <Link to="/" className="text-blue-600">Home</Link> </p>
            
        </div>
    );
};

export default ErrorPage;