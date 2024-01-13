import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";

function Siege() {
    const location = useLocation();
    let navigate = useNavigate();
const registrationData = localStorage.getItem("registrationData"); 
const parsedData = JSON.parse(registrationData as string);
  
const [Siege, setSiege] = useState<{
id_contribuable: string,
adresse_actuelle : string,
fokontany: string,
commune : string,
district: string,
region: string ,
province : string,

}>({
  id_contribuable: parsedData.id,
  adresse_actuelle : "",
  fokontany: "",
  commune : "",
  district: "",
  region: "" ,
  province : "",
  

})

const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("siegePersMoraleData", JSON.stringify(Siege));
    // Reset the dummy state to trigger rerender
    setIsStorageUpdated(false);
  }, [Siege, isStorageUpdated]);
  

  const handleButtonClick = () => {    
    setIsStorageUpdated(true);
    const routeToNavigate = "/Associe";
    console.log('Navigating to:', routeToNavigate);
    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { Siege } });
  };

    const content = (
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 3:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur le siège" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
          <Label text="Adresse actuelle (siège) " />
          <Input type="text" 
          value={Siege.adresse_actuelle}
          onChange={(e)=>{setSiege({...Siege , adresse_actuelle: e.target.value})}}
          />
        </div>
        
 
  <div>
    <div className='flex justify-between mt-6 '>
    <Label text="Fokontany"></Label>
    <Input
      type="text" 
      value={Siege.fokontany}
      onChange={(e)=> {setSiege({...Siege , fokontany: e.target.value})}}    
    ></Input>
  </div>
 
  <div className='flex justify-between mt-6 '>
    <Label text="Commune "></Label>
    <Input
      type="text" 
      value={Siege.commune}
      onChange={(e)=>{setSiege({...Siege , commune: e.target.value})}}    
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="District "></Label>
    <Input
      type="text"
      value={Siege.district}
      onChange={(e)=>{setSiege({...Siege , district : e.target.value})}} 
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Région"></Label>
    <Input
      type="text" 
      value={Siege.region}
      onChange={(e)=>{setSiege({...Siege , region: e.target.value})}}     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Province "></Label>
    <Input
      type="text" 
      onChange={(e)=> {setSiege({...Siege , province: e.target.value})}}    
    ></Input>
  </div>
    </div>
  
          
         <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>navigate("/Activite")}></Button>
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
export default Siege