import React, { useState, useEffect } from "react";
import "../index.css";
import { fetchUsers } from "../api";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    console.warn = () => {};
    console.error = () => {};
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
     
        const datax = data.slice(15, 35); 
        const formattedUsers = datax.map((user) => ({
          id: user.id,
          name: `${user.profile.firstName} ${user.profile.lastName}`,
          bio: user.Bio,
          image: user.avatar,
          jobTitle: user.jobTitle,
          email: user.profile.email ,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div style={{ marginTop: "-11%" }} className="index">
      <div className="div">
      {selectedUser && (
            <>
        <div className="right">
          <div style={{backgroundImage: `url(${selectedUser.image})`}} className="frame" />
          <div className="username">{selectedUser.name}</div>
          
              <div className="group">
                <div className="job-title-wrapper">
                  <div className="job-title">{selectedUser.jobTitle}</div>
                </div>
                <div className="text-wrapper">Job Title</div>
              </div>
              <div className="group-3">
                <div className="job-title-wrapper">
                  <div className="job-title">{selectedUser.email}</div>
                </div>
                <div className="text-wrapper">Email</div>
              </div>
              <div className="bio-wrapper">
                <p className="bio">{selectedUser.bio}</p>
              </div>
           
          <div className="user-details-heading">
            <div className="text-wrapper-2">USER DETAILS</div>
          </div>
        </div> </>
          )}
        <div className="frame-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="user-list-item my-3"
              onClick={() => handleUserSelection(user)}
            >
              <div style={{backgroundImage: `url(${user.image})`}} className="frame-3">
              
              </div>
              <div className="text-wrapper-3 my-1">{user.name}</div>
            </div>
          ))}
        </div>
        <div className="user-list-heading">
          <div className="text-wrapper-4">USERS LIST</div>
        </div>
      </div>
    </div>
  );
};
