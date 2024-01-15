import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";
import { FaRegHandshake } from "react-icons/fa6";
import { TiShoppingBag } from "react-icons/ti";
import Repoblika from "../../assets/Repoblika.png"
import { CiLogin } from "react-icons/ci"
import { Navbar } from "../../components/navbar/Navbar";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineCached } from "react-icons/md";
import { ModalLogin } from "../Home/Modal/ModalLogin";
import { useState } from "react";
interface LayoutProps {
    children: React.ReactElement;
    currentPath: string;
  }
  
export const Layout : React.FC<LayoutProps>  =({ children, currentPath })=> {
  const [isModal , setIsModal] = useState(false);
  // Links navbar
const links = [
    { title: "", link: "/register" , icons:  <CiBoxList /> },
    { title: "", link: "/Activite"  , icons:  <TiShoppingBag  />},
    { title: "", link: "/Siege" , icons:  <IoStatsChartOutline /> },
    { title: "", link: "/Associe", icons:  <FaRegHandshake  /> },
    { title: "", link: "/Etablissement", icons:  <BsHouse /> },
    { title: "", link: "/Dirigeant", icons:  <RxAvatar /> },
    { title: "", link: "/Interlocuteur", icons:  <RxAvatar  /> },
    { title: "", link: "/Autre", icons:  <MdOutlineCached  /> },
  
  ];

  const content =(
    <div className="flex justify-between ">
     <Link to="/"><a href="#" className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-mmatriculation</p></a></Link>
     <div className="flex justify-between py-3 w-[350px]">
     <Link to="/Immatriculation" className="font-[Tara]  hover:border-b-2 hover:border-[#959824]">Immatriculation</Link>
     <a href="https://mairie-mahajanga.mg/" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2 ">Site CUM</a>
     <a href="#" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2">Contact</a>
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
      <main className="w-full h-full">{children}</main>
  </div>
  <div className="bg-black w-full h-16 p-3 flex justify-center">
             <p className="text-justify  text-white ">© 2022-2023, Direction Générale des Impôts, SSIF</p>
        </div>
    </div>
  );
};