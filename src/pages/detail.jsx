import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../json/project";
import detailsProject from '../json/details';
import homeBackground from '../assets/background/home.png';
import project1 from '../assets/project/project1.png';
import backStep from '../assets/back.svg';
import details1_1 from "../assets/project/details/details1_1.png";
import details1_2 from "../assets/project/details/details1_2.png";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const detail = detailsProject.find((p) => p.id === parseInt(id));

    return (
        <div className="font-[\'Secular One\', sans-serif]">
            <section id="project" className="h-screen flex items-center justify-end p-10"
                style={{ backgroundImage: `url(${homeBackground})` }}>
                <div className="w-5/6 px-10 text-[#112744] space-y-20 pb-10">
                    <div className="text-center text-5xl">
                        <p className="font-bold">{detail.title}</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative px-3 w-1/4">
                            <img
                                src={detail.cover}
                                className="w-full rounded-lg h-full"
                                alt="cihuy"
                            />
                        </div>
                        <div className="relative px-3 grid grid-cols-3 w-3/4 gap-4">
                            {detail.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${detail.title} Detail ${index + 1}`}
                                    className="w-full rounded-lg h-fit"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-[#56AAB7] p-1 px-4 rounded-sm text-base font-bold flex items-center" onClick={() => navigate(-1)}>
                            <img src={backStep} className="h-6" alt="" />
                            <p>Back</p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}