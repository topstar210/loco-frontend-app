import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Map from "../../components/Map/Map";
import Status from "../../components/Status";
import { formatDate } from "../../utils";
import API from '../../API';

import MonitorIcon from "../../assets/images/monitor.svg";
import MicroIcon from "../../assets/images/micro.svg";
import LocationIcon from "../../assets/images/location.svg";
import CameraIcon from "../../assets/images/camera.svg";

const Details = () => {
  const { deviceId } = useParams();

  const [device, setDevice] = useState({
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx3",
    "cameraCount": 0,
    "microphoneCount": 0,
    "gpsCount": 1,
    "components": [
      "cam",
      "gps",
      "mic"
    ],
    "name": "Loco Cam 1",
    "lastUpdateTimestamp": "2023-08-03T04:57:40.901000",
    "uptimeMinutes": 36000
  });
  const [gpsPoints, setGpsPoints] = useState([]);

  // load first data
  useEffect(() => {
    async function fetchdata() {
      let id;
      if(deviceId) {
        id = deviceId;
      } else {
        const res = await API.devices.all();
        id = res.data.items[0]['uuid'];
      }
      await API.devices.show(id).then(response => {
        setDevice(response.data);
      });
      await API.devices.deviceUpdate(id).then(response => {
        const gps = response.data.items.map(item => ({
          lat: item.gps.lat,
          lng: item.gps.lon
        }))
        // console.log(gps)
        setGpsPoints(gps)
        // setGpsPoints([
        //   {lat: 55.798917, lng: 49.098306},
        //   {lat: 55.796961141764555, lng: 49.100584536767656},
        //   {lat: 55.794066168064774, lng: 49.0934605896241}
        // ]);
      });
    }
    fetchdata();
  }, [deviceId]);

  return <div className="flex flex-col xl:flex-row xl:justify-between px-4 xl:pl-[38px] xl:pr-11 pt-4 xl:pt-9 pb-4">
    <div className="shrink-0 w-full md:w-auto mr-0 lg:mr-9">
      <div className="flex mb-4 lg:mb-8">
        <div className="flex mr-3">
          <div className="flex justify-center items-center w-[51px] h-[51px] rounded-[11.6px] bg-lightdark mr-[11.6px]">
            <img src={MonitorIcon} alt="monitor" className="w-7 h-7" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-normal text-base text-lightdark-font">Device</span>
            <span className="font-semibold text-xl">{device.name}</span>
          </div>
        </div>
        <span className="flex self-end py-3 px-5 rounded-[10px] bg-lightdark font-semibold text-xs text-[#DFDFDF]">Rename</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:h-[94px] py-2 px-5 lg:px-0 mb-8 bg-lightdark rounded-[14.5px]">
        <div className="flex flex-col lg:pl-6 lg:pr-11 py-2 lg:border-r border-lightdark-border">
          <span className="font-semibold text-[13.64px] mb-[9px]">Uptime</span>
          <span className="font-semibold text-base text-transparent bg-clip-text bg-yellow-text">{Math.floor(device.uptimeMinutes / 60) === 0 ? '' : Math.floor(device.uptimeMinutes / 60) + 'H'} {device.uptimeMinutes % 60 === 0 ? '' : device.uptimeMinutes % 60}</span>
        </div>
        <div className="flex flex-col lg:pl-[33px] lg:pr-[39px] py-2 lg:border-r border-lightdark-border">
          <span className="font-semibold text-[13.64px] mb-[9px]">Last Update</span>
          <div className="flex">
            <div className="mr-[29px]">
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Date</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">{formatDate(device.lastUpdateTimestamp)[0]}</p>
            </div>
            <div>
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Time</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">{formatDate(device.lastUpdateTimestamp)[1]}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-10 lg:pr-[55px] py-2">
          <span className="font-semibold text-[13.64px] mb-[9px]">Devices</span>
          <div className="flex">
            <div className="mr-[30px]">
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">GPS</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">{ device.gpsCount??0 }</p>
            </div>
            <div className="mr-[35px]">
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Cameras</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">{ device.cameraCount??0 }</p>
            </div>
            <div>
              <p className="font-normal text-lightdark-font text-[11.41px] mb-[1px]">Microphone</p>
              <p className="font-semibold text-[14.36px] text-transparent bg-clip-text bg-yellow-text">{ device.microphoneCount??0 }</p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-semibold text-[18.246px] mb-5">Device Status</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-2 lg:gap-x-[26px]">
        <Status icon={MicroIcon} tflag={device.components.includes('mic')} title="Microphone" comment="Active for 3 hours" quality="5Kwh" />
        <Status icon={LocationIcon} tflag={device.components.includes('gps')} title="GPS" comment="Active for 3 hours" quality="5Kwh" />
        <Status icon={CameraIcon} tflag={device.components.includes('cam')} title="Cameras" comment="Active for 3 hours" quality="5Kwh" />
      </div>
    </div>
    <div className="mt-6 xl:mt-[6px] w-full p-[10px] aspect-video rounded-[18.1px] bg-lightdark lg:max-w-[709px]">
      <Map gpsPoints={gpsPoints} />
    </div>
  </div>
}

export default Details;