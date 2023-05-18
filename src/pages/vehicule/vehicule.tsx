import { useEffect } from "react";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function VehiculePage() {
    useEffect(() => {
        states.selectedLink = "vehicule";
      }, []);
  return (
    <MainLayout>
        <div>
            vehicule
        </div>
    </MainLayout>
  )
}

export default VehiculePage