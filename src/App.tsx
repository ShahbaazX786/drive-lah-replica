import Header from "./components/layout/header/header";
import StepperForm from "./components/layout/sidebar/stepperForm";
import Subscription from "./components/subscription/Subscription";

function App() {
  return (
    <>
      <Header />
      <div className="main-page">
        <StepperForm />
        <Subscription />
      </div>
    </>
  );
}

export default App;
