
import { Card } from "../../../../components/card/card";
import { Button } from "../../../../components/common";
import Checkbox from "../../../../components/common/checkbox";
import Input from "../../../../components/inputs";
import { Label } from "../../../../components/label/label";
import { MainLayout } from "../../../../layouts/main";

function Assujetissement() {
  
    const handleCheckboxChange  = () => {
          
    };
    
   

    const contentCard = (
      <div className="m-4 mb-4">
         
          <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Assujetissement </div>
  <div className="flex flex-col">
  

  <div className="flex flex-col bg-gray-200 mt-4 rounded h-[500px] p-4">
  <Label text={`Interlocuteur :`} className="ml-4"></Label>
  <div className="mt-6 flex  justify-between ">
  <Label text="Nom" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Titre" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Adresse" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Tél " className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Tél 2" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Tél 3" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="E-mail" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  </div>
  <div className="flex flex-col bg-gray-200 mt-4 rounded h-[350px] p-4">
  <Label text={`Autre :`} className="ml-4"></Label>
  <div className="mt-6 flex  justify-between ">
  <Label text="CF Validateur " className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="CF Gestionnaire" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Motif Duplicata" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  <div className="mt-6 flex  justify-between ">
  <Label text="Réf Acte de motif" className="mt-4"></Label>
  <Input type="text" className="w-96  "></Input>
  </div>
  
  </div>
  <div className="mt-8 ">
  <Checkbox label="Les pièce physique sont complètes et certifiées authentiques" checked onChange={handleCheckboxChange} ></Checkbox>
  </div>
  <div className="flex justify-between mt-8">
  <Button text="Valider"></Button>
  <Button text="Remettre en attente"></Button>
  <Button text="Rejeter " onClick={ () => {window.location.href = "/saisirmotifrejet"}}></Button>
  </div>
  </div>
  
      </div>
  )
  return (
  <MainLayout>
  <div className="  overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[800px] h-[1200px]"></Card>
  </div>
      </MainLayout>
  )
  }
  
export default Assujetissement