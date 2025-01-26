import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">Admin Panel</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
Topbar >
  <div className="dashboard-content">
    <div className="container">
      <h2>Welcome to the Admin Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">150</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Active Sessions</h5>
              <p className="card-text">42</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Reports</h5>
              <p className="card-text">10 new reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
