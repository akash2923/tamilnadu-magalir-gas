import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const booking = JSON.parse(
    localStorage.getItem("bookingDetails")
  );

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [processing, setProcessing] = useState(false);

  const amount = booking?.amount || 850;
  const quantity = booking?.quantity || 1;

  const handlePayment = () => {
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      localStorage.setItem(
        "paymentDetails",
        JSON.stringify({
          paymentMethod,
          amount,
          status: "Successful",
        })
      );

      navigate("/thank-you");
    }, 1000);
  };

  return (
    <div className="payment-page">

      {/* Header */}
      <header className="simple-header">

        <button
          className="back-link"
          onClick={() => navigate("/booking")}
        >
          ← Back
        </button>

        <h2>Payment</h2>

        <div></div>

      </header>


      {/* Content */}
      <main className="payment-container">

        <div className="payment-box">

          <h1>Make Payment</h1>

          <p className="payment-subtitle">
            Choose your preferred payment method.
          </p>


          {/* Amount */}
          <div className="amount-card">

            <span>Total Amount</span>

            <strong>
              ₹{amount}
            </strong>

            <small>
              {quantity} LPG Cylinder
              {quantity > 1 ? "s" : ""}
            </small>

          </div>


          {/* Payment Methods */}
          <div className="payment-section">

            <label>Payment Method</label>


            {/* UPI */}
            <div
              className={`payment-option ${
                paymentMethod === "upi"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setPaymentMethod("upi")}
            >

              <div className="payment-icon">
                📱
              </div>

              <div>
                <strong>UPI</strong>

                <p>Google Pay, PhonePe, Paytm</p>
              </div>

              <input
                type="radio"
                checked={paymentMethod === "upi"}
                onChange={() => setPaymentMethod("upi")}
              />

            </div>


            {/* Card */}
            <div
              className={`payment-option ${
                paymentMethod === "card"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setPaymentMethod("card")}
            >

              <div className="payment-icon">
                💳
              </div>

              <div>
                <strong>Debit / Credit Card</strong>

                <p>Visa, Mastercard, RuPay</p>
              </div>

              <input
                type="radio"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />

            </div>


            {/* Cash */}
            <div
              className={`payment-option ${
                paymentMethod === "cash"
                  ? "selected"
                  : ""
              }`}
              onClick={() => setPaymentMethod("cash")}
            >

              <div className="payment-icon">
                💵
              </div>

              <div>
                <strong>Cash on Delivery</strong>

                <p>Pay when cylinder is delivered</p>
              </div>

              <input
                type="radio"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />

            </div>

          </div>


          {/* Pay Button */}
          <button
            className="primary-button"
            onClick={handlePayment}
            disabled={processing}
          >

            {processing
              ? "Processing..."
              : paymentMethod === "cash"
              ? "Confirm Booking"
              : `Pay ₹${amount}`}

          </button>


          <p className="demo-payment">
            🔒 Demo payment — no real money will be charged.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Payment;