import React from 'react';
import { FaReact, FaGithub, FaNodeJs, FaDatabase, FaCogs } from 'react-icons/fa';
import marathonProject from '../assets/Marathon.jpg';

const MarathonManagement = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16">
            <div>
                <img src={marathonProject} alt="MarathonManagement photo" />
            </div>
            {/* Project Overview */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-blue-600">Project Overview</h2>
                <p className="mt-3 text-gray-700">
                    This is the frontend of the Marathon Management System, a web application for creating, managing, and registering for marathon events. The application includes features like dynamic routing, user authentication, CRUD operations, and private routes.
                </p>
            </section>

            {/* Features Section */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-blue-600">Features</h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                    <li>Dynamic Layout (Navbar, Footer, and Main Section)</li>
                    <li>Home Page (Banner carousel, Marathons, and Upcoming Marathons)</li>
                    <li>Authentication (Login/Register, Social login, Error handling)</li>
                    <li>Private Routes (Add Marathon, Marathons Grid, Marathon Details, User-specific lists)</li>
                    <li>Additional Features (Countdown timer, Dynamic titles, Loading spinners, Notifications)</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-blue-600">Technologies Used</h2>
                <div className="grid grid-cols-1 gap-4 mt-3 text-gray-700">
                    <p className="flex items-center"><FaReact className="mr-2 text-blue-600" /> <strong>Frontend:</strong> React.js, Tailwind CSS, React Router</p>
                    <p className="flex items-center"><FaNodeJs className="mr-2 text-green-600" /> <strong>Backend:</strong> Node.js, Express.js, MongoDB</p>
                    <p className="flex items-center"><FaDatabase className="mr-2 text-yellow-600" /> <strong>Database:</strong> MongoDB</p>
                    <p className="flex items-center"><FaCogs className="mr-2 text-gray-600" /> <strong>Other:</strong> JWT, Axios, Toastify/SweetAlert</p>
                </div>
            </section>

            {/* Installation Guide */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-blue-600">Installation Guide</h2>
                <pre className="bg-gray-200 p-4 rounded-lg mt-3  text-sm sm:text-base overflow-x-auto">
{`git clone https://github.com/alamin20cse/Marathon-Management-System-Client
cd Marathon-Management-System-Client
npm install
npm start`}
                </pre>
            </section>

            {/* Project Links */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-bold text-blue-600">Project Links</h2>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <a href="https://marathon-management-syst-7b404.web.app/" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                        <FaGithub className="inline-block mr-2" /> Live Demo
                    </a>
                    <a href="https://github.com/alamin20cse/Marathon-Management-System-Client" target="_blank" className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300">
                        <FaGithub className="inline-block mr-2" /> GitHub (Frontend)
                    </a>
                    <a href="https://github.com/alamin20cse/Marathon-Management-System-Server" target="_blank" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                        <FaGithub className="inline-block mr-2" /> GitHub (Backend)
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MarathonManagement;
