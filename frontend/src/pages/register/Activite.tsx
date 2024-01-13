import {  useNavigate } from "react-router-dom";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { Layout } from "./Layout"
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/checkbox";
import { TitleH1, TitleH3 } from "../../components/title";
import { useEffect, useState } from "react";


function Activite() {
 
    let navigate = useNavigate();
    
      const registrationData = localStorage.getItem("registrationData"); 
      const parsedData = JSON.parse(registrationData as string);
        
  const [ Activite , setActivite]  = useState<{
    id_contribuable:string,
    activite: string,
    precision_activite: string
    numero_statistique: string,
    date_delivrance_statistique: string
    registre_commerce: string
    date_registre_commerce: string,
    debut_exercice: string,
    cloture_exercice : string,
    nif: string,
    statistique:boolean,
    nombre_salarie: string
  }>({
    id_contribuable: parsedData.id,
    activite: "",
    precision_activite: "",
    numero_statistique: "",
    date_delivrance_statistique: "",
    registre_commerce: "",
    date_registre_commerce: "",
    debut_exercice: "",
    cloture_exercice : "",
    nif: "",
    statistique:false,
    nombre_salarie:""

  
  })

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("activitePersMoralData", JSON.stringify(Activite));
    // Reset the dummy state to trigger rerender
    setIsStorageUpdated(false);
  }, [Activite, isStorageUpdated]);
  
    
      const handleButtonClick = () => {
        setIsStorageUpdated(true);
        // Use the selectedOption to determine the route to navigate to
        const routeToNavigate =  "/Siege";
    
        // Use navigate to navigate to the determined route
        navigate(routeToNavigate, { state: { Activite } });
      };

    const content = (
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 2:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur les activités" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Activités " />
            <Input type="text"
            value={Activite.activite}
            onChange={(e)=> setActivite({...Activite , activite: e.target.value})}
            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités "></Label>
      <Input
        type="text"  
        value={Activite.precision_activite}
        onChange={(e)=> {setActivite({...Activite , precision_activite : e.target.value})}}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro d'identification Fiscale (DGI) "></Label>
      <Input
        type="text"  
        value={Activite.nif}
        onChange={(e)=> {setActivite({...Activite , nif : e.target.value})}}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro statistique "></Label>
      <div className="flex flex-col">
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Disponible" onChange={(checked)=>setActivite({...Activite , statistique: checked})} checked={Activite.statistique === true}></Checkbox>
      <Checkbox label="Pas encore Disponible" onChange={(checked)=>setActivite({...Activite , statistique: ! checked})} checked={Activite.statistique === false}></Checkbox>
      </div>
      { Activite.statistique === true &&(
        <Input
        type="text"
        className="mt-2"
        value={Activite.numero_statistique}
        onChange={(e)=> {setActivite({...Activite , numero_statistique : e.target.value})}}   
      ></Input>
      )

      }
      </div>
    </div>
  
    <div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance statistique "></Label>
      <Input
        type="date"  
        value={Activite.date_delivrance_statistique}
        onChange={(e)=> setActivite({...Activite , date_delivrance_statistique: e.target.value})}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce"></Label>
      <Input
        type="text"
        value={Activite.registre_commerce}
        onChange={(e)=>setActivite({...Activite , registre_commerce: e.target.value})}     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce"></Label>
      <Input
        type="date"
        value={Activite.date_registre_commerce}
        onChange={(e)=> setActivite({...Activite , date_registre_commerce : e.target.value})}     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable  "></Label>
      <Input
        type="date"     
        value={Activite.debut_exercice}
        onChange={(e)=> setActivite({...Activite , debut_exercice : e.target.value})}
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable" />
            <Input type="date"
            value={Activite.cloture_exercice}
            onChange={(e)=> setActivite({...Activite , cloture_exercice: e.target.value})}
            />
          </div>
            
          <div className="flex justify-between mt-6">
            <Label text="Nombre salarié" />
            <Input type="text" value={Activite.nombre_salarie} onChange={(e)=>setActivite({...Activite , nombre_salarie: e.target.value})} />
          </div>
         <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>navigate("/register")}></Button>
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

export default Activite