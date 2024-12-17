import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../json/project";
import detailsProject from '../json/details';
import homeBackground from '../assets/background/home.png';
import project1 from '../assets/project/project1.png';
import backStep from '../assets/back.svg';
import details1_1 from "../assets/project/details/details1_1.png";

export default function Detail() {
    const navigate = useNavigate();

    return (
        <div className="font-[\'Secular One\', sans-serif]">
            <section id="project" className="h-screen flex items-center justify-end p-10"
                style={{ backgroundImage: `url(${homeBackground})` }}>
                <div className="w-5/6 px-10 text-[#112744] space-y-20 pb-10">
                    <div className="text-center text-5xl">
                        <p className="font-bold">test</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative px-3 w-1/4">
                            <img
                                src={project1}
                                className="w-full rounded-lg h-full"
                                alt="cihuy"
                            />  
                        </div>
                        <div className="relative px-3 grid grid-cols-3 w-3/4 gap-4">
                            <img src={details1_1} alt="detail1-1" className="w-full rounded-lg h-fit"/>
                            <img src={details1_1} alt="detail1-1" className="w-full rounded-lg h-fit"/>
                            <img src={details1_1} alt="detail1-1" className="w-full rounded-lg h-fit"/>
                            <img src={details1_1} alt="detail1-1" className="w-full rounded-lg h-fit"/>
                            <img src={details1_1} alt="detail1-1" className="w-full rounded-lg h-fit"/>
                            <img src={details1_1} alt="detail1-1" className="w-full rounded-lg h-fit"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-[#56AAB7] p-1 px-4 rounded-sm text-base font-bold flex items-center" onClick={() => navigate(`/`)}>
                            <img src={backStep} className="h-6" alt="" />
                            <p>Back</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}