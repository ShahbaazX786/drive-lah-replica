import { useListingStore } from "@/store/listing.store";
import { stepperForm } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import "./NextListItemButton.scss";

const NextListItemButton = () => {
  const { selectedPlan, currentStep, goToStep } = useListingStore();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < stepperForm.length) {
      goToStep(currentStep + 1);
      navigate(`/listing${stepperForm[currentStep].route}`);
    }
  };

  return (
    <section id="bottom-navigation-wrapper">
      <section id="bottom-navigation">
        <button onClick={handleNext} disabled={selectedPlan === ""}>
          Next
        </button>
      </section>
    </section>
  );
};

export default NextListItemButton;
