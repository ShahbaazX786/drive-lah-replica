import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import ListingSidebar from "./ListingSidebar";
import {
  Location,
  About,
  Features,
  Rules,
  Pricing,
  Promotion,
  Pictures,
  Insurance,
  Subscription,
  Device,
  EasyAccess,
} from "@/features/listing/steps";
import "./ListingLayout.scss";

const ListingLayout = () => {
  return (
    <div className="listing-wrapper">
      <main className="listing-routes-wrapper">
        <ListingSidebar />
        <Routes>
          <Route index element={<Navigate to="location" replace />} />
          <Route path="location" element={<Location />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="rules" element={<Rules />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="device" element={<Device />} />
          <Route path="easy-access" element={<EasyAccess />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
};

export default ListingLayout;
