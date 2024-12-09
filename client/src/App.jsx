import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "./pages/SplashScreen";
import { Login } from "./components/login/LoginForm";

const App = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
