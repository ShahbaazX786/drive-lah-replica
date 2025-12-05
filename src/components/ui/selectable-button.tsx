import "./selectable-button.scss";
import { useListingStore } from "@/store/listing.store";

interface Props {
  label: string;
  comingSoon?: boolean;
}

const SelectableButton = ({ label, comingSoon }: Props) => {
  const { selectedAddOn, setSelectedAddOn } = useListingStore();

  const isSelected = selectedAddOn === label;

  const handleClick = () => {
    if (comingSoon) return;

    setSelectedAddOn(isSelected ? "" : label);
  };

  return (
    <div className="option-wrapper">
      {comingSoon && <span className="coming-soon">Coming soon</span>}

      <button
        type="button"
        className={`option-btn ${isSelected ? "selected" : ""} ${
          comingSoon ? "disabled" : ""
        }`}
        onClick={handleClick}
        disabled={comingSoon}
      >
        <span>{label}</span>

        <span
          className={`circle ${isSelected ? "circle-selected" : ""}`}
        ></span>
      </button>
    </div>
  );
};

export default SelectableButton;
