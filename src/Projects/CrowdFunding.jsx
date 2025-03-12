import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaCogs, FaGithub, FaMoneyBillWave, FaServer, FaMobileAlt, FaLock } from 'react-icons/fa';
import crowdProject from '../assets/crowdfund.png';

const CrowdFunding = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16">
            <div className='p-6'>
                <img className='rounded-3xl border-8 shadow-2xl border-slate-600 p-4' src={crowdProject} alt="crowdfund" />
            </div>
            
            {/* Project Overview */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-blue-600">CrowdFunding Application</h2>
                <p className="mt-3 text-gray-700">
                    The CrowdFunding Application is a platform where people can create and support campaigns to fund various projects. It allows users to add new campaigns, view active ones, and donate to causes. This platform supports crowdfunding for personal, startup, business, and creative projects.
                </p>
            </section>

            {/* Features Section */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-blue-600">Features</h2>
                <ul className="list-disc pl-6 mt-3 space-y-3 text-gray-700">
                    <li><strong>Create Campaigns:</strong> Users can add campaigns with details like title, description, image, type, minimum donation, and deadline.</li>
                    <li><strong>View Active Campaigns:</strong> Users can explore active campaigns with filtering and sorting options.</li>
                    <li><strong>Make Donations:</strong> Donors can view campaign details and contribute funds.</li>
                    <li><strong>User Authentication:</strong> Secure login, registration, and profile management with Google Sign-In support.</li>
                    <li><strong>Responsive Design:</strong> Optimized for desktops, tablets, and mobile devices.</li>
                </ul>
            </section>

            {/* Technologies Used */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-blue-600">Technologies Used</h2>
                <div className="grid grid-cols-1  gap-4 mt-3 text-gray-700">
                    <p className="flex items-center"><FaReact className="mr-2 text-blue-600" /> <strong>Frontend:</strong> React.js, Tailwind CSS</p>
                    <p className="flex items-center"><FaNodeJs className="mr-2 text-green-600" /> <strong>Backend:</strong> Node.js, Express.js</p>
                    <p className="flex items-center"><FaDatabase className="mr-2 text-yellow-600" /> <strong>Database:</strong> MongoDB</p>
                    <p className="flex items-center"><FaLock className="mr-2 text-gray-600" /> <strong>Security:</strong> JWT, bcrypt, CORS</p>
                    <p className="flex items-center"><FaMobileAlt className="mr-2 text-purple-600" /> <strong>Authentication:</strong> Firebase (Google Sign-In)</p>
                    <p className="flex items-center"><FaCogs className="mr-2 text-gray-600" /> <strong>Other:</strong> dotenv, Axios</p>
                </div>
            </section>

            {/* API Endpoints */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-blue-600">API Endpoints</h2>
                <h3 className="text-xl font-semibold mt-4 text-gray-800">Campaigns</h3>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                    <li><strong>GET /campaign:</strong> Retrieve all campaigns.</li>
                    <li><strong>GET /campaign/:id:</strong> Retrieve a specific campaign by ID.</li>
                    <li><strong>POST /campaign:</strong> Add a new campaign.</li>
                    <li><strong>PUT /campaign/:id:</strong> Update an existing campaign.</li>
                    <li><strong>DELETE /campaign/:id:</strong> Delete a campaign by ID.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 text-gray-800">Donations</h3>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                    <li><strong>GET /donatedcollection:</strong> Retrieve all donation records.</li>
                    <li><strong>POST /donatedcollection:</strong> Add a new donation record.</li>
                </ul>
            </section>

            {/* Installation Guide */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-blue-600">Installation Guide</h2>
                <h3 className="text-xl font-semibold mt-4 text-gray-800">Frontend Setup</h3>
                <pre className="bg-gray-200 p-4 rounded-lg mt-3  text-sm sm:text-base overflow-x-auto">
{`# Clone the client repository
git clone https://github.com/alamin20cse/crowd-funding-client-10
cd crowd-funding-client-10
npm install
npm start`}
                </pre>

                <h3 className="text-xl font-semibold mt-4 text-gray-800">Backend Setup</h3>
                <pre className="bg-gray-200 p-4 rounded-lg mt-3  text-sm sm:text-base overflow-x-auto">
{`# Clone the server repository
git clone https://github.com/alamin20cse/crowd-funding-server-10
cd crowd-funding-server-10
npm install
npm start`}
                </pre>
            </section>

            {/* Project Links */}
            <section className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
                <h2 className="text-3xl font-bold text-blue-600">Project Links</h2>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <a href="https://crowd-funding-client-68e23.web.app/" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                        <FaMoneyBillWave className="inline-block mr-2" /> Live Demo
                    </a>
                    <a href="https://github.com/alamin20cse/crowd-funding-client-10" target="_blank" className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300">
                        <FaGithub className="inline-block mr-2" /> GitHub (Frontend)
                    </a>
                    <a href="https://github.com/alamin20cse/crowd-funding-server-10" target="_blank" className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
                        <FaGithub className="inline-block mr-2" /> GitHub (Backend)
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CrowdFunding;
