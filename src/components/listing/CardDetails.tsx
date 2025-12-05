import { useListingStore } from "@/store/listing.store";
import { FaRegCreditCard } from "react-icons/fa";
import "./CardDetails.scss";

const CardDetails = () => {
  const { cardData, setCardData } = useListingStore();

  return (
    <div className="card-input-wrapper">
      <FaRegCreditCard className="card-icon" />

      <input
        id="card-input"
        type="text"
        value={cardData?.number}
        placeholder="1234 5678 1234 5678"
        className="card-number"
        maxLength={16}
        onChange={(e) => setCardData("number", e.target.value)}
      />

      <input
        id="card-expiry"
        type="text"
        value={cardData?.expiry}
        placeholder="MM/YY"
        className="expiry"
        maxLength={5}
        onChange={(e) => setCardData("expiry", e.target.value)}
      />

      <input
        id="card-cvc"
        type="text"
        value={cardData?.cvc}
        placeholder="CVC"
        className="cvc"
        maxLength={4}
        onChange={(e) => setCardData("cvc", e.target.value)}
      />
    </div>
  );
};

export default CardDetails;
