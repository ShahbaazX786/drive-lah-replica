const navMenu = [
  {
    id: 1,
    title: "Learn more",
    route: "/learn-more",
  },
  {
    id: 2,
    title: "List your car",
    route: "/list-you-car",
  },
  {
    id: 3,
    title: "Inbox",
    route: "/inbox",
  },
];

const stepperForm = [
  {
    id: 1,
    title: "Location",
    route: "/location",
    status: "completed",
  },
  {
    id: 2,
    title: "About",
    route: "/about",
    status: "completed",
  },
  {
    id: 3,
    title: "Features",
    route: "/features",
    status: "completed",
  },
  {
    id: 4,
    title: "Rules",
    route: "/rules",
    status: "completed",
  },
  {
    id: 5,
    title: "Pricing",
    route: "/pricing",
    status: "completed",
  },
  {
    id: 6,
    title: "Promotion",
    route: "/promotion",
    status: "completed",
  },
  {
    id: 7,
    title: "Pictures",
    route: "/pictures",
    status: "completed",
  },
  {
    id: 8,
    title: "Insurance",
    route: "/insurance",
    status: "completed",
  },
  {
    id: 9,
    title: "Subscription",
    route: "/subscription",
    status: "active",
  },
  {
    id: 10,
    title: "Device",
    route: "/device",
    status: "pending",
  },
  {
    id: 11,
    title: "Easy Access",
    route: "/easy-access",
    status: "pending",
  },
];

const subscriptionPlans = [
  {
    id: "just-mates",
    plan: "Just mates",
    features: [
      "Bring your own GPS",
      "Mileage reporting to be done by you",
      "In-person key handover to guests",
    ],
    price: 0,
  },
  {
    id: "good-mates",
    plan: "Good mates",
    features: [
      "Primary GPS included",
      "Automated mileage calculations",
      "In-person key handover to guests",
    ],
    price: 10,
  },
  {
    id: "best-mates",
    plan: "Best mates",
    features: [
      "Keyless access technology",
      "Automated mileage calculations",
      "Remote handover to guests",
    ],
    price: 30,
  },
];

export { navMenu, stepperForm, subscriptionPlans };
