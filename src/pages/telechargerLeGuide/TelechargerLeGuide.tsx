import { useEffect } from "react";
import { MainLayout } from "../../layouts/main";
import { states } from "../../states/states";

function TelechargerLeGuidePage() {
    useEffect(() => {
        states.selectedLink = "telechargerleguide";
      }, []);
    return (
    <MainLayout>
        <div className="mt-24">
       telecharger le guide utilisateur
        </div>
    </MainLayout>
  )
}

export default TelechargerLeGuidePage