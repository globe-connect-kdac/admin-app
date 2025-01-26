import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'; 
import Footer from '../../Components/Footer';
// Placeholder image URL
const placeholderImage = '/mycommunity.jpg';

const Community = () => {
  // Static community list with members and images
  const [communityList, setCommunityList] = useState([
    { id: 1, name: 'Community A', description: 'This is Community A', members: ['John', 'Jane'], imageUrl: placeholderImage },
    { id: 2, name: 'Community B', description: 'This is Community B', members: ['Alice', 'Bob'], imageUrl: placeholderImage },
    { id: 3, name: 'Community C', description: 'This is Community C', members: ['Tom', 'Jerry'], imageUrl: placeholderImage },
  ]);

  // Handle showing members of a specific community
  const handleShowMembers = (id) => {
    const community = communityList.find((community) => community.id === id);
    alert(`Members of ${community.name}: ${community.members.join(', ')}`);
  };

  return (
    <div className="container">
         <Navbar /> {/* Navbar component */}
    <br></br>

      {/* Add Community Button */}
      <div className="text-center mb-4">
        <button
          className="btn btn-gradient btn-lg text-white"
          style={{
            background: 'linear-gradient(45deg,rgb(78, 114, 90),rgb(81, 143, 104))', // Gradient background
            border: 'none', // Remove border
            fontWeight: 'bold', // Bold text
            boxShadow: '0 4px 8px rgba(51, 150, 145, 0.4)', // Shadow effect
            transition: 'all 0.3s ease', // Smooth transition for hover effect
          }}
          onClick={() => alert("Add Community Modal")}
        >
          <span style={{ fontSize: '18px' }}>Create Community</span>
        </button>
      </div>

      {/* Community List */}
      <div className="row g-4 justify-content-center">
        {communityList.map((community) => (
          <div key={community.id} className="col-md-4">
            <div
              className="card shadow-lg rounded-4 overflow-hidden"
              style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
              onClick={() => handleShowMembers(community.id)}
            >
              <img
                src={community.imageUrl}
                alt={community.name}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-dark">{community.name}</h5>
                <p className="card-text text-muted" style={{ fontSize: '14px' }}>
                  {community.description}
                </p>

                <button className="btn btn-dark btn-sm w-100 rounded-3">
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Effect to Scale up on Card Hover */}
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 12px rgba(182, 175, 173, 0.6);
          }
        `}
      </style>

      <Footer />
    </div>
  );
};

export default Community;
