import React from 'react';

function PrivateSidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link elevation-4">
        <img src="./assets/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
          style={{ "opacity": .8 }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="./assets/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <a href="/"
              className="d-block">Alexander Pierce</a>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon far fa-calendar-alt"></i>
                <p>&nbsp;Calendar
                    <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon far fa-image"></i>
                <p>&nbsp;Gallery</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default PrivateSidebar;
