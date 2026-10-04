import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Meghashree.V",
    mobile: "9876543210",
    aadhaar: "XXXX XXXX 1234",
    consumerNumber: "TN123456789",
    gasAgency: "Tamil Nadu Gas Agency",
    address: "12, Gandhi Street, Avadi, Chennai - 600054",
  });


  const handleChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };


  const handleSave = () => {
    setEditing(false);

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );
  };


  return (
    <div className="profile-page">

      {/* Header */}

      <header className="simple-header">

        <button
          className="back-link"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

        <h2>My Profile</h2>

        <div></div>

      </header>


      {/* Content */}

      <main className="profile-container">

        <div className="profile-card">

          {/* Profile Header */}

          <div className="profile-top">

            <div className="profile-avatar">
              A
            </div>

            <div>

              <h1>{profile.name}</h1>

              <p>
                LPG Consumer
              </p>

            </div>

          </div>


          {/* Personal Information */}

          <div className="profile-section">

            <div className="section-title">

              <h2>Personal Information</h2>

              {!editing && (
                <button
                  className="edit-button"
                  onClick={() => setEditing(true)}
                >
                  Edit
                </button>
              )}

            </div>


            {/* Name */}

            <div className="profile-field">

              <label>Full Name</label>

              {editing ? (

                <input
                  value={profile.name}
                  onChange={(e) =>
                    handleChange(
                      "name",
                      e.target.value
                    )
                  }
                />

              ) : (

                <p>{profile.name}</p>

              )}

            </div>


            {/* Mobile */}

            <div className="profile-field">

              <label>Mobile Number</label>

              <p>
                +91 {profile.mobile}
              </p>

            </div>


            {/* Aadhaar */}

            <div className="profile-field">

              <label>Aadhaar Number</label>

              <p>
                {profile.aadhaar}
              </p>

            </div>

          </div>


          {/* Gas Connection */}

          <div className="profile-section">

            <h2>Gas Connection</h2>


            <div className="profile-field">

              <label>Consumer Number</label>

              <p>
                {profile.consumerNumber}
              </p>

            </div>


            <div className="profile-field">

              <label>Gas Agency</label>

              <p>
                {profile.gasAgency}
              </p>

            </div>


            <div className="profile-field">

              <label>Delivery Address</label>

              {editing ? (

                <textarea
                  rows="3"
                  value={profile.address}
                  onChange={(e) =>
                    handleChange(
                      "address",
                      e.target.value
                    )
                  }
                />

              ) : (

                <p>
                  {profile.address}
                </p>

              )}

            </div>

          </div>


          {/* Save */}

          {editing && (

            <div className="profile-actions">

              <button
                className="cancel-button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={handleSave}
              >
                Save Changes
              </button>

            </div>

          )}


          {/* Home */}

          {!editing && (

            <button
              className="home-profile-button"
              onClick={() => navigate("/home")}
            >
              Back to Home
            </button>

          )}

        </div>

      </main>

    </div>
  );
}

export default Profile;