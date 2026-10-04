import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  const booking = JSON.parse(
    localStorage.getItem("bookingDetails")
  );

  const payment = JSON.parse(
    localStorage.getItem("paymentDetails")
  );

  const bookingId =
    "MG" + Math.floor(10000000 + Math.random() * 90000000);

  const paymentMethod =
    payment?.paymentMethod === "upi"
      ? "UPI"
      : payment?.paymentMethod === "card"
      ? "Debit / Credit Card"
      : "Cash on Delivery";

  const amount = booking?.amount || 850;

  const quantity = booking?.quantity || 1;

  const address =
    booking?.deliveryAddress ||
    "12, Gandhi Street, Avadi, Chennai - 600054";


  const handleHome = () => {
    navigate("/home");
  };


  return (
    <div className="thankyou-page">

      <div className="thankyou-card">

        {/* Success Icon */}

        <div className="success-icon">
          ✓
        </div>


        <h1>Thank You!</h1>

        <p className="success-message">
          Your gas cylinder booking has been confirmed.
        </p>


        {/* Booking ID */}

        <div className="booking-id">

          <span>Booking ID</span>

          <strong>{bookingId}</strong>

        </div>


        {/* Details */}

        <div className="confirmation-details">

          <div className="detail-row">

            <span>Gas Cylinder</span>

            <strong>
              Domestic LPG
            </strong>

          </div>


          <div className="detail-row">

            <span>Quantity</span>

            <strong>
              {quantity}
            </strong>

          </div>


          <div className="detail-row">

            <span>Amount</span>

            <strong>
              ₹{amount}
            </strong>

          </div>


          <div className="detail-row">

            <span>Payment</span>

            <strong>
              {paymentMethod}
            </strong>

          </div>


          <div className="detail-row address-row">

            <span>Delivery Address</span>

            <strong>
              {address}
            </strong>

          </div>

        </div>


        {/* Delivery */}

        <div className="delivery-message">

          🚚

          <div>

            <strong>
              Expected Delivery
            </strong>

            <p>
              Within 2–3 working days
            </p>

          </div>

        </div>


        {/* Button */}

        <button
          className="primary-button"
          onClick={handleHome}
        >
          Back to Home
        </button>


        <p className="confirmation-note">
          A confirmation message will be sent to your
          registered mobile number.
        </p>

      </div>

    </div>
  );
}

export default ThankYou;