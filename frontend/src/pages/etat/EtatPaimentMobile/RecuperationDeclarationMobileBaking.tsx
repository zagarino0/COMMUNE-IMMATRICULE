import { Card } from "../../../components/card/card";
//import { Button } from "../../../components/common";
//import Input from "../../../components/inputs";
//import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH1 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";

function RecuperationDeclarationMobileBaking() {
    const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
    const data = [
      ["none", "none", "none", "none"],
     
    ];
  
    
  
  
    const contentCard=(
        <div >
  
  <div className="flex justify-center items-center mt-4" >
  <div className="mt-4 flex flex-col mx-6">
  <div className="text-[#959824] text-3xl text-center font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="RECUPERATION DES DECLARATIONS VIA MOBILE BANKING"></TitleH1></div>
  <div className="mt-4 flex flex-col  ">

    {/**
     * 
     * 
        * <div className="flex justify-between mt-6">
        <Label text="Date de Validation , Du"></Label>
      <Input type="date"  className=" w-40"></Input>
      </div>
      <div className="flex justify-between mt-6">
        <Label text="Au"></Label>
      <Input type="date"  className=" w-40"></Input>
      </div>
      <div className="flex justify-between mt-6">
        <Label text="Numéron Référence Fiscal"></Label>
      <Input type="text"  className=" w-40"></Input>
      </div>
    
      <Button text="Lister" className="mt-6"></Button>
     * 
     * 
     * 
     */}
  
  
  </div>
  <div className="mt-10">
  <Table
  
  headers={headers}
  data={data}
  ></Table>
  </div>
 
  <div>
  
  </div>
  </div>
        </div>
        </div>
    )
  return (
   <MainLayout>
    <div className="overflow-y-auto h-[500px] mt-14 mb-8">
    <Card contentCard={contentCard} className="w-[800px] h-[800px] "></Card>
    </div>
   </MainLayout>
  )
  }
export default RecuperationDeclarationMobileBaking