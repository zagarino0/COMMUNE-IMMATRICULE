import { useLocation } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";

function Interlocuteur() {
    const location = useLocation(); 
    const content = (
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 7:" className="mt-2"></TitleH3>
          <TitleH1 text="Interlocuteur de la DGI au sein de l'entreprise" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Nom " />
            <Input type="text" />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Titre"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Adresse  "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Téléphone "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="E-mail"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    
    </div>
  
          
         <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>window.location.href = "/Dirigeant"}></Button>
          </div>
          <div className="w-40">
            <Button label="Suivant" onClick={()=>window.location.href = "/Autre"}></Button>
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
export default Interlocuteur