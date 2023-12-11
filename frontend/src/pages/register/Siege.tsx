import { useLocation } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";

function Siege() {
    const location = useLocation(); 
    const content = (
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 3:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur le siège" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Adresse actuelle (siège) " />
            <Input type="text" />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Fokontany"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Commune "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="District "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Région"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Province "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    </div>
  
          
         <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>window.location.href = "/Activite"}></Button>
          </div>
          <div className="w-40">
            <Button label="Suivant" onClick={()=>window.location.href = "/Associe"}></Button>
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
export default Siege