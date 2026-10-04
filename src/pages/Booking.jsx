import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState(
    "12, Gandhi Street, Avadi, Chennai - 600054"
  );

  const handleContinue = () => {
    localStorage.setItem(
      "bookingDetails",
      JSON.stringify({
        quantity,
        deliveryAddress,
        amount: quantity * 850,
      })
    );

    navigate("/payment");
  };

  return (
    <div className="booking-page">

      {/* Header */}
      <header className="simple-header">

        <button
          className="back-link"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

        <h2>Book Gas Cylinder</h2>

        <div></div>

      </header>


      {/* Content */}
      <main className="booking-container">

        <div className="booking-box">

          <h1>Book LPG Cylinder</h1>

          <p className="booking-subtitle">
            Enter your booking details below.
          </p>


          {/* Cylinder */}
          <div className="booking-section">

            <label>Gas Cylinder</label>

            <div className="cylinder-option">

              <div className="cylinder-icon">
                🔥
              </div>

              <div>
                <strong>Domestic LPG Cylinder</strong>

                <p>14.2 Kg</p>
              </div>

            </div>

          </div>


          {/* Quantity */}
          <div className="booking-section">

            <label>Quantity</label>

            <div className="quantity-control">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(Math.min(2, quantity + 1))
                }
              >
                +
              </button>

            </div>

          </div>


          {/* Address */}
          <div className="booking-section">

            <label>Delivery Address</label>

            <textarea
              value={deliveryAddress}
              onChange={(e) =>
                setDeliveryAddress(e.target.value)
              }
              rows="4"
            />

          </div>


          {/* Price */}
          <div className="price-summary">

            <div>
              <span>Cylinder Price</span>
              <strong>₹850</strong>
            </div>

            <div>
              <span>Quantity</span>
              <strong>{quantity}</strong>
            </div>

            <div className="total-row">
              <span>Total Amount</span>

              <strong>
                ₹{quantity * 850}
              </strong>
            </div>

          </div>


          {/* Continue */}
          <button
            className="primary-button"
            onClick={handleContinue}
          >
            Continue to Payment
          </button>

        </div>

      </main>

    </div>
  );
}

export default Booking;