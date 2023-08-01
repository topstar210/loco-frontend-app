import React from "react";
import DeviceCard from "../../components/DeviceCard";

const DeviceSearch = () => {
  return <div className="px-4 xl:pl-[38px] xl:pr-11 pt-4 xl:pt-9 pb-4">
    <p className="font-semibold text-[18.246px] mb-5">Frequently Used</p>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
      <DeviceCard
        deviceName="Loco Cam 1"
        ddate="19 July, 2023"
        dtime="16:43 PM IST"
      />
      <DeviceCard
        deviceName="Loco Cam 2"
        ddate="19 July, 2023"
        dtime="16:43 PM IST"
      />
      <DeviceCard
        deviceName="Loco Cam 3"
        ddate="19 July, 2023"
        dtime="16:43 PM IST"
      />
      <DeviceCard
        deviceName="Loco Cam 4"
        ddate="19 July, 2023"
        dtime="16:43 PM IST"
      />
      <DeviceCard
        deviceName="Loco Cam 5"
        ddate="19 July, 2023"
        dtime="16:43 PM IST"
      />
    </div>
  </div>;
};

export default DeviceSearch;
