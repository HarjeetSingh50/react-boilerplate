import React from 'react';

function Public({ component: Component }) {
  return (
    <div className="layout-top-nav" style={{ height: 'auto' }}>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src="./assets/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
              <span className="brand-text font-weight-light"> AdminLTE 3</span>
            </a>

            <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse order-3" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/" className="nav-link">Home</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        <Component />
      </div>
      <footer className="main-footer">
        <strong>Copyright © 2014-2019 <a href="/">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
    </div >
  );
}

export default Public;
