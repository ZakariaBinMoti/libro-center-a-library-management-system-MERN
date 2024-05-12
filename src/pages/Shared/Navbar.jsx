import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/allbooks">
        <li>
          <a>All Books</a>
        </li>
      </NavLink>
      <NavLink to="/addbook">
        <li>
          <a>Add Book</a>
        </li>
      </NavLink>
      <NavLink to="borrowedbooks">
        <li>
          <a>Borrowed Books</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <nav className="">
      <div className=" flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <ul className="flex gap-2">
            <li>Contact</li>
            <li className="border-x-2 px-2">Help</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* login register  */}

        <div>
          <ul className="flex gap-2">
            <NavLink to="/login"><li>Login</li></NavLink>
            <NavLink to="/register"><li className="border-l-2 px-2">Register</li></NavLink>
          </ul>
        </div>

        <div className="flex items-center px-2 gap-3 bg-[#66666610]">
          <div>
            <p>Hi, Zakaria</p>
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
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-10 py-8 max-w-7xl mx-auto">
        <img src={logo} alt="" />
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
          <ul className="menu menu-horizontal text-white font-medium px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
