import { useRef } from "react";
import Profile from "../pages/user/Profile";
import CloseIcon from "../assets/images/close.jpg";

const Modal = ({ setOpenModal }) => {
    const modalRef = useRef(null);

    return (
        <div className="fixed top-0 left-0 w-full z-50 h-screen flex items-center justify-center px-5 bg-[#000000e0]">
            <div ref={modalRef} className="w-[470px] text-white px-10 py-5 bg-maindark rounded-lg">
                <div className="flex justify-between w-full mb-5">
                    <div className="text-[22px] font-[groupe]">My profile</div>
                    <button
                        onClick={() => setOpenModal(false)}
                        className="w-6"
                    >
                        <img src={CloseIcon} width={16} alt="" />
                    </button>
                </div>
                <div>
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Modal;