import React from "react";
import Status from "../../components/Status";
import MonitorIcon from "../../assets/images/monitor.svg";
import MicroIcon from "../../assets/images/micro.svg";
import LocationIcon from "../../assets/images/location.svg";
import CameraIcon from "../../assets/images/camera.svg";

import { Map } from '@googlemaps/react-wrapper'

const Details = () => {
  return <div className="flex flex-col xl:flex-row xl:justify-between px-4 xl:pl-[38px] xl:pr-11 pt-4 xl:pt-9 pb-4">
    <div className="shrink-0 w-full xl:w-[709px] mr-9">
      <div className="flex mb-4 lg:mb-8">
        <div className="flex mr-3">
          <div className="flex justify-center items-center w-[51px] h-[51px] rounded-[11.6px] bg-lightdark mr-[11.6px]">
            <img src={MonitorIcon} alt="monitor" className="w-7 h-7" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-normal text-base text-lightdark-font">Device</span>
            <span className="font-semibold text-xl">Loco Can 1</span>
          </div>
        </div>
        <span className="flex self-end py-3 px-5 rounded-[10px] bg-lightdark font-semibold text-xs text-[#DFDFDF]">Rename</span>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:h-[94px] py-2 px-5 lg:px-0 mb-8 bg-lightdark rounded-[14.5px]">
        <div className="flex flex-col lg:pl-6 lg:pr-11 py-2 lg:border-r border-lightdark-border">
          <span className="font-semibold text-[13.64px] mb-[9px]">Uptime</span>
          <span className="font-semibold text-base text-transparent bg-clip-text bg-yellow-text">4H 20M</span>
        </div>
        <div className="flex flex-col lg:pl-[33px] lg:pr-[39px] py-2 lg:border-r border-lightdark-border">
          <span className="font-semibold text-[13.64px] mb-[9px]">Last Update</span>
          <div className="flex">
            <div className="mr-[29px]">
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Date</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">19 July, 2023</p>
            </div>
            <div>
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Time</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">16:43 PM IST</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-10 lg:pr-[55px] py-2">
          <span className="font-semibold text-[13.64px] mb-[9px]">Number of Active Devices</span>
          <div className="flex">
            <div className="mr-[30px]">
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">GPS</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">01</p>
            </div>
            <div className="mr-[35px]">
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Cameras</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">08</p>
            </div>
            <div>
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Microphone</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">03</p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-semibold text-[18.246px] mb-5">Device Status</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-x-[26px]">
        <Status icon={MicroIcon} title="Microphone" comment="Active for 3 hours" quality="5Kwh" />
        <Status icon={LocationIcon} title="GPS" comment="Active for 3 hours" quality="5Kwh" />
        <Status icon={CameraIcon} title="Cameras" comment="Active for 3 hours" quality="5Kwh" />
      </div>
    </div>
    <div className="mt-6 xl:mt-[6px] w-full p-[10px] aspect-video rounded-[18.1px] bg-lightdark lg:max-w-[709px]">
      {/* <Map apiKey="Your_Api_key" /> */}
    </div>
  </div>
}

export default Details;