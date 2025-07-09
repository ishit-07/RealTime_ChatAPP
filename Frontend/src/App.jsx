import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import SettingsPage from "./Pages/SettingsPage";
import ProfilePage from "./Pages/ProfilePage";
import { useAuthStore } from "./Store/useAuthStore";
import { useEffect } from "react";

const App = () => {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() =>{
    checkAuth();
  },[checkAuth])

  console.log({authUser});
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
