import { Link, useNavigate  } from "react-router-dom";
import { Label } from "../../components/label/label";
import Input from "../../components/inputs";
import { TitleH1, TitleH3 } from "../../components/title";
import { useEffect, useState } from "react";
import Checkbox from "../../components/common/checkbox";
import Button from "../../components/common/Button";
import { FaRegHandshake } from "react-icons/fa6";
import { TiShoppingBag } from "react-icons/ti";
import Repoblika from "../../assets/Repoblika.png"
import { CiBoxList, CiLogin } from "react-icons/ci"
import { Navbar } from "../../components/navbar/Navbar";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";

import { MdOutlineCached } from "react-icons/md";
import { ModalLogin } from "../Home/Modal/ModalLogin";

interface LayoutProps {
    children?: React.ReactElement;
    currentPath?: string;
    location?: Location;
  }
  
export const ResgisterPage : React.FC<LayoutProps>  =({  currentPath ,  location })=> {
  const [isModal , setIsModal] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState(true);
  const generateId = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  };

 
  
// const registrationData = localStorage.getItem("registrationData");
// const parsedDataRegistre = JSON.parse(registrationData as string);

const [Value , setValue] = useState<{
  id:string,
  raisonsocial:string,  
  type: string | boolean,
  situationmatrimoinial:string,
  cin:string,
  sexe:string,
  etranger:boolean,
  numero_passeport:string,
  datedelivrancepasseport:string,
  datedelivrancecin:string,
  lieudelivrancecin:string,
  datenaissance:string,
  lieunaissance:string,
  formejuridique:string,
  regimefiscal:string,
  dateagrement: string,
  referenceagrement: string,
  periodegrace:string,
  datecreation: string, 
  capital: string,
  rib: string,
  numero_compte_bancaire:string
  }>({
id: generateId(),
raisonsocial:"",  
type:"",
situationmatrimoinial: "",
cin:"",
sexe: "",
etranger:false,
numero_passeport:"",
datedelivrancepasseport:"",
datedelivrancecin:"",
lieudelivrancecin:"",
datenaissance:"",
lieunaissance:"",
formejuridique:"",
regimefiscal:"",
dateagrement: "",
referenceagrement: "",
periodegrace:"",
datecreation: "",
capital: "",
rib: "",
numero_compte_bancaire:""
})


  const isActive = (path: string) => {
    return location && currentPath && location.pathname === path;
  };
  // Links navbar
