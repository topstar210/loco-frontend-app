import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login"
import Layout from './components/Layout.jsx';
import DeviceDetails from './pages/dashboard/Details'
import DeviceSearch from './pages/dashboard/Search'
import Profile from './pages/user/Profile'

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/device" element={<Layout />}>
          <Route path="/device/details" element={<DeviceDetails />} />
          <Route path="/device/details/:deviceId" element={<DeviceDetails />} />
          <Route path="/device/search" element={<DeviceSearch />} />
        </Route> 
        <Route path="/user/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
