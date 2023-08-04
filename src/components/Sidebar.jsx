import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import DetailIcon from "../assets/images/details.svg";
import SearchIcon from "../assets/images/search.svg";
import SettingIcon from "../assets/images/setting.svg";
import ActiveTabIcon from "../assets/images/active-tab.svg";
import ProvectusLogo from "../assets/images/provectus_logo.svg";

const Sidebar = props => {
  const navigate = useNavigate();
  const { open, toggleSidebar } = props;
  const { pathname } = useLocation();
  const items = [
    {
      title: "Device Details",
      href: "/device/details",
      icon: DetailIcon,
    },
    {
      title: "Device Search",
      href: "/device/search",
      icon: SearchIcon,
    },
    {
      title: "Setting",
      href: "/setting",
      icon: SettingIcon,
    }
  ];

  return <div className={(open ? "flex" : "hidden") + " absolute md:relative z-10 md:flex flex-col w-[251px] h-screen pb-16 bg-maindark"}>
    {/* <img
      src={Logo}
      alt="logo"
      className="w-[79px] h-[76px] mt-7 ml-[38px] mb-[15px]"
    /> */}
    <div className="relative flex flex-col justify-between w-full h-full">
      <ul className="font-semibold text-sm">
        {items.map((item, index) => (
          <li key={index} className="relative flex py-5">
            {
              pathname == item.href ? <img src={ActiveTabIcon} alt="active-tab" className="absolute w-[7px] h-8 top-1/2 -translate-y-1/2" /> : ''
            }
            <Link to={item.href} className="flex items-center ml-10" onClick={() => toggleSidebar()}>
              <img src={item.icon} alt="" className={"w-6 h-6 mr-5" + (pathname.indexOf(item.href) === -1 ? ' opacity-30' : '')} />
              <span className={(pathname.indexOf(item.href) === -1 ? ' opacity-30' : '')}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <img src={ProvectusLogo} alt="ProvectusLogo" className="w-[138px] h-16 ml-10" />
    </div>
  </div>
};

export default Sidebar;
