import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login"
import Layout from './components/Layout.jsx';
import DeviceDetails from './pages/dashboard/Details'
import DeviceSearch from './pages/dashboard/Search'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/device" element={<Layout />}>
          <Route path="/device/details" element={<DeviceDetails />} />
          <Route path="/device/search" element={<DeviceSearch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
