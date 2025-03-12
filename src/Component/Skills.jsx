import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import reacticon from '../assets/icons8-react-js.svg';
import jsicon from '../assets/icons8-javascript.svg';
import htmlicon from '../assets/iconhtml5.svg';
import expressicon from '../assets/iconsexpress-js.svg';
import nodejsicon from '../assets/nodejs.svg';
import mongodbicon from '../assets/mongo-db-96.png';
import cicon from '../assets/c-programming.svg';
import cPlusicon from '../assets/c++.svg';
import javaicon from '../assets/java.svg';
import oopicon from '../assets/oop.jpg';

const Skills = () => {

     // Initialize AOS animations
     useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Smooth animation easing
          once: true, // Animation happens only once
        });
      }, []);




    return (
        <div id='skills' className='border-4 border-gray-300 rounded-lg shadow-lg p-6 bg-white'>

        <h1 className='text-center font-bold text-2xl pt-4'>Skills</h1>
        <div className="m-6 p-6 rounded-2xl bg-slate-100 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6">
          {/* React.js */}
          <div  data-aos="zoom-in-down" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={reacticon} alt="LinkedIn" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             React Js
            </h1>
          </div>
        
          {/* js */}
          <div data-aos="zoom-in-down" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={jsicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Java Script
            </h1>
          </div>
          {/* html */}
          <div data-aos="fade-down-right" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={htmlicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Html
            </h1>
          </div>
          {/* Node js */}
          <div data-aos="flip-left" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={nodejsicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Node.js
            </h1>
          </div>
        
           {/* express js */}
           <div data-aos="flip-up" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={expressicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Express.js
            </h1>
          </div>
           {/* Mongodb */}
           <div  data-aos="zoom-in" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={mongodbicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              MongoDB
            </h1>
          </div>
           {/* c */}
           <div data-aos="zoom-in-left" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={cicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              C Programming
            </h1>
          </div>
           {/* c++ */}
           <div data-aos="zoom-in-right" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={cPlusicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              C++
            </h1>
          </div>
           {/* Java */}
           <div data-aos="zoom-out" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={javaicon} alt="Photo" className="max-w-full h-auto mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Java
            </h1>
          </div>
           {/* Oop */}
           <div data-aos="flip-right" className="group relative transition-all duration-150 ease-in-out hover:translate-y-2">
            <img src={oopicon} alt="Photo" className="w-[96px] h-[96px] mx-auto" />
            <h1 className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Object-Oriented Programming
            </h1>
          </div>
        
        
        </div>
        
        </div>
    );
};

export default Skills;