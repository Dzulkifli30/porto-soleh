import React from "react";
import { useNavigate } from "react-router-dom";
// import './index.css'; // Import custom CSS for styling
import projectsData from "../json/data.json";
import logo from '../assets/logo.png';
import instagramIcon from '../assets/instagram.png';
import gmailIcon from '../assets/gmail.png';
import medalIcon from '../assets/medal.png';
import homeBackground from '../assets/background/home.png';
import aboutBackground from '../assets/background/about.png';
import homeImage from '../assets/images/home_image.png';
import aboutImage from '../assets/images/about_image.png';
import phoneIcon from '../assets/phone.svg';
import homeIcon from '../assets/home.svg';
import emailIcon from '../assets/email.svg';

export default function Home() {
  const navigate = useNavigate();
  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-[\'Secular One\', sans-serif]">
      {/* Navbar */}
      <nav id="navbar" className="w-full bg-[#56AAB7]/80 flex justify-between items-center px-10 py-4 fixed z-50">
        <div className="text-white">
          <img src={logo} className="h-6" alt="Logo" />
        </div>
        <div className="flex gap-12 text-lg font-bold text-[#112744]">
          {['home', 'about', 'project', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="hover:text-black" onClick={scrollToSection}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="h-screen flex items-center" style={{ backgroundImage: `url(${homeBackground})` }}>
        <div className="flex justify-end items-center px-16">
          <img src={homeImage} className="max-w-screen-sm w-1/2 h-fit" alt="Home" />
          <div className="text-[#112744] w-5/12 pb-20">
            <h5 className="text-4xl">Hello,</h5>
            <h2 className="text-7xl">I'm Soleh</h2>
            <h5 className="text-4xl leading-[3.5rem]">Welcome to My Creative Space! Explore My Work and Get to Know Me</h5>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center bg-[#56AAB7]">
        <div className="flex justify-center items-center p-10 gap-16">
          <div className="w-1/3">
            <img src={aboutImage} className="max-w-screen-sm w-full" alt="About" />
            <div className="flex justify-center gap-6 pt-5">
              <div className="flex items-center gap-3">
                <img src={instagramIcon} alt="Instagram" />
                <a href="#" target="_blank" rel="noopener noreferrer">mdsphotograpy</a>
              </div>
              <div className="flex items-center gap-3">
                <img src={gmailIcon} alt="Gmail" />
                <a href="mailto:mhdsoleh106@gmail.com" target="_blank" rel="noopener noreferrer">mdsphotograpy</a>
              </div>
            </div>
          </div>
          <div className="text-[#112744] w-1/2">
            <div className="w-1/2 pb-6">
              <h2 className="text-7xl">About Me</h2>
              <hr className="border-[#445585] border-2 mx-auto" />
            </div>
            <h5 className="text-xl leading-[2rem] pb-10">
              I'm a passionate photographer with a keen eye for capturing the essence of a moment.
              My journey into the world of photography began as a hobby, fueled by a desire to preserve memories and share them with others.
            </h5>
            <h6 className="text-2xl">Achievement</h6>
            {[1, 2].map((_, i) => (
              <div key={i} className="flex items-center pt-6 gap-4">
                <img src={medalIcon} className="h-12" alt="Medal" />
                <p className="text-xl">2nd place winner in the national level IRRC Competition photography competition - 2019</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="h-screen flex items-center justify-end"
        style={{ backgroundImage: `url(${homeBackground})` }}>
        <div className="w-5/6 px-10 text-[#112744]">
          <div className="text-center text-7xl pb-24">
            <p>Photo Project</p>
          </div>
          <div className="flex justify-around">
            {projectsData.map(project => (
              <div 
                key={project.id} 
                className="relative px-3 w-1/4 group cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}>
                <img
                  src={project.image}
                  className="w-full rounded-lg h-fit"
                  alt={project.title}
                />
                <div
                  className="absolute inset-0 top-20 bg-gradient-to-b from-[#56AAB7] to-transparent bg-opacity-80 rounded-lg text-center opacity-0 transform translate-y-1/3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mx-3 p-4"
                >
                  <p className="text-xl text-white pt-10">{project.title}</p>
                  <p className="text-base pt-4 text-white">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-full bg-[#56AAB7]">
        <div className="relative h-5/12 text-white">
          <img src={aboutBackground} className="h-full w-full object-cover" alt="" />
          <div className="absolute inset-0 text-center flex flex-col items-center justify-center">
            <h2 className="text-[#112744] text-7xl">Contact Us</h2>
            <p className="text-lg pb-4">......</p>
            <p className="text-lg w-5/12">Have questions about our products or services? Our team is always ready to
              help!
              Contact us via the contacts provided, and we will try to give you the best answer.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6">
            <div className="flex items-center gap-3">
              <img src={instagramIcon} alt="" />
              <a href="#" target="_blank" rel="noopener noreferrer">mdsphotograpy</a>
            </div>
            <div className="flex items-center gap-3">
              <img src={gmailIcon} alt="" />
              <a href="mhdsoleh106@gmail.com" target="_blank" rel="noopener noreferrer">mdsphotograpy</a>
            </div>
          </div>
        </div>
        <div className="py-10 flex justify-center w-full">
          <div className="flex justify-center items-start w-1/2 gap-8">
            <div className="text-center w-1/3">
              <img src={homeIcon} className="h-20 mx-auto" alt="" />
              <div className="text-white">
                <p className="text-lg">Visit Us</p>
                <p>Visit us for direct service.
                  <br />Our address :
                </p>
              </div>
              <div className="pt-2">
                <p>Jl. Manukan Wetan <br /> Tandes District, Surabaya City.</p>
              </div>
            </div>
            <div className="mt-6 rounded-full transform -translate-x-1/2 border-2 h-2/3 border-[#112744]/50"></div>
            <div className="text-center w-1/3">
              <img src={phoneIcon} className="h-20 mx-auto" alt="" />
              <div className="text-white">
                <p className="text-lg">Call Us</p>
                <p>For further information or immediate assistance, you can contact us at the following numbers:
                </p>
              </div>
              <div>
                <p>+62 812-9049-8734</p>
              </div>
            </div>
            <div className="mt-6 rounded-full transform -translate-x-1/2 border-2 h-2/3 border-[#112744]/50"></div>
            <div className="text-center w-1/3">
              <img src={emailIcon} className="h-20 mx-auto" alt="" />
              <div className="text-white">
                <p className="text-lg">Contact Us</p>
                <p>We can also be contacted
                  via email. Please send your questions
                  or needs to:</p>
              </div>
              <div>
                <p>mhdsoleh106@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs font-normal tracking-wide">
          <p>coded by Dzulkifli30</p>
        </div>
      </section>
    </div>
  );
}
