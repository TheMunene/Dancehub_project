import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';

// Local image imports
import sample from '../assets/sample.jpg';

const TeamMembers = [
  {
    name: "James Munge ",
    description: "James Munge is an advocate of the High Court of Kenya of 19 years standing.",
    detailedInfo: "James Munge is an advocate of the High Court of Kenya of 19 years standing. She is the Executive Director of the East Africa Centre for Law and Justice, EACLJ, a position she has held for the last ten years. Previously, Ms. Mdivo was the Executive Director of The Christian Legal Education Aid and Research, CLEAR Kenya, the Legal Aid branch of the Kenya Christian Lawyers Fellowship. Prior to joining the civil society, Ms. Mdivo worked with the Kenyan Judiciary for six years starting as a District Magistrate, rising through the rank of Senior Resident Magistrate before her resignation from public service. She currently serves on several boards, including the Evangelical Alliance of Kenya, the Kenya Students Christian Fellowship and the Deliverance Church International Council. Ms. Mdivo is a member of the Law Society of Kenya, where she previously served as a Council Member of the Law Society of Kenya, Nairobi Branch. She is a member of the Kenya Christian Professional Forum, the Kenya Christian Lawyers Fellowship. She is a Bachelor of Laws graduate from the University of Nairobi and is currently undertaking a Masters of Arts in Leadership from the International Leadership.",
    image: sample,
    linkedin: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    twitter: "",
  },
  //add members with similar structure
  {
    name: "Joshua Yoga",
    description: "Joshua Yoga is an experienced lawyer and board member.",
    detailedInfo: "Detailed info about Joshua Yoga...",
    image: sample,
    linkedin: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    twitter: "",
  },
  {
    name: "Samson Gome",
    description: "Samson Gome has been a prominent figure in legal advocacy.",
    detailedInfo: "Detailed info about Samson Gome...",
    image: sample,
    linkedin: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    twitter: "",
  },
  {
    name: "Ben O. Sakwa",
    description: "Ben Sakwa is known for her work in civil rights.",
    detailedInfo: "Detailed info about Ben Sakwa...",
    image: sample,
    linkedin: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    twitter: "",
  },
  {
    name: "Joshua Othiambo",
    description: "Joshua Othiambo has a long history in corporate law.",
    detailedInfo: "Detailed info about Joshua Othiambo...",
    image: sample,
    linkedin: "",
    tiktok: "",
    instagram: "",
    youtube: "",
    twitter: "",
  },

];
//creating a sate 
const Choreographers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="w-full bg-black py-8">
      <div className='text-3xl text-white font-bold text-center'>Meet Our Choreographers</div>
      <div className="w-full container mx-auto px-4 sm:px-6 lg:px-0 py-6 flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {TeamMembers.map((member, index) => (
            <div key={index}>
              <div data-aos="zoom-out-down" id="scene" className="col-span-1 rounded-xl relative overflow-hidden min-h-[27rem] bg-top bg-cover bg-no-repeat group" style={{ backgroundImage: `url(${member.image})` }}>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black px-6 py-10 flex gap-2 flex-col">
                  <div className="text-lg font-bold text-white">{member.name}</div>
                  <div className="text-sm text-white hidden group-hover:block transition duration-200 ease-linear">
                    {member.description}
                  </div>
                  <div className="hidden group-hover:block transition duration-200 ease-linear">
                    <button onClick={() => openModal(member)} type="button" className="rounded-lg py-1.5 text-sm flex flex-row items-center gap-1 text-white">
                      View Details
                      <svg className="h-5 w-5 flex-none text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
            {/** dialogue box pop up */}
          {modalIsOpen && selectedMember && (
            <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/10 p-4 pb-8 backdrop-blur-md sm:items-center lg:p-8" role="dialog" aria-modal="true" aria-labelledby="defaultModalTitle" onClick={closeModal}>
              <div onClick={(e) => e.stopPropagation()} className="flex max-w-4xl flex-col gap-4 overflow-hidden rounded-xl border border-slate-300 bg-black text-slate-700 dark:text-slate-300 p-8">
                <div className="flex items-center justify-end bg-black ">
                  <button onClick={closeModal} aria-label="close modal" className="bg-black hover:bg-green/80 text-slate-50 rounded-full p-1 h-6 w-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" fill="none" strokeWidth="2" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full">
                    <svg className="w-6 h-6 stroke-current text-yellow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-primary ">{selectedMember.name}</div>
                  <div className="text-base font-normal text-primary">Choreographer</div>
                </div>
                <div className="mt-3 font-sans leading-6 text-sm newsarticle">
                  <p>{selectedMember.detailedInfo}</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.linkedin} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 20 20" fill="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.417.75a1.833 1.833 0 0 1 1.833 1.833v12.834a1.833 1.833 0 0 1-1.833 1.833H2.583A1.833 1.833 0 0 1 .75 15.417V2.583A1.833 1.833 0 0 1 2.583.75h12.834Zm-.459 14.208V10.1a2.988 2.988 0 0 0-2.988-2.988c-.78 0-1.687.476-2.127 1.191V7.286H7.286v7.672h2.557V10.44a1.28 1.28 0 1 1 2.558 0v4.52h2.557ZM4.307 5.847a1.54 1.54 0 0 0 1.54-1.54c0-.853-.688-1.55-1.54-1.55a1.55 1.55 0 0 0-1.55 1.55c0 .852.697 1.54 1.55 1.54Zm1.274 9.111V7.286H3.04v7.672h2.54Z" />
                    </svg>
                    LinkedIn
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.tiktok} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15.27V9.05a4.26 4.26 0 0 0 2.89 1.09v1.47a5.72 5.72 0 0 1-2.89-.8v6.46a3.26 3.26 0 1 1-3.25-3.25h.26v1.54h-.26a1.72 1.72 0 1 0 1.71 1.71Z" />
                    </svg>
                    TikTok
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.instagram} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.16c3.22 0 3.59.01 4.85.07 1.17.05 1.97.24 2.43.4.61.23 1.04.5 1.49.95.45.45.72.88.95 1.49.16.46.35 1.26.4 2.43.06 1.26.07 1.63.07 4.85s-.01 3.59-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.1 4.1 0 0 1-.95 1.49 4.1 4.1 0 0 1-1.49.95c-.46.16-1.26.35-2.43.4-1.26.06-1.63.07-4.85.07s-3.59-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.1 4.1 0 0 1-1.49-.95 4.1 4.1 0 0 1-.95-1.49c-.16-.46-.35-1.26-.4-2.43-.06-1.26-.07-1.63-.07-4.85s.01-3.59.07-4.85c.05-1.17.24-1.97.4-2.43a4.1 4.1 0 0 1 .95-1.49c.45-.45.88-.72 1.49-.95.46-.16 1.26-.35 2.43-.4C8.41 2.17 8.78 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.12 4.78.32 3.96.66 3.06 1.05 2.27 1.68 1.64 2.31 1.01 2.94.38 3.73 0 4.63.36 5.45.16 6.45.07 7.72.01 9 .01 9.42.01 12c0 2.58.01 3.01.07 4.28.09 1.27.29 2.27.66 3.09.39.9 1.02 1.69 1.65 2.32.63.63 1.42 1.26 2.32 1.65.82.37 1.82.57 3.09.66 1.27.06 1.7.07 4.28.07s3.01-.01 4.28-.07c1.27-.09 2.27-.29 3.09-.66.9-.39 1.69-1.02 2.32-1.65.63-.63 1.26-1.42 1.65-2.32.37-.82.57-1.82.66-3.09.06-1.27.07-1.7.07-4.28s-.01-3.01-.07-4.28c-.09-1.27-.29-2.27-.66-3.09a4.1 4.1 0 0 0-1.65-2.32 4.1 4.1 0 0 0-2.32-1.65c-.82-.37-1.82-.57-3.09-.66C15.01.01 14.58 0 12 0z" />
                      <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.44-10.5a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                    </svg>
                    Instagram
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={selectedMember.youtube} className="transform hover:scale-110 transition-all duration-300 rounded-lg py-1.5 text-sm flex flex-row items-center gap-1">
                    <svg className="h-5 w-5 flex-none fill-current text-primary dark:text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.49 6.68a3.06 3.06 0 0 0-2.16-2.16C19.69 4 12 4 12 4s-7.69 0-9.33.52A3.06 3.06 0 0 0 .51 6.68 31.17 31.17 0 0 0 0 12a31.17 31.17 0 0 0 .51 5.32 3.06 3.06 0 0 0 2.16 2.16C4.31 20 12 20 12 20s7.69 0 9.33-.52a3.06 3.06 0 0 0 2.16-2.16A31.17 31.17 0 0 0 24 12a31.17 31.17 0 0 0-.51-5.32Zm-14.6 8.59V8.73l6.28 3.27-6.28 3.27Z" />
                    </svg>
                    YouTube
                    <svg className="h-5 w-5 flex-none text-primary dark:text-white transform -rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Choreographers;
