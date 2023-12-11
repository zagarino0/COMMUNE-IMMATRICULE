import { useLocation } from "react-router-dom";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { Layout } from "./Layout"
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/checkbox";
import { TitleH1, TitleH3 } from "../../components/title";


function Activite() {
    const location = useLocation(); 
    const content = (
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 2:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur les activités" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Activités " />
            <Input type="text" />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro statistique "></Label>
      <div className="flex flex-col">
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Disponible" onChange={()=>window} checked></Checkbox>
      <Checkbox label="Pas encore Disponible" onChange={()=>window} checked></Checkbox>
      </div>
      <Input
        type="text"
        className="mt-2"     
      ></Input>
      </div>
    </div>
  
    <div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance statistique "></Label>
      <Input
        type="date"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce"></Label>
      <Input
        type="date"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable  "></Label>
      <Input
        type="date"     
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable" />
            <Input type="date" />
          </div>
                  <div className='flex justify-between mt-6 '>
      <Label text="Importateur "></Label>
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
      <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
      </div>
      
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Exportateur "></Label>
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
      <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
      </div>
      
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Nombre salarié" />
            <Input type="text" />
          </div>
         <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>window.location.href = "/register"}></Button>
          </div>
          <div className="w-40">
            <Button label="Suivant" onClick={()=>window.location.href = "/Siege"}></Button>
          </div>
         </div>
        </div>
      </div>
    );
    
  
  return (
  <div className=" w-full h-full bg-gray-200 ">
      <Layout children={content} currentPath={location.pathname}></Layout>
      </div>
    )
  }

export default Activite