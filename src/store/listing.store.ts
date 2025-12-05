import { stepperForm } from "@/utils/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { cardDataType } from "./listing.store.types";

interface ListingStore {
  // SideBar
  steps: typeof stepperForm;
  setSteps: (steps: typeof stepperForm) => void;
  goToStep: (id: number) => void;

  // Subscription
  currentStep: number;
  setCurrentStep: (step: number) => void;

  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;

  selectedAddOn: string;
  setSelectedAddOn: (addOn: string) => void;

  cardData: cardDataType;
  setCardData: (field: keyof cardDataType, value: string) => void;
  resetCardData: () => void;
  resetSubscription: () => void;
}

export const useListingStore = create<ListingStore>()(
  persist(
    (set) => ({
      steps: stepperForm,
      setSteps: (steps) => set({ steps }),
      goToStep: (id) =>
        set((state) => {
          const updated = state.steps.map((step) => {
            if (step.id === id) return { ...step, status: "active" };
            if (step.status === "active")
              return { ...step, status: "completed" };
            return step;
          });
          return { steps: updated, currentStep: id };
        }),

      currentStep: 9,
      setCurrentStep: (step) => set({ currentStep: step }),

      selectedPlan: "",
      setSelectedPlan: (plan) => set({ selectedPlan: plan }),

      selectedAddOn: "",
      setSelectedAddOn: (addOn) => set({ selectedAddOn: addOn }),

      cardData: { number: "", expiry: "", cvc: "" },
      setCardData: (field, value) =>
        set((state) => ({
          cardData: {
            ...state.cardData,
            [field]: value,
          },
        })),
      resetCardData: () =>
        set({ cardData: { number: "", expiry: "", cvc: "" } }),

      resetSubscription: () =>
        set({
          currentStep: 9,
          selectedPlan: "",
          selectedAddOn: "",
          cardData: { number: "", expiry: "", cvc: "" },
        }),
    }),
    {
      name: "car-listing-store",
    }
  )
);
