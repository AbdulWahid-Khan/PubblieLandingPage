import React from "react";
import reddivpic from "./../../assets/images/redlinediv.svg";
import greedivpic from "./../../assets/images/greendivpic.svg";
import video1 from "./../../assets/videos/video1.mp4";
import video2 from "./../../assets/videos/video2.mp4";
import video3 from "./../../assets/videos/video3.mp4";
import video4 from "./../../assets/videos/video4.mp4";
import video5 from "./../../assets/videos/video5.mp4";
import video6 from "./../../assets/videos/video6.mp4";
import doticon from "./../../assets/images/doticon.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import star from "./../../assets/images/star.svg";

const Carddetails = () => {
  const Carddata = [
    {
      id: 1,
      img: video1,
      title: "Andrew Tate",
      text: "“Track performance & refine campaigns with analytics”",
    },
    {
      id: 2,
      img: video2,
      title: "Jimmy Johns",
      text: "“Track performance & refine campaigns with analytics”",
    },
    {
      id: 3,
      img: video3,
      title: "Palo Tate",
      text: "“Track performance & refine campaigns with analytics”",
    },
    {
      id: 4,
      img: video4,
      title: "Roma Peol",
      text: "“Track performance & refine campaigns with analytics”",
    },
    {
      id: 5,
      img: video5,
      title: "Salena Gomiz",
      text: "“Track performance & refine campaigns with analytics”",
    },
    {
      id: 6,
      img: video6,
      title: "Marques Loffy",
      text: "“Track performance & refine campaigns with analytics”",
    },
  ];

  return (
    <>
      <div className="main pb-4">
        <div className="w-full max-w-5xl mx-auto text-center">
          <p className="font-bold font-inter text-lg text-black mb-2">
            What Our Users Say
          </p>
          <p className="font-bold font-inter text-[32px] text-black">
            See How PUBBLI Transforms Campaigns
          </p>
        </div>
        <div className="red pl-[377px] pt-[80px]">
          <img src={reddivpic} alt="" />
        </div>
        <div className="cards flex p-3 gap-4 mt.5">
          {Carddata.map((item) => (
            <div className="card w-[220px] h-[292px]  felx flex-col p-1  mx-auto ">
              <div className="w-[210px] h-[150px] rounded-t-[20px] overflow-hidden">
                <video
                  src={item.img}
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className="content flex flex-col pt-3 gap-2">
                <p className="font-bold font-inter text-base text-black">
                  {item.title}
                </p>
                <div className="images flex gap-1">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <p className="text-sm font-inter text-black">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="red max-w-[1500px] w-full flex justify-end">
          <img src={greedivpic} alt="" />
        </div>

        <div className="bottomteext">
          <p className="text-base font-inter w-[666px] text-center mx-auto">
            Join thousands of satisfied users revolutionizing their campaigns
            with PUBBLI, the platform for seamless collaboration and measurable
            success.
          </p>
          <div className="buut group flex items-center border border-Primary rounded-full w-[280px] pl-4 mx-auto mt-7 hover:bg-Navyblue transition duration-800">
            <img src={doticon} alt="" className="w-4 h-4 group-hover:hidden " />
            <button className="flex items-center py-5 justify-center mx-auto gap-2">
              <p className="text-base font-medium font-inter text-Navyblue group-hover:text-white">
                Join Us Now
              </p>
              <FaArrowRightLong className="hidden text-white group-hover:block  " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carddetails;
