import { stepperForm as initialSteps } from "@/assets/constants";
import "./stepperForm.scss";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
const StepperForm = () => {
  const [steps, setSteps] = useState(initialSteps);

  const handleSelection = (id: number) => {
    const selected = steps.find((step) => step.id === id);

    if (!selected || selected.status === "pending") return;

    const updated = steps.map((step) => {
      if (step.id === id) return { ...step, status: "active" };

      if (step.status === "active") return { ...step, status: "completed" };

      return step;
    });
    setSteps(updated);
  };

  return (
    <section className="stepper-form">
      {steps.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`step step-${item?.status}`}
          disabled={item?.status === "pending"}
          onClick={() => handleSelection(item.id)}
        >
          <p className="step-title">{item.title}</p>
          {item?.status === "completed" && (
            <FaCheckCircle className="step-check" />
          )}
        </button>
      ))}
    </section>
  );
};

export default StepperForm;
