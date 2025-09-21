import { BrowserRouter, Route, Routes } from "react-router";
import {
  About,
  Login,
  ProductManagement,
  NotFound,
  RootLayout,
  Dashboard,
  Profile,
} from "../pages";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ProductManagement />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="settings" element={<h1>Settings</h1>} />
          <Route path="help" element={<h1>Help</h1>} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
