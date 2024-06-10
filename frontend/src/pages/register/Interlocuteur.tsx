import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";
import { CgDanger } from "react-icons/cg";
import { useEffect, useState } from "react";

function Interlocuteur() {
    const location = useLocation();
    let navigate = useNavigate();
    const registrationData = localStorage.getItem("registrationData"); 
    const parsedData = JSON.parse(registrationData as string);
      
    
  
  // New state to hold the list of entries 
    const [Interlocuteur , setInterlocuteur] = useState<{
      id_contribuable: string,
   nom_interlocuteur: string,
   titre_interlocuteur:string,
   adresse_interlocuteur: string,
   telephone_interlocuteur: string,
   email_interlocuteur: string,

    }>({ 
   id_contribuable: parsedData.id,
   nom_interlocuteur: "",
   titre_interlocuteur:"",
   adresse_interlocuteur: "",
   telephone_interlocuteur: "",
   email_interlocuteur: "",
   
    })
    const [isStorageUpdated, setIsStorageUpdated] = useState(false);

    useEffect(() => {
      // Store Value data in localStorage
      localStorage.setItem("interlocuteurData", JSON.stringify(Interlocuteur));
      // Reset the dummy state to trigger rerender
      setIsStorageUpdated(false);
    }, [isStorageUpdated ,Interlocuteur]);
    
  
      const handleButtonClick = () => {
  
      // Trigger a rerender by updating the dummy state
      setIsStorageUpdated(true);
        const routeToNavigate = "/Autre";
        console.log('Navigating to:', routeToNavigate);
      
        // Use navigate to navigate to the determined route
        navigate(routeToNavigate, { state: { Interlocuteur } });
       
      };
      // ... 

    const content = (
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 7:" className="mt-2"></TitleH3>
          <TitleH1 text="Interlocuteur  au sein de l'entreprise" className="ml-2"></TitleH1>
          </div>

          <div className="mt-4">
          <p className="flex flex-row px-4 font-[Courier]"><CgDanger className="text-2xl"/> Les champs marqués * sont obligatoires.</p>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Nom *" />
            <Input type="text" 
            value={Interlocuteur.nom_interlocuteur}
            onChange={(e)=>{setInterlocuteur({...Interlocuteur , nom_interlocuteur : e.target.value})}}
            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Titre *"></Label>
      <Input
        type="text"
        value={Interlocuteur.titre_interlocuteur}
            onChange={(e)=>{setInterlocuteur({...Interlocuteur , titre_interlocuteur: e.target.value})}}     
      ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Adresse  *"></Label>
      <Input
        type="text"     
        value={Interlocuteur.adresse_interlocuteur}
            onChange={(e)=>{setInterlocuteur({...Interlocuteur , adresse_interlocuteur : e.target.value})}}
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Téléphone *"></Label>
      <Input
        type="text"    
        value={Interlocuteur.telephone_interlocuteur}
            onChange={(e)=>{setInterlocuteur({...Interlocuteur , telephone_interlocuteur : e.target.value})}} 
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="E-mail *"></Label>
      <Input
        type="text"  
        value={Interlocuteur.email_interlocuteur}
            onChange={(e)=>{setInterlocuteur({...Interlocuteur , email_interlocuteur : e.target.value})}}   
      ></Input>
    </div>
    
    </div>
  
          
         <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>navigate("/Dirigeant")}></Button>
          </div>
          <div className="w-40">
            <Button label="Suivant" onClick={handleButtonClick}></Button>
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