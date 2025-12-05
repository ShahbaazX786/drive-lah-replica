type StepStatus = "pending" | "active" | "completed";

type Step = {
  id: number;
  title: string;
  route: string;
  status: StepStatus;
};

type subscriptionPlanType = {
  id: string;
  plan: string;
  features: string[];
  price: number;
};

type listingSidebarType = {
  id: number;
  title: string;
  route: string;
  status: "completed" | "pending" | "active";
};

type cardDataType = {
  number: "";
  expiry: "";
  cvc: "";
};

export type {
  listingSidebarType,
  Step,
  StepStatus,
  subscriptionPlanType,
  cardDataType,
};
