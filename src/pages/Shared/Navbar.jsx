import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { GoMail } from "react-icons/go";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <NavLink className={`hover:text-blue-100`} to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/allbooks">
        <li>All Books</li>
      </NavLink>
      <NavLink to="/addbook">
        <li>Add Book</li>
      </NavLink>
      <NavLink to="borrowedbooks">
        <li>Borrowed Books</li>
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Logout Successful",
              icon: "success",
            });
          })
          .catch();
      }
    });
  };

  return (
    <nav className="">
      <div className=" flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <ul className="flex gap-2">
            <li className="flex items-center gap-2"><GoMail></GoMail>Contact</li>
            <li className="border-x-2 px-2">Help</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* login register  */}

        {!user ? (
          <div className="my-[10px]">
            <ul className="flex gap-2 items-center justify-center">
              <NavLink to="/login">
                <li>Login</li>
              </NavLink>
              <NavLink to="/register">
                <li className="border-l-2 px-2">Register</li>
              </NavLink>
            </ul>
          </div>
        ) : (
          <div className="flex items-center px-2 gap-3 bg-[#66666610]">
            <div>
              <p>
                Hi, <span>{user?.displayName || "Book Lover"}</span>
              </p>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    //   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleSignOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="flex gap-10 py-8 max-w-7xl mx-auto">
        <Link to="/"><img src={logo} alt="" /></Link>
        <div className="grow">
          <label className="input input-bordered rounded-none flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search by title, author, keyword"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <p className="text-right text-blue-500 hover:text-green-500 text-sm">+Advanced search</p>
        </div>
      </div>
      <div className="navbar bg-[#77b748]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 menu-horizontal text-white font-medium px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
