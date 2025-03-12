import React from 'react';
import { FaReact, FaNodeJs, FaStripe, FaGithub } from 'react-icons/fa';
import bloodProject from '../assets/BloodDonation.jpg';

const BloodDonation = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16 px-4 sm:px-6 lg:px-20">
            {/* Image Section */}
            <div className="flex justify-center">
                <img src={bloodProject} alt="Blood Donation" className="w-full max-w-4xl rounded-lg shadow-lg" />
            </div>

            {/* Admin Credentials */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center sm:text-left">
                <h2 className="text-2xl font-bold text-red-600">Admin Credentials</h2>
                <p className="mt-2 text-gray-700"><strong>Email:</strong> admin@gmail.com</p>
                <p className="text-gray-700"><strong>Password:</strong> 1234aA</p>
            </section>

            {/* Project Overview */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-red-600">Project Overview</h2>
                <p className="text-gray-700 mt-3">
                    The Blood Donation Application is a user-friendly platform that connects donors with recipients. It provides efficient management for donations, user authentication, and admin control.
                </p>
            </section>

            {/* Features Section */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-red-600">Features</h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                    <li>User Registration & Login</li>
                    <li>Donor, Admin, and Volunteer Dashboards</li>
                    <li>Secure JWT Authentication</li>
                    <li>Stripe Payment Integration</li>
                    <li>Responsive Design & Notifications</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-red-600">Technologies Used</h2>
                <div className="grid grid-cols-1  gap-4 mt-3 text-gray-700">
                    <p className="flex items-center"><FaReact className="mr-2 text-blue-600" /> <strong>Frontend:</strong> React, Tailwind CSS</p>
                    <p className="flex items-center"><FaNodeJs className="mr-2 text-green-600" /> <strong>Backend:</strong> Node.js, Express.js, MongoDB</p>
                    <p className="flex items-center"><FaStripe className="mr-2 text-blue-400" /> <strong>Payments:</strong> Stripe</p>
                    <p><strong>Auth:</strong> JWT (JSON Web Tokens)</p>
                    <p><strong>File Upload:</strong> ImageBB API</p>
                </div>
            </section>

            {/* Installation Guide */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-red-600">Installation Guide</h2>
                <pre className="bg-gray-200 p-4 rounded-lg mt-3 text-sm sm:text-base overflow-x-auto">
{`git clone https://github.com/alamin20cse/Blood-Donation-Client
cd Blood-Donation-Client
npm install
npm start`}
                </pre>
            </section>

            {/* Backend Tech Stack */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-red-600">Backend Tech Stack</h2>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                    <li>Node.js & Express.js - Backend framework</li>
                    <li>MongoDB Atlas - NoSQL Database</li>
                    <li>JWT Authentication - Secure user authentication</li>
                    <li>Stripe - Payment gateway integration</li>
                    <li>dotenv - Environment variable management</li>
                    <li>cors & cookie-parser - Handling CORS & HTTP cookies</li>
                </ul>
            </section>

            {/* Links Section */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-bold text-red-600">Project Links</h2>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <a href="https://blood-donation-applicati-9d609.web.app" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
                        <FaGithub className="inline-block mr-2" /> Live Demo
                    </a>
                    <a href="https://github.com/alamin20cse/Blood-Donation-Client" target="_blank" className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 text-sm sm:text-base">
                        <FaGithub className="inline-block mr-2" /> GitHub (Frontend)
                    </a>
                    <a href="https://github.com/alamin20cse/Blood-Donation-Server" target="_blank" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base">
                        <FaGithub className="inline-block mr-2" /> GitHub (Backend)
                    </a>
                </div>
            </section>
        </div>
    );
};

export default BloodDonation;
