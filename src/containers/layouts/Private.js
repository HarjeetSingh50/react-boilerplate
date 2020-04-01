import React from 'react';
import Nav from "../parts/Private-Nav";
import Sidebar from "../parts/Private-Sidebar";
import Footer from "../parts/Private-Footer";
import BreadCrumb from "../parts/Private-BreadCrumb";

function Private({ component: Component }) {
  return (
    <div className="sidebar-mini layout-navbar-fixed" style={{ "height": "auto" }} >
      <div className="wrapper">
        <Nav />
        <Sidebar />

        <div className="content-wrapper">
          <BreadCrumb />
          <Component />
        </div>
        <Footer />
      </div>
    </div>

  );
}

export default Private;
