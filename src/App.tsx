import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/header";
import ListingLayout from "./features/listing/ListingLayout";
import NextListItemButton from "./components/listing/NextListItemButton";

export default function App() {
  return (
    <>
      <Header />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <section className="global-wrapper" id="main-content">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/listing/subscription" replace />}
          />
          <Route path="listing/*" element={<ListingLayout />} />
        </Routes>
        <NextListItemButton />
      </section>
    </>
  );
}
