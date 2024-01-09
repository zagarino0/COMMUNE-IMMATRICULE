import { CiBoxList } from "react-icons/ci";
import { Link,  useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";

import { TiShoppingBag } from "react-icons/ti";
import Repoblika from "../../assets/Repoblika.png"
import { CiLogin } from "react-icons/ci"
import { Navbar } from "../../components/navbar/Navbar";
import { IoStatsChartOutline } from "react-icons/io5";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { MdOutlineCached } from "react-icons/md";
import { ModalLogin } from "../Home/Modal/ModalLogin";
import {  useState } from "react";
import Checkbox from "../../components/common/checkbox";
import axios from "axios";

interface LayoutProps {
  children?: React.ReactElement;
  currentPath?: string;
}

const AutrePersPhysique: React.FC<LayoutProps>  = ({  currentPath })=> {
    let navigate = useNavigate();
    
    const registrationData = localStorage.getItem("registrationData");
    const parsedDataRegistre = JSON.parse(registrationData as string);

    const activiteData = localStorage.getItem("activiteData");
    const parsedDataActivite = JSON.parse(activiteData as string);

    const siegeData = localStorage.getItem("siegeData");
    const parsedDataSiege = JSON.parse(siegeData as string);

  
    const [Autre , setAutre] = useState<{
      id_contribuable: string,
      information_mail: boolean,
      depaseement_12_mois: boolean,
      certification: boolean
    }>({
      id_contribuable: parsedDataRegistre.id,
      information_mail: false,
      depaseement_12_mois: false,
      certification: false
    }) 


const HandleClick = async  () =>{


if (parsedDataRegistre){

  try {
    // Make a POST request to your server endpoint
    const response = await axios.post("http://localhost:3500/contribuable", parsedDataRegistre);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
}

if(parsedDataActivite){
  try {
    // Make a POST request to your server endpoint
    const response = await axios.post("http://localhost:3500/activite", parsedDataActivite);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }

}

if(parsedDataSiege){

  try {
    // Make a POST request to your server endpoint
    const response = await axios.post("http://localhost:3500/siege", parsedDataSiege);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
}

if(Autre){

  try {
    // Make a POST request to your server endpoint
    const response = await axios.post("http://localhost:3500/autre", Autre);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
  }
}

}

    const [isModal , setIsModal] = useState(false);
    // Links navbar
  const links = [
      { id:1 , title: "", link: "/register" , icons:  <CiBoxList /> },
      { id:2 , title: "", link: "/Activite"  , icons:  <TiShoppingBag  />},
      { id:3 , title: "", link: "/Siege" , icons:  <IoStatsChartOutline /> },     
      { id:4 , title: "", link: "/Autre", icons:  <MdOutlineCached  /> },
    
    ];
  
    const content =(
      <div className="flex justify-between ">
       <Link to="/"><div  className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-mmatriculation</p></div></Link>
       <div className="flex justify-between py-3 w-[350px]">
       <Link to="/Immatriculation" className="font-[Tara]  hover:border-b-2 hover:border-[#959824]">Immatriculation</Link>
       <Link to="https://www.impots.mg" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2 ">Site CUM</Link>
       <Link to="#" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2">Contact</Link>
       </div>
       <div className="w-[180px]">
       <Button label="Se connecter" onClick={()=> setIsModal(true)} icon={CiLogin } ></Button>
       </div>
      </div>
  )
  
    // Navbar content
    const contentNavbar = (
      <nav className="flex items-center justify-center h-16">
        <ul className="flex">
          {links.map((link) => (
            <li
              key={link.title}
              className={`mx-4 
              text-center
              py-3
              px-6 
              
              font-semibold
              ${currentPath === link.link ? 'bg-[#959824] text-white rounded-md font-bold hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out ' : ''}
            `}
            >
              <Link to={link.link} > {link.icons} {link.title}</Link>
            </li>
          ))}
        </ul>
        
      </nav>
    );
  
    return (
      <div className="h-full w-full bg-gray-200 ">
        <ModalLogin isOpen={isModal} onClose={()=> setIsModal(false)} quitter={()=> setIsModal(false)}></ModalLogin>
        <Navbar content={content} className="h-16"></Navbar>
       
        <div className=" flex justify-center py-14 bg-hoteldeville ">
          <div className="flex flex-col">
          <img src={Repoblika} alt="repoblika photo" />
          <div className="bg-white w-[600px] h-[100px] rounded flex items-center justify-center ">
          <p className="text-center font-[kaldera] text-4xl ">Formulaire d'inscription</p>
          </div>
          </div>
      </div>
      <div className="flex justify-center  w-full h-full  py-14">
  <div className="flex flex-col">
  <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[120px] py-8">
         <div className="flex flex-col">
         <h1 className="text-2xl text-center font-[Tara]   flex flex-row">Procédure de demande d'immatriculation</h1>
         
         <h1 className="text-xl text-gray-600 text-center font-[Tara]  ml-6  flex flex-row">Veuillez fournir les renseignements suivants :</h1>
         
         </div>
          </div>
         
          
  </div>
      </div>
    <div className="flex flex-col  w-full h-full ">
    <Navbar content={contentNavbar}  />
        <main className="w-full h-full">   <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 8:" className="mt-2"></TitleH3>
        <TitleH1 text="Confirmation des étapes" className="ml-2"></TitleH1>
        </div>
        <div className="flex justify-between mt-6">
            <Label text="M'envoyer par e-mail les informations saisies " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui" onChange={(checked)=>setAutre({ ...Autre , information_mail: checked})} checked={Autre.information_mail == true}></Checkbox>
    <Checkbox label="Non" onChange={(checked)=>setAutre({...Autre , information_mail: ! checked})} checked={Autre.information_mail == false }></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Votre exerice dépasse t-il 12 mois ? " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui(18 mois)" onChange={(checked)=>setAutre({ ...Autre , depaseement_12_mois: checked})} checked={Autre.depaseement_12_mois == true}></Checkbox>
    <Checkbox label="Non(12 mois)" onChange={(checked)=>setAutre({...Autre , depaseement_12_mois: !checked})} checked={Autre.depaseement_12_mois == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Je certifie que ces renseignements sont complets et exacts " />
      <div className="flex justify-between w-[300px]">
    
    <Checkbox onChange={(checked)=>setAutre({...Autre , certification: checked})} checked={Autre.certification }></Checkbox>
    </div>
    </div>

        
       <div className="flex justify-between mt-6">
       <div className="w-40">
          <Button label="Précédent" onClick={()=>navigate("/SiegePersPhysique")}></Button>
        </div>
        <div className="w-40">
          <Button label="Terminer" onClick={HandleClick}></Button>
        </div>
       </div>
      </div>
      </div></main>
    </div>
    <div className="bg-black w-full h-16 p-3 flex justify-center">
               <p className="text-justify  text-white ">© 2022-2023, Direction Générale des Impôts, SSIF</p>
          </div>
      </div>
    );
    }

export default AutrePersPhysique