import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "./pages/SplashScreen";
import { LoginPortal } from "./pages/LoginPortal";
import { AdminPanel } from "./pages/AdminPanel";

const App = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPortal />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
