import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import DeviceCard from "../../components/DeviceCard";
import { formatDate } from "../../utils";
import API from '../../API';

const DeviceSearch = () => {
  const [search] = useOutletContext();
  const [allDevices, setAllDevices] = useState([]);
  const [devices, setDevices] = useState([
    {
      "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx1",
      "cameraCount": 8,
      "microphoneCount": 0,
      "gpsCount": 1,
      "components": [
        "cam",
        "gps",
        "mic"
      ],
      "name": "NVR-1",
      "lastUpdateTimestamp": "2023-08-03T04:57:40.901000",
      "uptimeMinutes": 36000
    }
  ]);

  useEffect(() => {
    API.devices.all().then(res => {
      setDevices(res.data.items);
      setAllDevices(res.data.items)
    });
  }, []);

  useEffect(() => {
    setDevices(allDevices.filter((device) => device.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, allDevices]);

  return <div className="px-4 xl:pl-[38px] xl:pr-11 pt-4 xl:pt-9 pb-4">
    <p className="font-semibold text-[18.246px] mb-5">Frequently Used</p>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
      {
        devices.map((device, index) => (
          <Link to={`/device/details/${device.uuid}`}
            key={index}>
            <DeviceCard
              deviceName={device.name}
              ddate={formatDate(device.lastUpdateTimestamp)[0]}
              dtime={formatDate(device.lastUpdateTimestamp)[1]}
            />
          </Link>
        ))
      }
    </div>
  </div>;
};

export default DeviceSearch;
