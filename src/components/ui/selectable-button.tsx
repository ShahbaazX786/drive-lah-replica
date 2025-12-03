import { useState } from "react";
import "./selectable-button.scss";

interface Props {
  label: string;
  comingSoon?: boolean;
}

const SelectableButton = ({ label, comingSoon }: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="option-wrapper">
      {comingSoon && <span className="coming-soon">Coming soon</span>}

      <button
        type="button"
        className={`option-btn ${selected ? "selected" : ""} ${
          comingSoon ? "disabled" : ""
        }`}
        onClick={() => !comingSoon && setSelected((prev) => !prev)}
        disabled={comingSoon}
      >
        <span>{label}</span>

        <span className={`circle ${selected ? "circle-selected" : ""}`}></span>
      </button>
    </div>
  );
};

export default SelectableButton;
