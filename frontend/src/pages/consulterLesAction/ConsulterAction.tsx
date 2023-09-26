import { useEffect } from "react";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main";
import { states } from "../../states/states";

function ConsulterActionPage() {
    useEffect(() => {
        states.selectedLink = "consulteraction";
      }, []);
      const contentCard =(
        <div>
  
        </div>
      )
  return (
   
    <MainLayout>
        <div className="mt-24">
        <Card className="w-[500px] h-[500px]" contentCard={contentCard}></Card>
        </div>
    </MainLayout>
  )
}

export default ConsulterActionPage