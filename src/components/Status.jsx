import React, { useState } from "react";

const Status = props => {
  const {icon, title, comment, quality} = props;
  const [status, setStatus] = useState(false);
  return <div className="flex flex-col justify-between h-[141.626px] px-[17.38px] pt-[17.38px] pb-[20.62px] rounded-[17.377px] bg-lightdark">
    <div className="flex justify-between">
      <img src={icon} alt="icon" className="w-[21px] h-[21px] mt-[7.36px]" />
      <div className="relative w-10 h-[20.9px] p-[4.34px] rounded-[17.4px] bg-dark-toggle" onClick={() => setStatus(!status)}>
        <div className={"absolute w-[13px] h-[13px] rounded-full bg-dark-toggle-switch transition-all " + (status ? "right-[21.66px]" : "right-[4.34px]")}></div>
      </div>
    </div>
    <div className="flex justify-between pr-[14px]">
      <div>
        <p className="font-semibold text-[15.64px] mb-[7.07px]">{title}</p>
        <p className="font-normal text-[8.689px] text-lightdark-font">{comment}</p>
      </div>
      <div>
        <p className="font-semibold text-[15.64px] mb-1">_</p>
        <p className="font-semibold text-[12.164px] text-transparent bg-clip-text bg-yellow-text">{quality}</p>
      </div>
    </div>
  </div>
}

export default Status;