import { useEffect } from "react";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function AutresOperationsPage() {
    useEffect(() => {
        states.selectedLink = "autresoperations";
      }, []);
  return (
    <MainLayout>
        <div>
            Autres opérations
        </div>
    </MainLayout>
  )
}

export default AutresOperationsPage