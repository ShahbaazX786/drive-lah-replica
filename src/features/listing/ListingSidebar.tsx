import { useListingStore } from "@/store/listing.store";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ListingSidebar.scss";

const ListingSidebar = () => {
  const { steps, goToStep } = useListingStore();
  const navigate = useNavigate();

  const handleSelection = (id: number, route: string) => {
    const step = steps.find((step) => step.id === id);

    if (!step || step.status === "pending") return;
    goToStep(id);
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
        <select
          onChange={(e) => {
            const step = steps.find((s) => s.title === e.target.value);
            if (!step) return;
            handleSelection(step.id, step.route);
          }}
        >
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
