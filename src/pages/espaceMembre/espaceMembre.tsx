import { useEffect } from "react";
import Input from "../../components/inputs"
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function EspaceMembrePage() {
    useEffect(() => {
        states.selectedLink = "espacemembre";
      }, []);
  return (
    <MainLayout>
        <Input></Input>
    </MainLayout>
  )
}

export default EspaceMembrePage