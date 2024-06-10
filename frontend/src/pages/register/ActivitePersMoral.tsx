import { CiBoxList } from "react-icons/ci";
import { Link,  useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { TiShoppingBag } from "react-icons/ti";

import { CiLogin } from "react-icons/ci"
import { CgDanger } from "react-icons/cg";

import { Navbar } from "../../components/navbar/Navbar";
import { IoStatsChartOutline } from "react-icons/io5";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { MdOutlineCached } from "react-icons/md";
import { ModalLogin } from "../Home/Modal/ModalLogin";
import { useEffect, useState } from "react";
import Checkbox from "../../components/common/checkbox";
interface LayoutProps {
    children?: React.ReactElement;
    currentPath?: string;
  }
  
const ActivitePersPysique: React.FC<LayoutProps>  = ({  currentPath })=> {
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

  let navigate = useNavigate();

 
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
    localStorage.setItem("activitePersonPhysiqueData", JSON.stringify(Activite));
    // Reset the dummy state to trigger rerender
    setIsStorageUpdated(false);
  }, [Activite, isStorageUpdated]);
  

    const handleButtonClick = () => {

    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);
      const routeToNavigate = "/SiegePersPhysique";
      console.log('Navigating to:', routeToNavigate);
    
      // Use navigate to navigate to the determined route
      navigate(routeToNavigate, { state: { Activite } });
     
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
        <main className="w-full h-full">       <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 2:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur les activités" className="ml-2"></TitleH1>
          </div>

          <div className="mt-4">
          <p className="flex flex-row px-4 font-[Courier]"><CgDanger className="text-2xl"/> Les champs marqués * sont obligatoires.</p>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Activités *" />
            <Input type="text"
            value={Activite.activite}
            onChange={(e)=> setActivite({...Activite , activite: e.target.value})}
            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités *"></Label>
      <Input
        type="text"  
        value={Activite.precision_activite}
        onChange={(e)=> {setActivite({...Activite , precision_activite : e.target.value})}}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Référence Fiscale (RF) *"></Label>
      <Input
        type="text"  
        value={Activite.nif}
        onChange={(e)=> {setActivite({...Activite , nif : e.target.value})}}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro statistique *"></Label>
      <div className="flex flex-col">
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Disponible" onChange={(checked)=>setActivite({...Activite , statistique: checked})} checked={Activite.statistique === true}></Checkbox>
      <Checkbox label="Pas encore Disponible" onChange={(checked)=>setActivite({...Activite , statistique: ! checked})} checked={Activite.statistique === false }></Checkbox>
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
      <Label text="Date de délivrance statistique *"></Label>
      <Input
        type="date"  
        value={Activite.date_delivrance_statistique}
        onChange={(e)=> setActivite({...Activite , date_delivrance_statistique: e.target.value})}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce *"></Label>
      <Input
        type="text"
        value={Activite.registre_commerce}
        onChange={(e)=>setActivite({...Activite , registre_commerce: e.target.value})}     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce *"></Label>
      <Input
        type="date"
        value={Activite.date_registre_commerce}
        onChange={(e)=> setActivite({...Activite , date_registre_commerce : e.target.value})}     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable * "></Label>
      <Input
        type="date"     
        value={Activite.debut_exercice}
        onChange={(e)=> setActivite({...Activite , debut_exercice : e.target.value})}
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable *" />
            <Input type="date"
            value={Activite.cloture_exercice}
            onChange={(e)=> setActivite({...Activite , cloture_exercice: e.target.value})}
            />
          </div>
               
    <div className="flex justify-between mt-6">
            <Label text="Nombre salarié *" />
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
      </div></main>
    </div>
    <div className="bg-black w-full h-16 p-3 flex justify-center">
               <p className="text-justify  text-white ">© 2022-2023, Developped by BOUANA SERVICE</p>
          </div>
      </div>
    );
    }
export default ActivitePersPysique