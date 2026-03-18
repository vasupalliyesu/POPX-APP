import React, { useEffect, useState } from "react";
import "../styles/Account.css";

function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  return (
    <div className="account-container">
      <div className="account-box">
        <h3>Account Settings</h3>

        <div className="profile-section">
          
          {/* Image + Camera Icon */}
          <div className="profile-img-wrapper">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-img"
            />

            {/* Bootstrap Camera Icon */}
            <div className="camera-icon">
              <i className="bi bi-camera-fill"></i>
            </div>
          </div>

          <div className="profile-info">
            <h4>{user?.name || "Marry Doe"}</h4>
            <p>{user?.email || "Marry6@mail.com"}</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Account;