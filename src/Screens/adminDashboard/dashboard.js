import React from 'react';
import Navbar from '../../Components/Navbar'; 
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaUsersCog, FaClipboard, FaClipboardList } from 'react-icons/fa'; // Using FontAwesome icons

const Dashboard = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to other pages

  // Handle button click to navigate to the communities page
  const handleSeeCommunities = () => {
    navigate('/community');
  };

  return (
    <div>
      <Navbar /> {/* Navbar component */}
      
      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="container mt-5">
          <h2 className="mb-4 text-center">Welcome to the Admin Dashboard</h2>
          
          <div className="row g-4">
            {/* Total Users Card */}
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaUsers size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Total Users</h5>
                  <p className="card-text fs-4">150</p>
                  <button className="btn btn-primary w-100 mt-3">View Users</button>
                </div>
              </div>
            </div>

            {/* Communities Card */}
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaUsersCog size={40} className="text-success mb-3" />
                  <h5 className="card-title">Communities</h5>
                  <p className="card-text fs-4">42</p>
                  {/* Button to navigate to the Communities page */}
                  <button className="btn btn-success w-100 mt-3" onClick={handleSeeCommunities}>
                    View Communities
                  </button>
                </div>
              </div>
            </div>

            {/* Reports Card */}
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaClipboard size={40} className="text-warning mb-3" />
                  <h5 className="card-title">Reports</h5>
                  <p className="card-text fs-4">10 new reports</p>
                  <button className="btn btn-warning w-100 mt-3">View Reports</button>
                </div>
              </div>
            </div>

            {/* Posts Card */}
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaClipboardList size={40} className="text-info mb-3" />
                  <h5 className="card-title">Posts</h5>
                  <p className="card-text fs-4">500</p>
                  <button className="btn btn-info w-100 mt-3">View Posts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect to Scale up on Card Hover */}
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .btn:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <Footer />
    </div>


  );
};

export default Dashboard;
