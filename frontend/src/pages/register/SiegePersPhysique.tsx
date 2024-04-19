import { CiBoxList } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";

import { TiShoppingBag } from "react-icons/ti";
import Repoblika from "../../assets/Repoblika.png"
import { CiLogin } from "react-icons/ci"
import { Navbar } from "../../components/navbar/Navbar";
import { IoStatsChartOutline } from "react-icons/io5";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { MdOutlineCached } from "react-icons/md";
import { ModalLogin } from "../Home/Modal/ModalLogin";
import { useEffect, useState } from "react";
import Select from "../../components/inputs/selectInput";
interface LayoutProps {
  children?: React.ReactElement;
  currentPath?: string;
}
const SiegePersPhysique: React.FC<LayoutProps>  = ({  currentPath })=> {
let navigate = useNavigate();
const registrationData = localStorage.getItem("registrationData"); 
const parsedData = JSON.parse(registrationData as string);
  
const [Siege, setSiege] = useState<{
id_contribuable: string,
adresse_actuelle : string,
fonkotany: string,
commune : string,
district: string,
region: string ,
province : string,

}>({
  id_contribuable: parsedData.id,
  adresse_actuelle : "",
  fonkotany: "",
  commune : "",
  district: "",
  region: "" ,
  province : "",
  

})
  const [isModal , setIsModal] = useState(false);
  // Links navbar
const links = [
    { id:1 , title: "", link: "/register" , icons:  <CiBoxList /> },
    { id:2 , title: "", link: "/Activite"  , icons:  <TiShoppingBag  />},
    { id:3 , title: "", link: "/Siege" , icons:  <IoStatsChartOutline /> },     
    { id:4 , title: "", link: "/Autre", icons:  <MdOutlineCached  /> },
  
  ];


  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("siegePersonPhysiqueData", JSON.stringify(Siege));
    // Reset the dummy state to trigger rerender
    setIsStorageUpdated(false);
  }, [Siege, isStorageUpdated]);
  

  const handleButtonClick = () => {
    
    setIsStorageUpdated(true);
    const routeToNavigate = "/AutrePersPhysique";
    console.log('Navigating to:', routeToNavigate);
    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { Siege } });
  };

  const content =(
    <div className="flex justify-between ">
     <Link to="/"><div  className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-immatriculation</p></div></Link>
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

  
const Fokontany = [
  "MANGA",
  "AMBOVOALANANA", 
  "TSARAMANDROSO AMBANY",    
  "TSARAMANDROSO AMBONY",
   "MAHAVOKY SUD",
   "MANJARISOA",
   "MORAFENO",
   "MAHABIBOKELY",
    "ABATTOIR\/MAROVATO",
    "MANGARIVOTRA",
    "ARANTA",
    "ANTANIMASAJA",
    "MAHATSINJO",
    "TANAMBAO SOTEMA",
     "AMBOHIMANDAMINA",
      "ANTANIMALANDY",
      "AMBONDRONA",
      "FIOFIO",
      "AMBALAVOLA",
      "ANTANAMBAO AMBALAVATO",
      "TSARARANO AMBONY",
     "TSARARANO ANOSIKELY",
      "TSARARANO AMBANY",
      "AMBOROVY",
      "MAHAVOKY NORD",
     
]

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
      <main className="w-full h-full">    <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 3:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur le siège" className="ml-2"></TitleH1>
          </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Province "></Label>
    <Input
      type="text" 
      value={Siege.province = "MAHAJANGA "}    
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Région"></Label>
    <Input
      type="text" 
      value={Siege.region = "BOENY"}
           
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="District "></Label>
    <Input
      type="text"
      value={Siege.district = "MAHAJANGA"}
     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Commune "></Label>
    <Input
      type="text" 
      value={Siege.commune = "MAHAJANGA I"}

    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Fokontany"></Label>
    <Select
  options={Fokontany.map((option) => ({ value: option, label: option }))}
  value={Siege.fonkotany}
  onChange={(options) => {setSiege({...Siege , fonkotany: options})}}    
  className=""
/>

  </div>
 
  

          <div className="flex justify-between mt-6">
          <Label text="Adresse actuelle (siège) " />
          <Input type="text" 
          value={Siege.adresse_actuelle}
          onChange={(e)=>{setSiege({...Siege , adresse_actuelle: e.target.value})}}
          />
        </div>
        
 
  <div>

  
  
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
      </div></main>
  </div>
  <div className="bg-black w-full h-16 p-3 flex justify-center">
             <p className="text-justify  text-white ">© 2022-2023, Direction Générale des Impôts, SSIF</p>
        </div>
    </div>
  );
  }

export default SiegePersPhysique