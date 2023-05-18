import { useEffect } from "react";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function ConsultationPage() {
    useEffect(() => {
        states.selectedLink = "consultation";
      }, []);
  return (
    <MainLayout>
        <div>
            Consultation
        </div>
    </MainLayout>
  )
}

export default ConsultationPage