import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Header */}
      <header className="home-header">

        <div>
          <h2>Magalir Gas</h2>
          <p>Tamil Nadu LPG Services</p>
        </div>

        <button
          className="profile-button"
          onClick={() => navigate("/profile")}
        >
          👤 Profile
        </button>

      </header>


      {/* Main Content */}
      <main className="home-content">

        {/* Welcome */}
        <section className="welcome-section">

          <h1>Welcome, Meghashree.V 👋</h1>

          <p>
            Manage your LPG connection and book your gas cylinder easily.
          </p>

        </section>


        {/* Gas Status */}
        <section className="gas-card">

          <div>

            <p className="card-label">
              LPG Connection
            </p>

            <h2>HP Gas</h2>

            <p>
              Consumer No: <strong>TN123456789</strong>
            </p>

          </div>


          <div className="status-badge">
            Active
          </div>

        </section>


        {/* Booking */}
        <section className="booking-card">

          <div>

            <h2>Book Your Gas Cylinder</h2>

            <p>
              Your next LPG cylinder can be booked now.
            </p>

          </div>


          <button
            className="primary-button"
            onClick={() => navigate("/booking")}
          >
            Book Cylinder
          </button>

        </section>


        {/* Quick Information */}
        <section className="info-grid">

          <div className="info-card">

            <span>📦</span>

            <h3>Last Booking</h3>

            <p>15 Sep 2026</p>

          </div>


          <div className="info-card">

            <span>🚚</span>

            <h3>Delivery Status</h3>

            <p>Delivered</p>

          </div>


          <div className="info-card">

            <span>💳</span>

            <h3>Last Payment</h3>

            <p>₹850</p>

          </div>

        </section>


        {/* Recent Booking */}

        <section className="recent-card">

          <h2>Recent Booking</h2>

          <div className="booking-row">

            <div>

              <strong>Domestic LPG Cylinder</strong>

              <p>Booking ID: MG20260915001</p>

            </div>

            <span className="delivered">
              Delivered
            </span>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;