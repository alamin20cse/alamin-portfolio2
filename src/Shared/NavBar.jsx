
import { Link, NavLink } from 'react-router-dom';
import photo1 from '../assets/alamin001.jpg'



const NavBar = () => {

  
  // const download = () => {
  //   const pdfUrl = "/cv1.pdf"; // Make sure cv1.pdf is in the public folder
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Md_Al-Amin_Hossain_CV.pdf"; // Set a meaningful file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  

 

   // Navigation Links
const links = (
    <>
      <li>
        <a href="/#home">Home</a>
      </li>
    
      <li>
        <a href="/#about">About</a>
      </li>
    
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="/#project">Projects</a>
      </li>
      <li>
        <a href="/#education">Education</a>
      </li>
    </>
  );
  
 

  
    return (
        <div className="navbar z-10 bg-black/80 dark:bg-gray-900 fixed text-white">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
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
                className="menu menu-sm text-black dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* Logo */}
            <Link to="/" className="btn btn-ghost text-xl">
           
              <img className="h-10 w-10 rounded-full" src={photo1} alt="Logo" />
            </Link>
          </div>
    
          {/* Center Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
    
          {/* Right Section */}
          <div className="navbar-end flex items-center gap-4">
           <button  className='btn'>Resume</button>
          </div>
        </div>
      );
};

export default NavBar;