import { Outlet } from "react-router";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemeProvider from "../providers/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          {/* <MainContent /> */}
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