const links = [
    { id:1, title: "", link: "/register" , icons:  <CiBoxList /> },
    { id:2,title: "", link: "/Activite"  , icons:  <TiShoppingBag  />},
    {id:3, title: "", link: "/Siege" , icons:  <IoStatsChartOutline /> },
    {id:4, title: "", link: "/Associe", icons:  <FaRegHandshake  /> },
    {id:5, title: "", link: "/Etablissement", icons:  <BsHouse /> },
    {id:6, title: "", link: "/Dirigeant", icons:  <RxAvatar /> },
    {id:7, title: "", link: "/Interlocuteur", icons:  <RxAvatar  /> },
    {id:8, title: "", link: "/Autre", icons:  <MdOutlineCached  /> },
  
  ];

  const content =(
    <div className="flex justify-between ">
     <Link to="/"><div className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-immatriculation</p></div></Link>
     <div className="flex justify-between py-3 w-[350px]">
     <Link to="/Immatriculation" className="font-[Tara]  hover:border-b-2 hover:border-[#959824]">Immatriculation</Link>
     <Link to="https://mairie-mahajanga.mg/" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2 ">Site CUM</Link>
     <Link to="#" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2">Contact</Link>
     </div>
     <div className="w-[180px]">
     <Button label="Se connecter" onClick={()=>{ setIsModal(true) }} icon={CiLogin } ></Button>
     </div>
    </div>
)

  // Navbar content
  const contentNavbar = (
    <nav className="flex items-center justify-center h-16">
      <ul className="flex">
        {links
          .filter((link) => {
            // Filter out specific links based on the selectedOption
            if (selectedOption) {
              return link.link !== "/Associe" && link.link !== "/Etablissement" && link.link !== "/Dirigeant" && link.link !== "/Interlocuteur";
            } else {
              return true; // Show all links for "Personne morale"
            }
          })
          .map((filteredLink) => (
            <li
              key={filteredLink.id}
              className={`mx-4 text-center py-3 px-6 font-semibold ${
                isActive(filteredLink.link) ? 'bg-[#959824] text-white rounded-md font-bold hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out' : ''
              }`}
            >
              <Link to={filteredLink.link}>
                {filteredLink.icons} {filteredLink.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );

  const navigate = useNavigate()// Initialize useHistory

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("registrationData", JSON.stringify(Value));
    // Reset the dummy state to trigger rerender
    setIsStorageUpdated(false);
  }, [Value, isStorageUpdated]);
  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);

    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = selectedOption ? "/ActivitePersPysique" : "/Activite";

    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { Value } });
  };

  return (
    <div className="h-full w-full bg-gray-200 ">
      <ModalLogin isOpen={isModal} onClose={()=> setIsModal(false)} quitter={()=> setIsModal(false)}></ModalLogin>
      <Navbar content={content} className="h-16"></Navbar>
     
      <div className=" flex justify-center py-80 bg-hoteldeville ">
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
      <main  className="w-full h-full"  >   <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 1:" className="mt-2"></TitleH3>
        <TitleH1 text="Principaux renseignements sur le contribuable" className="ml-2"></TitleH1>
        </div>

        <div className="mt-4">
          <p className="flex flex-row px-4 font-[Courier]"><CgDanger className="text-2xl"/> Les champs marqués * sont obligatoires.</p>
          </div>
        <div className="flex justify-between mt-6">
          <Label text="Nom et Prénoms ou Raison Social *" />
          <Input type="text" value={Value.raisonsocial } onChange={(e)=>{setValue({...Value , raisonsocial: e.target.value})}} />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Type *" />
          <div className="flex justify-between">
          <label className="">
          <input
  type="radio"
  value="Personne physique" // Set the value directly as a string
  className='mr-2'
  checked={selectedOption === true && Value.type === "Personne physique"}
  onChange={() => {
    setSelectedOption(true);
    setValue({ ...Value, type: "Personne physique" });
  }}
/>
    Personne physique
  </label>
  <label className=' ml-4'>
  <input
  type="radio"
  value="Personne morale" // Set the value directly as a string
  className='mr-2'
  checked={selectedOption === false && Value.type === "Personne morale"}
  onChange={() => {
    setSelectedOption(false);
    setValue({ ...Value, type: "Personne morale" });
  }}
/>
    Personne morale
  </label>
          </div>
        </div>
        {selectedOption === true && (
  <div>
    <div className='flex justify-between mt-6 '>
    <Label text="Situation matrimoniale *"></Label>
    <Input
      type="text" 
      value={Value.situationmatrimoinial }
      onChange={(e)=> {setValue({...Value , situationmatrimoinial : e.target.value})}}    
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Période grace *"></Label>
    <Input
      type="text" 
      value={Value.periodegrace }
      onChange={(e)=> {setValue({...Value , periodegrace : e.target.value})}}    
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
  <Label text="Sexe *"></Label>
  <div className="flex justify-between w-[200px]">
    <Checkbox
      label="Masculin"
      onChange={() => {
        setValue({ ...Value, sexe: "Masculin"  });
      }}
      checked={Value.sexe === "Masculin" }
    ></Checkbox>
    <Checkbox
      label="Feminin"
      onChange={() => {
        setValue({ ...Value, sexe: "Feminin" });
      }}
      checked={Value.sexe === "Feminin" }
    ></Checkbox>
  </div>
</div>

 <div className="flex justify-between mt-6">
 <Label text="Etranger *"></Label>
  <div className="flex justify-between w-[200px]">
    <Checkbox
      label="Oui"
      onChange={() => {
        setValue({ ...Value, etranger: true});
      }}
      checked={Value.etranger === true   }
    ></Checkbox>
    <Checkbox
      label="Non"
      onChange={() => {
        setValue({ ...Value, etranger: false});
      }}
      checked={Value.etranger === false   }
    ></Checkbox>
  </div>
 </div>
 { Value.etranger == false && (
<>
<div className='flex justify-between mt-6 '>
  <Label text="CIN *"></Label>
  <Input
    type="text"     
    value={Value.cin }
    onChange={(e)=>{setValue({...Value , cin: e.target.value})}}
  ></Input>
</div>
<div className='flex justify-between mt-6 '>
  <Label text="délivré le"></Label>
  <Input
    type="date"     
    value={Value.datedelivrancecin }
    onChange={(e)=>{setValue({...Value , datedelivrancecin: e.target.value})}}
  ></Input>
</div>
<div className='flex justify-between mt-6 '>
    <Label text="Lieu de délivrance *"></Label>
    <Input
      type="text"
      value={Value.lieudelivrancecin }
      onChange={(e)=> {setValue({...Value , lieudelivrancecin: e.target.value})}}     
    ></Input>
  </div>
</>
 )

 }
 { Value.etranger == true && (
 <>
  <div className='flex justify-between mt-6 '>
  <Label text="Passport "></Label>
  <Input
    type="text"     
    value={Value.numero_passeport }
    onChange={(e)=>{setValue({...Value , numero_passeport: e.target.value})}}
  ></Input>
</div>
<div className='flex justify-between mt-6 '>
  <Label text="Délivré le"></Label>
  <Input
    type="date"     
    value={Value.datedelivrancepasseport }
    onChange={(e)=>{setValue({...Value , datedelivrancepasseport: e.target.value})}}
  ></Input>
</div>

 </>
 )

 }
  
  
  <div className='flex justify-between mt-6 '>
    <Label text="Date naissance *"></Label>
    <Input
      type="date"
      value={Value.datenaissance }
      onChange={(e)=>{setValue({...Value, datenaissance : e.target.value})}}     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu naissance *"></Label>
    <Input
      type="text"
      value={Value.lieunaissance }
      onChange={(e)=>{setValue({...Value , lieunaissance : e.target.value})}}     
    ></Input>
  </div>
  </div>
)}
        <div className="flex justify-between mt-6">
          <Label text="Forme juridique *" />
          <Input type="text"
          value={Value.formejuridique }
          onChange={(e)=>{setValue({...Value , formejuridique : e.target.value})}}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Régime Fiscale *" />
          <Input type="text" 
          value={Value.regimefiscal }
          onChange={(e)=>{setValue({...Value , regimefiscal : e.target.value})}}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Création *"  />
          <Input type="date"  
          value={Value.datecreation }
          onChange={(e)=>{setValue({...Value , datecreation : e.target.value})}}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Capital en Ar *" />
          <Input type="text"
          value={Value.capital }
          onChange={(e)=>{setValue({...Value , capital : e.target.value})}}
          />
        </div>
        <div className='flex justify-between mt-6 '>
    <Label text="RIB *"></Label>
    <div className="flex justify-between w-[300px]">
    <Checkbox label="Disponible" onChange={()=>{setValue({...Value , rib : "Disponible"})}} checked={Value.rib === "Disponible" }></Checkbox>
    <Checkbox label="Pas encore" onChange={()=>{setValue({...Value , rib : "Pas encore"})}} checked={Value.rib === "Pas encore" }></Checkbox>
    </div>
    
  </div>
  <div className="flex justify-between mt-6">
          <Label text="Numéro compte bancaire *" />
          <Input type="text"
          value={Value.numero_compte_bancaire }
          onChange={(e)=>{setValue({...Value , numero_compte_bancaire : e.target.value})}}
          
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Autorisation *" />
          <Input type="date"
          value={Value.dateagrement }
          onChange={(e)=>{setValue({...Value , dateagrement : e.target.value})}}
          
          />

        </div>

        <div className="flex justify-between mt-6">
          <Label text="Référence autorisation *" />
          <Input type="text"
          value={Value.referenceagrement }
          onChange={(e)=>{setValue({...Value , referenceagrement : e.target.value})}}
          />
        </div>
        <div className="w-40">
          <Button label="Suivant" onClick={handleButtonClick}></Button>
        </div>
      </div>
    </div></main>
  </div>
  <div className="bg-black w-full h-16 p-3 flex justify-center">
             <p className="text-justify  text-white ">© 2023-2024, Commune Urbaine Mahajanga , CUM</p>
        </div>
    </div>
  );
};