import { useEffect } from "react";
import { MainLayout } from "../../../layouts/main";
import { states } from "../../../states/states";

function DebloquerUnComptePage() {
    useEffect(() => {
        states.selectedLink = "debloquercompte";
      }, []);
  return (
    <MainLayout>
        <div className="mt-24">
        Debloquer un compte
        </div>
    </MainLayout>
  )
}

export default DebloquerUnComptePage