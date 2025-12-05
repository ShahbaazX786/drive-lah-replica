import { subscriptionPlans as plans } from "@/assets/constants";
import lock from "@/assets/icons/Lock.svg";
import locationMarker from "@/assets/icons/map-marker.svg";
import mileage from "@/assets/icons/mileage.svg";
import CardDetails from "@/components/listing/CardDetails";
import SelectableButton from "@/components/ui/selectable-button";
import { useState } from "react";
import "./Subscription.scss";

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanSelection = (id: string) => {
    setSelectedPlan((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="subscription-wrapper">
      <section id="subscription-heading">
        <h1>Subscription Plan</h1>
        <p>Select the ideal subscription plan for your listing.</p>
      </section>
      <hr className="separator" />

      <section id="subscription-plan-wrapper">
        <h2>Select your plan</h2>
        <section id="subscription-plans">
          {plans.map((plan) => (
            <button
              key={plan.id}
              id="subscription-card"
              className={selectedPlan === plan.id ? "selected" : ""}
              onClick={() => handlePlanSelection(plan.id)}
            >
              <p>{plan.plan}</p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={feature}>
                    {index === 0 && <img src={locationMarker} />}
                    {index === 1 && <img src={mileage} />}
                    {index === 2 && <img src={lock} />}
                    {feature}
                  </li>
                ))}
              </ul>
              <div id="plan-price-wrapper">
                {plan.price === 0 && <span className="plan-price">Free</span>}
                {plan.price !== 0 && (
                  <>
                    <span className="plan-price">${plan.price}</span>
                    <span className="plan-frequency">/month</span>
                  </>
                )}
              </div>
            </button>
          ))}
        </section>
        <hr className="separator" />
      </section>

      {selectedPlan && (
        <section id="subscription-addons">
          <p>Select add-ons for your subscription</p>
          <section id="subscription-buttons">
            <SelectableButton label="BYO secondary GPS - $5/month" />
            <SelectableButton label="BYO lockbox - $10/month" comingSoon />
          </section>
          <hr className="separator" />

          <section id="subscription-card-details">
            <p>Add card details</p>
            <CardDetails />
            <span>
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </span>
          </section>
          <hr className="separator" />
        </section>
      )}

      <section id="subscription-help">
        <p>
          Learn more about the plans here -{" "}
          <a href="#">What is the right plan for me?</a>
        </p>
        <p>
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarifications.
        </p>
      </section>
    </section>
  );
};

export default Subscription;
