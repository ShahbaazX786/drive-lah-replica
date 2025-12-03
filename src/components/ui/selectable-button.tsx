import { useState } from "react";
import "./selectable-button.scss";

interface Props {
  label: string;
}

const SelectableButton = ({ label }: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      className={`option-btn ${selected ? "selected" : ""}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <span>{label}</span>

      <span className={`circle ${selected ? "circle-selected" : ""}`}></span>
    </button>
  );
};

export default SelectableButton;
