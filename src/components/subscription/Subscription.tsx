import { subscriptionPlans as plans } from "@/assets/constants";
import CardDetails from "./CardDetails";
import "./Subscription.scss";
import SelectableOption from "../ui/selectable-button";

const Subscription = () => {
  return (
    <section id="subscription-wrapper">
      <section id="subscription-heading">
        <h1>Subscription Plan</h1>
        <p>Select the ideal subscription plan for your listing.</p>
      </section>
      <hr />

      <section id="subscription-plan-wrapper">
        <h2>Select your plan</h2>
        <section id="subscription-plans">
          {plans.map((plan) => (
            <div key={plan.id} id="subscription-card">
              <p>{plan.plan}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {plan.price === 0 && <span className="plan-price">Free</span>}
              {plan.price !== 0 && (
                <div>
                  <span className="plan-price">${plan.price}</span>
                  <span className="plan-frequency">/month</span>
                </div>
              )}
            </div>
          ))}
        </section>
      </section>

      <section id="subscription-addons">
        <p>Select add-ons for your subscription</p>
        <section id="subscription-buttons">
          <SelectableOption label="BYO secondary GPS - $5/month" />
          <SelectableOption label="BYO lockbox - $10/month" />
        </section>

        <section id="subscription-card-details">
          <p>Add card details</p>
          <CardDetails />
          <span>
            You will not be charged right now. Subscription will only start once
            your listing is published and live.
          </span>
        </section>
      </section>

      <hr />
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
