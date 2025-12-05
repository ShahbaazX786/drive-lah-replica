import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { cardDataType } from "./listing.store.types";

interface ListingStore {
  currentStep: number;
  setCurrentStep: (step: number) => void;

  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;

  selectedAddOn: string;
  setSelectedAddOn: (addOn: string) => void;

  cardData: cardDataType;
  setCardData: (field: keyof cardDataType, value: string) => void;

  resetSubscription: () => void;
}

export const useListingStore = create<ListingStore>()(
  persist(
    (set) => ({
      currentStep: 1,
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

      resetSubscription: () =>
        set({
          currentStep: 1,
          selectedPlan: "",
        }),
    }),
    {
      name: "car-listing-store",
    }
  )
);
