
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import ErrorPage from "./pages/Error";

import LoginPage from "./pages/login";
import ResgisterPage from "./pages/register";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<ResgisterPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
