import { useEffect } from "react";
import { MainLayout } from "../../../layouts/main";
import { states } from "../../../states/states";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";

function DebloquerUnComptePage() {
    useEffect(() => {
        states.selectedLink = "debloquercompte";
      }, []);
      const contentCard =(
        <div className="flex justify-center items-center">
      <div className="flex flex-col">
      <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Cestion compte Contribuable</div>
      
      <div className="flex justify-between mt-6 p-8 w-full">
        <Label text="Référence Fiscal" className="w-60 mt-2"></Label>
      <Input type="text" placeholder="Référence Fiscal" className=" w-full ml-4"></Input>
      
      <Button type="submit" text="Débloquer" className=" ml-4"></Button>
      
      
      
      </div>
      </div>
      </div>
      
      )  
      return (
      <MainLayout>
          <div className="overflow-y-auto h-[500px] mt-14 mb-8">
          <Card className="w-[800px] h-[600px]" contentCard={contentCard}></Card>
          </div>
      </MainLayout>
      )
      }
      

export default DebloquerUnComptePage