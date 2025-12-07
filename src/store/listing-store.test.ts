import { beforeEach, describe, expect, it, vi } from "vitest";
import { useListingStore } from "./listing.store";

vi.mock("zustand/middleware", async () => {
  const actual = await vi.importActual<any>("zustand/middleware");
  return {
    ...actual,
    persist: (config: any) => (set: any, get: any, api: any) =>
      config(set, get, api),
  };
});

beforeEach(() => {
  useListingStore.setState(useListingStore.getInitialState(), true);
});

describe("Listing Store", () => {
  it("should update steps", () => {
    const store = useListingStore.getState();

    const newSteps = [
      { id: 1, title: "A", route: "/a", status: "pending" },
      { id: 2, title: "B", route: "/b", status: "pending" },
    ];

    store.setSteps(newSteps);

    expect(useListingStore.getState().steps).toEqual(newSteps);
  });

  it("should navigate to a step", () => {
    const store = useListingStore.getState();

    store.goToStep(2);

    const updatedSteps = useListingStore.getState().steps;

    const active = updatedSteps.find((s) => s.id === 2);
    expect(active?.status).toBe("active");
    expect(useListingStore.getState().currentStep).toBe(2);
  });

  it("should update currentStep", () => {
    const store = useListingStore.getState();
    store.setCurrentStep(5);

    expect(useListingStore.getState().currentStep).toBe(5);
  });

  it("should update selectedPlan", () => {
    const store = useListingStore.getState();
    store.setSelectedPlan("premium");

    expect(useListingStore.getState().selectedPlan).toBe("premium");
  });

  it("should update cardData", () => {
    const store = useListingStore.getState();

    store.setCardData("number", "1234");

    expect(useListingStore.getState().cardData.number).toBe("1234");
  });

  it("should reset cardData", () => {
    const store = useListingStore.getState();

    store.setCardData("number", "5555");
    store.resetCardData();

    expect(useListingStore.getState().cardData).toEqual({
      number: "",
      expiry: "",
      cvc: "",
    });
  });

  it("should reset subscription", () => {
    const store = useListingStore.getState();

    store.setCurrentStep(3);
    store.setSelectedPlan("basic");
    store.setSelectedAddOn("extra");

    store.resetSubscription();

    expect(useListingStore.getState().currentStep).toBe(9);
    expect(useListingStore.getState().selectedPlan).toBe("");
    expect(useListingStore.getState().selectedAddOn).toBe("");
    expect(useListingStore.getState().cardData).toEqual({
      number: "",
      expiry: "",
      cvc: "",
    });
  });

  it("should update device state", () => {
    const store = useListingStore.getState();
    store.setDeviceState(1, "serialNumber", "SN123");
    expect(useListingStore.getState().devices[1].serialNumber).toBe("SN123");
  });
});
