import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/header";
import ListingLayout from "./features/listing/ListingLayout";
import Footer from "./components/layout/footer/footer";

export default function App() {
  return (
    <>
      <Header />
      <section className="global-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/listing" replace />} />
          <Route path="listing/*" element={<ListingLayout />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}
