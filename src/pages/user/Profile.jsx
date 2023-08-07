import React, { useEffect, useState } from "react"
import API from '../../API';
import { useToggle } from "../../context/AppContext";

const Profile = () => {
    const { userData } = useToggle();
    const [userInfo, setUserInfo] = useState({});

    // getting initial data
    useEffect(() => {
        API.user.personalInfo(userData?.uuid).then(res => {
            const data = res.data;
            setUserInfo(data)
        })
    }, [userData]);

    return <div>
        <div className="flex mb-4">
            <div className="w-1/3">First Name</div>
            <div>{ userInfo?.firstname }</div>
        </div>
        <div className="flex mb-4">
            <div className="w-1/3">Last Name</div>
            <div>{ userInfo?.lastname }</div>
        </div>
        <div className="flex mb-4">
            <div className="w-1/3">Email</div>
            <input type="email" className="bg-transparent w-2/3" defaultValue={ userInfo?.email || '' } />
        </div>
    </div>
}

export default Profile;