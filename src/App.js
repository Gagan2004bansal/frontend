import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Wrong from "./Components/Wrong";
import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login";
import Message from "./Components/Message"
import Blog from "./Components/Blog";
import Explore from "./Components/Explore";
import Bookmark from "./Components/Bookmark";
import Profile from "./Components/Profile";
import Dashboard from "./DashFolder/Dashboard"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Premiumpage from "./Components/Premiumpage";
import News from "./Components/News";
import EditProfile from "./Components/EditProfile";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/premium" element={<Premiumpage />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Wrong />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
