import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
      {/* <Helmet>
        <title>Register | Radiant Artistry</title>
      </Helmet> */}
      <div>
        <h1 className="text-2xl font-semibold text-center my-8">
          Please Register your account
        </h1>
      </div>
      <div className="lg:w-1/3 md:w-1/2 mx-5 md:mx-auto lg:mx-auto shadow-2xl p-8 rounded-lg">
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        <div className="flex items-center justify-center  mt-4">
          <p>
            Already have an account?{" "}
            <span className="text-blue-600 font-bold">
              {" "}
              <Link to="/login">Login</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;