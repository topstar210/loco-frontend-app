import React, {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useToggle } from "../context/AppContext";

import SearchIcon from "../assets/images/search.svg";
import HelpIcon from "../assets/images/help.svg";
import NotificationIcon from "../assets/images/notification.svg";
import ArrowDownIcon from "../assets/images/arrow-down.svg";
import Avatar from "../assets/images/Avatar.png";
import Menu from "../assets/images/menu.png";

const Header = props => {
  const navigate = useNavigate();
  const dropWrapperRef = useRef();
  const { userData } = useToggle();
  const {toggleSidebar, search, handleChangeSearch} = props;
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // logout func
  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    navigate('/');
  }

  // For outside clicking of dropdown menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropWrapperRef.current && !dropWrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropWrapperRef]);
  
	return <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full h-auto lg:h-[100px] px-4 py-4 lg:py-0 lg:pl-[38px] lg:pr-12">
    <div className="flex items-center">
      <span className="hidden md:flex font-semibold text-[28px] mr-10">Welcome { userData.firstname }</span>
      <div className="flex items-center px-[15px] w-[346px] h-10 rounded-[10px] bg-lightdark">
        <img src={SearchIcon} alt="search" className="w-[18px] h-[18px] opacity-30 mr-[7px]" />
        <input type="text" className="w-full h-[18px] bg-transparent outline-none font-normal text-xs placeholder:text-lightdark-font" placeholder="Search Devices" value={search} onChange={e => handleChangeSearch(e.target.value)} />
      </div>
    </div>
    <div className="flex w-full justify-between md:w-auto items-center mb-2 md:mb-0">
      <img src={Menu} alt="menu" className="flex md:hidden w-10 h-10 invert" onClick={() => toggleSidebar()} />
      <div className="flex">
        <div className="flex justify-center items-center w-10 h-10 rounded-[10px] bg-lightdark mr-[15px]">
          <img src={HelpIcon} alt="help" className="w-6 h-6" />
        </div>
        <div className="flex justify-center items-center w-10 h-10 rounded-[10px] bg-lightdark mr-[15px] md:mr-[46px]">
          <img src={NotificationIcon} alt="help" className="w-6 h-6" />
        </div>
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={()=> setOpen(!open)}>
            <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-[50px] mr-4" />
            <span className="font-semibold text-sm mr-[13px]">{ userData.firstname }</span>
            <img src={ArrowDownIcon} alt="arrow" className="w-6 h-6" />
          </div>
          {
            open
              ? <div ref={dropWrapperRef} className="absolute w-32 mt-4 bg-lightdark rounded-[10px] border border-black">
                <p className="p-2 text-center cursor-pointer border-y border-black" onClick={()=>setOpenModal(true)}>Profile</p>
                <p className="p-2 text-center cursor-pointer" onClick={handleLogOut}>Logout</p>
              </div>
              : ''
          }
        </div>
      </div>
    </div>
    {
      openModal && <Modal setOpenModal={setOpenModal} />
    }
	</div>
}

export default Header;