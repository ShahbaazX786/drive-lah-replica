import { stepperForm as initialSteps } from "@/assets/constants";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ListingSidebar.scss";

const ListingSidebar = () => {
  const [steps, setSteps] = useState(initialSteps);
  const navigate = useNavigate();

  const handleSelection = (id: number, route: string) => {
    const selected = steps.find((step) => step.id === id);

    if (!selected || selected.status === "pending") return;

    const updated = steps.map((step) => {
      if (step.id === id) return { ...step, status: "active" };
      if (step.status === "active") return { ...step, status: "completed" };
      return step;
    });

    setSteps(updated);

    navigate(`/listing${route}`);
  };

  return (
    <>
      <aside className="stepper-form">
        {steps.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`step step-${item.status}`}
            disabled={item.status === "pending"}
            onClick={() => handleSelection(item.id, item.route)}
          >
            <span className="step-title">{item.title}</span>
            {item.status === "completed" && (
              <FaCheckCircle className="step-check" />
            )}
          </button>
        ))}
      </aside>

      <aside className="mobile-stepper-form">
        <select>
          {steps.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </aside>
    </>
  );
};

export default ListingSidebar;
