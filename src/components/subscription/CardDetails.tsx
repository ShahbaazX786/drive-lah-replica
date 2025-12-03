import { FaRegCreditCard } from "react-icons/fa";
import "./CardDetails.scss";

const CardDetails = () => {
  return (
    <div className="card-input-wrapper">
      <FaRegCreditCard className="card-icon" />

      <input
        id="card-input"
        type="text"
        placeholder="1234 5678 1234 5678"
        className="card-number"
        maxLength={19}
      />

      <input
        id="card-expiry"
        type="text"
        placeholder="MM/YY"
        className="expiry"
        maxLength={5}
      />

      <input
        id="card-cvc"
        type="text"
        placeholder="CVC"
        className="cvc"
        maxLength={4}
      />
    </div>
  );
};

export default CardDetails;
