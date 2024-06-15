import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
// import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // const name = form.get("name");
    const email = form.get("email");
    // const photo = form.get("photo");
    const password = form.get("password");
    // console.log(name, email, photo, password);

    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password must be at least 6 characters long.",
        icon: "error",
      });
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one uppercase letter.",
        icon: "error",
      });
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one lowercase letter.",
        icon: "error",
      });
    }
    else if (!/[!@#$%^&*()_+{}[\]:;<>,.?/\\]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must contain at least one special character.",
        icon: "error",
      });
    }
    else {
      createUser(email, password)
        .then((result) => {
          // console.log(result.user);
          if (result.user) {
            Swal.fire({
              title: "Success!",
              text: "Registration Successful",
              icon: "success",
            }).then(() => {
              navigate(location?.state ? location.state : "/");
            });
          }
        })
        .catch((error) => {
          console.error(error);
          if (error.code && error.code.startsWith("auth/")) {
            // Extract and display the error message
            Swal.fire({
              title: "Error!",
              text: `${error.message}`,
              icon: "error",
            });
          } else {
            // If it's not a Firebase error, you can display the error object
            Swal.fire({
              title: "Error!",
              text: `${error}`,
              icon: "error",
            });
          }
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* <Helmet>
        <title>Register | Radiant Artistry</title>
      </Helmet> */}
      <div>
        <h1 className="text-2xl font-semibold text-center my-8">
          Please Register your account
        </h1>
      </div>
      <div className="lg:w-1/3 md:w-1/2 mx-5 md:mx-auto lg:mx-auto shadow-2xl p-8 rounded-lg">
        <form onSubmit={handleRegister}>
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