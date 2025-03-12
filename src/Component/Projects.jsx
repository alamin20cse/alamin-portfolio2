import React from 'react';
import bloodProject from '../assets/BloodDonation.jpg';
import bloodPay from '../assets/bloodfud.png';
import marathonProject from '../assets/Marathon.jpg';
import crowdProject from '../assets/crowdfund.png';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
<div id='project' className="border-4 border-gray-300 rounded-lg shadow-lg p-6 bg-slate-100">
  <h1 className="text-center font-bold text-3xl text-gray-800 pb-6">
    Projects
  </h1>

  {/* Blood Donation Application */}
  <div className="border-2 border-blue-300 rounded-lg shadow-lg p-6 bg-white flex flex-col lg:flex-row gap-6">
    
    {/* Project Image */}
    <div className="lg:w-1/3 w-full lg:h-[200px]">
      <img 
        src={bloodProject} 
        alt="Blood Donation Application" 
        className="rounded-lg h-full w-full shadow-md" 
      />
      <img 
        src={bloodPay} 
        alt="Blood Donation Payment" 
        className="rounded-lg h-[150px] w-full shadow-md hidden lg:block" 
      />
    </div>

    {/* Project Details */}
    <div className="lg:w-2/3 w-full flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-blue-600">
        Blood Donation Management System
      </h2>
      <p className="text-gray-700 mt-2">
        A complete web-based platform designed to connect blood donors with recipients efficiently. The system includes user authentication, request management, and payment processing.
      </p>

      {/* Features */}
      <ul className="list-disc pl-6 text-gray-700 mt-3">
        <li>User & Admin Dashboards</li>
        <li>Secure JWT Authentication</li>
        <li>Manage Blood Donation Requests</li>
        <li>Stripe Payment Integration</li>
        <li>Role-Based Access for Admins & Volunteers</li>
        <li>Fully Responsive Design</li>
      </ul>

      {/* Technologies Used */}
      <p className="mt-3">
        <strong>Frontend:</strong> React, Tailwind CSS, React Router, TanStack Query<br />
        <strong>Backend:</strong> Node.js, Express.js, MongoDB (Mongoose), JWT, Stripe
      </p>

      {/* Links */}
      <div className="mt-4 flex lg:flex-row flex-col gap-4">
        <a 
          href="https://blood-donation-applicati-9d609.web.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          🔗 Live Demo
        </a>
        <a 
          href="https://github.com/alamin20cse/Blood-Donation-Client"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900"
        >
          🔗 GitHub (Frontend)
        </a>
        <a 
          href="https://github.com/alamin20cse/Blood-Donation-Server"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          🔗 GitHub (Backend)
        </a>
        <Link to='/bloodDonation'><button className='btn btn-primary'>View Details</button> </Link>
      </div>
    
    </div>
   
    
  </div>

  {/* Marathon Management System */}
  <div className="border-2 border-blue-300 rounded-lg shadow-lg p-6 bg-white flex flex-col lg:flex-row gap-6 mt-6">
    
    {/* Project Image */}
    <div className="lg:w-1/3 w-full my-auto lg:h-[250px]">
      <img 
        src={marathonProject} 
        alt="Marathon Management System" 
        className="rounded-lg h-full  w-full shadow-md " 
      />
     
    </div>

    {/* Project Details */}
    <div className="lg:w-2/3 w-full flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-blue-600">
        Marathon Management System
      </h2>
      <p className="text-gray-700 mt-2">
        A platform designed to manage marathon events, including registration, event management, and user authentication for event organizers and participants.
      </p>

      {/* Features */}
      <ul className="list-disc pl-6 text-gray-700 mt-3">
        <li>Dashboards</li>
        <li>Event Creation & Management</li>
        <li>Secure JWT Authentication</li>
        <li>Event Registration</li>
        <li>Countdown Timer for Events</li>
        <li>Fully Responsive Design</li>
      </ul>

      {/* Technologies Used */}
      <p className="mt-3">
        <strong>Frontend:</strong> React, Tailwind CSS, React Router, React Countdown Timer<br />
        <strong>Backend:</strong> Node.js, Express.js, MongoDB, JWT
      </p>

      {/* Links */}
      <div className="mt-4 flex  lg:flex-row flex-col gap-4">
        <a 
          href="https://marathon-management-syst-7b404.web.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          🔗 Live Demo
        </a>
        <a 
          href="https://github.com/alamin20cse/Marathon-Management-System-Client"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900"
        >
          🔗 GitHub (Frontend)
        </a>
        <a 
          href="https://github.com/alamin20cse/Marathon-Management-System-Server"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          🔗 GitHub (Backend)
        </a>
        <Link to='/MarathonManagement'><button className='btn btn-primary'>View Details</button> </Link>
      </div>
    </div>
    
  </div>





{/* CrowdFunding Application */}
<div className="border-2 border-blue-300 rounded-lg shadow-lg p-6 bg-white flex flex-col lg:flex-row gap-6 mt-6">
    
    {/* Project Image */}
    <div className="lg:w-1/3 w-full my-auto lg:h-[250px]">
      <img 
        src={crowdProject} 
        alt="CrowdFunding Application" 
        className="rounded-lg h-full  w-full shadow-md " 
      />
     
    </div>

    {/* Project Details */}
    <div className="lg:w-2/3 w-full flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-blue-600">
      CrowdFunding Application
      </h2>
      <p className="text-gray-700 mt-2">
      the CrowdFunding Application, a platform where people can create and support campaigns to fund various projects. This application allows users to add new campaigns, view active campaigns, and make donations. It is designed to facilitate crowdfunding for personal, startup, business, and creative idea projects.
      </p>

      {/* Features */}
      <ul className="list-disc pl-6 text-gray-700 mt-3">
        <li>Create Campaigns</li>
        <li>View Active Campaigns</li>
        <li>Make Donations</li>
        <li>User Authentication</li>
       
      </ul>

      {/* Technologies Used */}
      <p className="mt-3">
        <strong>Frontend:</strong> React, Tailwind CSS, React Router<br />
        <strong>Backend:</strong> Node.js, Express.js, MongoDB
      </p>

      {/* Links */}
      <div className="mt-4 flex  lg:flex-row flex-col gap-4">
        <a 
          href="https://crowd-funding-client-68e23.web.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          🔗 Live Demo
        </a>
        <a 
          href="https://github.com/alamin20cse/crowd-funding-client-10"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900"
        >
          🔗 GitHub (Frontend)
        </a>
        <a 
          href="https://github.com/alamin20cse/crowd-funding-server-10"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
        >
          🔗 GitHub (Backend)
        </a>
        <Link to='/CrowdFunding'><button className='btn btn-primary'>View Details</button> </Link>
      </div>
    </div>
    
  </div>



</div>
    );
};

export default Projects;