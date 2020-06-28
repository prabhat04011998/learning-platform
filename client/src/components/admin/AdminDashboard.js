import React from "react";
import "../../css/AdminDashboard.css";
import Header from "../../includes/Header2";
import Footer from "../../includes/Footer";
import AdminSidebar from "./AdminSidebar";
import SubHeader from "../../includes/Subheader2";
function AdminDashboard() {
  return (
    <div>
      <Header />
      <SubHeader />
      <AdminSidebar />
      <div id="content" class="content container-fluid"></div>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
