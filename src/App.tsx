
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/login";
import ResgisterPage from "./pages/register";
import DemandeDeMAJPage from "./pages/demandeDeMAJ/DemandNifValide";
import MAJRenseignementPage from "./pages/majRenseignement/majRenseignement";
import DemandeDeNIFAValiderPage from "./pages/demandeDeNIFAValider/DemandeDeNIFAValider";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<ResgisterPage />}></Route>
        <Route path="/majRenseignement" element={<MAJRenseignementPage />}></Route>
        <Route path="/demandeMiseAJour" element={<DemandeDeMAJPage />}></Route>
        <Route path="/demandeDeNIFValider" element={<DemandeDeNIFAValiderPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>        
      </Routes>
    </Router>
    </>
  )
}

export default App
