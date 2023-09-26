import { useEffect } from "react";
import { MainLayout } from "../../../layouts/main"
import { states } from "../../../states/states";

function GererLesComptesOperateurDeVotreCentrePage() {
    useEffect(() => {
        states.selectedLink = "gerercompte";
      }, []);
  return (
    <MainLayout>
        <div className="mt-24">
       gerer compte
        </div>
    </MainLayout>
  )
}

export default GererLesComptesOperateurDeVotreCentrePage