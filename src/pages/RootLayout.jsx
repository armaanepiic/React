// import { Outlet } from "react-router";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import ThemeProvider from "../providers/ThemeProvider";

// export default function RootLayout() {
//   return (
//     <ThemeProvider>
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="flex flex-1">
//           <Sidebar />
//           {/* <MainContent /> */}
//           <Outlet />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }



import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemeProvider from "../providers/ThemeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col overflow-hidden">
        <Header className="flex-shrink-0 h-16 border-b bg-white shadow-sm" />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar className="flex flex-shrink-0 w-64 border-r bg-gray-300 overflow-y-auto" />
          <main className="flex-1 overflow-y-auto ">
            <div className="min-h-screen bg-gray-300">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}