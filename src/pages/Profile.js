import Layout from "../Layout/Layout";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";
const Profile = () => {
  return (
    <Layout>
      <div className=" profile">
        <div className="responsive">
          <h3>this is profile page</h3>
          <SideBar />
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="downloads" element={<Downloads />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
