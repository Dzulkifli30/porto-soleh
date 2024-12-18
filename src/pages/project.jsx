import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../json/project";
import detailsProject from '../json/details';
import homeBackground from '../assets/background/home.png';
import project1 from '../assets/project/project1.png';
import backStep from '../assets/back.svg';

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));

  // Filter data sesuai project_id
  const filteredDetails = detailsProject.filter(
    (detail) => detail.project_id === parseInt(id)
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="font-[\'Secular One\', sans-serif]">
      <section id="project" className="h-screen flex items-center justify-end p-10"
        style={{ backgroundImage: `url(${homeBackground})` }}>
        <div className="w-5/6 px-10 text-[#112744] space-y-20 pb-10">
          <div className="text-center text-4xl">
            <p className="font-bold">{project.title}</p>
          </div>
          <div className="flex justify-center gap-10">
            {filteredDetails.map(detail => (
              <div 
              className="relative px-3 w-1/4 group cursor-pointer"
              onClick={() => navigate(`/project/detail/${detail.id}`)}>
                <img
                  src={detail.cover}
                  className="w-full rounded-lg h-fit"
                  alt="cihuy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black to-transparent bg-opacity-80 rounded-lg flex flex-col text-center justify-center items-center opacity-0 transform translate-y-1/4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mx-3 p-4"
                >
                  <p className="text-xl text-white">{detail.title}</p>
                  <p className="text-base pt-4 text-white">click here</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center pt-10">
            <button className="bg-[#56AAB7] p-1 px-4 rounded-sm text-sm font-bold flex items-center" onClick={() => navigate(`/`)}>
              <img src={backStep} className="h-5" alt="" />
              <p>Back</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
