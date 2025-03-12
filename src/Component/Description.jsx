
import photo1 from '../assets/alamin001.jpg';
import linkedinicon from '../assets/iconslinkedin.svg';
import githubicon from '../assets/iconsgithub.svg';
import facebookicon from '../assets/facebook.svg';


import Projects from './Projects';
import Contact from './Contact';
import { Typewriter } from 'react-simple-typewriter';

import Skills from './Skills';


const Description = () => {

   

  // const download = () => {
  //   const pdfUrl = "/cv1.pdf"; // Make sure cv1.pdf is in the public folder
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Md_Al-Amin_Hossain_CV.pdf"; // Set a meaningful file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  


  return (
    <div className="p-6 space-y-10">
      {/* Profile Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-4 border-gray-300 rounded-lg shadow-lg p-6 bg-white">
        {/* Left Side */}
        <div className="lg:order-1 order-2 lg:border-r-4">
          <section className="text-center my-12">
            <h1 className="text-5xl font-bold text-gray-900">
              Hello, I'm <br />
              <span className="text-blue-500">Md. Al-Amin Hossain</span> 👋
            </h1>




 <div className='h-[100px] pt-6'>
  {/* typewriter */}
 <span className='mt-6 text-blue-400 font-semibold  text-2xl' >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["I'm a Passionate CSE Student |", 'Frontend Developer | React | Tailwind CSS']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
 </div>





          


            <div className="flex justify-center gap-4 py-5">
              <a href="https://www.linkedin.com/in/md-al-amin-hossain-08146b355/">
                <img src={linkedinicon} alt="LinkedIn" className="w-10" />
              </a>
              <a href="https://github.com/alamin20cse">
                <img src={githubicon} alt="GitHub" className="w-10" />
              </a>
              <a href="https://www.facebook.com/md.al.amin.hossain.706026/">
                <img src={facebookicon} alt="GitHub" className="w-10" />
              </a>
            </div>
            <button  className='btn btn-primary'>Resume</button>
          </section>
        </div>

        {/* Right Side */}
        <div className="lg:order-2 order-1 flex justify-center">
          <img
            className="p-6 rounded-full lg:h-[400px] lg:w-[400px] h-[300px] w-[300px] border-4 border-gray-300"
            src={photo1}
            alt="Al-Amin"
          />
        </div>
      </section>

      {/* About Section */}
      <section id='about'  className=" border-4 border-gray-300 rounded-lg shadow-lg p-6 bg-white">
        <h1 className="text-center font-bold text-3xl text-gray-800 pb-4">
          About Me
        </h1>
        <div className="p-6 rounded-lg bg-slate-100">
          Hi!, My name is Md. Al-Amin Hossain. Currently, I am studying for a
          Bachelor of Science (B.Sc) in Engineering in Computer Science and
          Engineering (CSE) at Gopalganj Science and Technology University,
          Bangladesh. I am an expert in frontend development. My skills include
          React.js, HTML, CSS, and modern JavaScript frameworks, which help me
          create responsive, user-friendly, and visually appealing web
          applications.
        </div>
      </section>

     {/* Skills Section */}
     <Skills></Skills>


{/* Education Section */}
<section id='education' className=" border-4 border-gray-300 rounded-lg shadow-lg p-6 bg-white">
  <h1 className="text-center font-bold text-3xl text-gray-800 pb-6">
    Education
  </h1>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* BSc in Engineering */}
    <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-400">
      <h2 className="text-xl font-semibold text-blue-600">BSc in Computer Science & Engineering</h2>
      <p className="text-gray-700 mt-2">🏫 <strong>University:</strong> Gopalganj Science and Technology University (GSTU)</p>
      <p className="text-gray-700">📆 <strong>Current Year:</strong> 3rd Year, 2nd Semester</p>
      <p className="text-gray-700">📜 <strong>CGPA:</strong> 3.50</p>
    </div>

    {/* HSC */}
    <div className="bg-fuchsia-50 p-6 rounded-lg shadow-md border-l-4 border-fuchsia-400">
      <h2 className="text-xl font-semibold text-fuchsia-600">
        HSC - Higher Secondary Certificate
      </h2>
      <p className="text-gray-700 mt-2">📍 <strong>College:</strong> Santhia Govt. Degree College</p>
      <p className="text-gray-700">🏛️ <strong>Board:</strong> Rajshahi</p>
      <p className="text-gray-700">🎓 <strong>Year of Passing:</strong> 2020</p>
      <p className="text-gray-700">📜 <strong>Result:</strong> GPA 4.92</p>
    </div>

    {/* SSC */}
    <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-400">
      <h2 className="text-xl font-semibold text-red-600">
        SSC - Secondary School Certificate
      </h2>
      <p className="text-gray-700 mt-2">📍 <strong>School:</strong> Imam Hossain Academy</p>
      <p className="text-gray-700">🏛️ <strong>Board:</strong> Rajshahi</p>
      <p className="text-gray-700">🎓 <strong>Year of Passing:</strong> 2018</p>
      <p className="text-gray-700">📜 <strong>Result:</strong> GPA 5.00</p>
    </div>

  </div>
</section>

<Projects></Projects>




{/* Contact Section */}
<Contact></Contact>





     


    </div>
  );
};

export default Description;
