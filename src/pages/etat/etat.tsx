import { useEffect } from "react";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function EtatPage() {
    useEffect(() => {
        states.selectedLink = "etat";
      }, []);
  return (
    <MainLayout>
        <div>
            Etat
        </div>
    </MainLayout>
  )
}

export default EtatPage