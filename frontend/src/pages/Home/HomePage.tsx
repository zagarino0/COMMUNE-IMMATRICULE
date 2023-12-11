import { Navbar } from "../../components/navbar/Nabvar"
import Repoblika from "../../assets/Repoblika.png"
import "../../components/font/font.css";
import Button from "../../components/common/Button";
import { GoPencil } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import { Link } from "react-router-dom";
import { ModalLogin } from "./Modal/ModalLogin";
import { useState } from "react";

function HomePage() {
   const [isModal , setIsModal] = useState(false);
    const content =(
        <div className="flex justify-between ">
         <a href="#" className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-mmatriculation</p></a>
         <div className="flex justify-between py-3 w-[350px]">
         <Link to="/Immatriculation" className="font-[Tara]  hover:border-b-2 hover:border-[#959824]">Immatriculation</Link>
         <a href="https://www.impots.mg" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2 ">Site DGI</a>
         <a href="#" className="font-[Tara]   hover:border-b-2 hover:border-[#959824] ml-2">Contact</a>
         </div>
         <div className="w-[180px]">
         <Button label="Se connecter" onClick={()=> setIsModal(true)} icon={CiLogin } ></Button>
         </div>
        </div>
    )
   
   
  return (
    <div className=" w-full h-full bg-gray-200 ">
      
        <Navbar content={content} className="h-16 "></Navbar>
        <div className=" flex justify-center py-14 bg-hoteldeville ">
            <div className="flex flex-col">
            <img src={Repoblika} alt="repoblika photo" />
            <div className="bg-white w-[600px] h-[100px] rounded flex items-center justify-center ">
            <p className="text-center font-[kaldera] text-4xl ">Bienvenue sur E-immatriculation</p>
            </div>
            </div>
        </div>
        
        <div className="flex justify-center  w-full h-full  py-14">
       <div className="flex flex-col">
       <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[320px] py-8">
           <div className="flex flex-col p-8">
           <h1 className="text-2xl text-center font-[Tara]   flex flex-row"><GrServices className="mr-2 text-4xl" />Immatricuation</h1>
              <p className="text-justify font-[Tara] text-gray-800/70 mt-8">La Direction Générale des Impôts a initié des procédures en vue d’améliorer les services à distance qu’il offre aux contribuables. Les personnes physiques et morales de droit malgache il a été mis à leur disposition un site web permettant, désormais, d'obtenir un Numéro d’Identification Fiscale (NIF) en ligne.</p>
              <div className="flex justify-between mt-8">
             <div className="w-60">
             <Button label="S'incrire" onClick={()=> window} icon={GoPencil} ></Button>
             </div>
             <div className="w-60">
             <Button label="Se connecter" onClick={()=> window} icon={CiLogin } ></Button>
             </div>
           </div>
           </div>
          
        </div>
        <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[350px] py-8 mt-8">
           <div className="flex flex-col p-8">
           <h1 className="text-2xl text-center font-[Tara]   flex flex-row"><IoDocumentTextOutline className="mr-2 text-4xl" />Droit de communication</h1>
              <p className="text-justify font-[Tara] text-gray-800/70 mt-8">Le droit de communication est le droit reconnu à l'administration fiscale de prendre connaissance et, au besoin, copie de documents détenus par des tiers (entreprises privées, administrations, etc.). Les renseignements recueillis à cette occasion peuvent être utilisés pour l'assiette et le contrôle de tous impôts et taxes à la charge, soit de la personne physique ou morale auprès de laquelle il est exercé, soit de tiers à cette personne.</p>
              <div className="flex justify-between mt-8">
             <div className="w-60">
             <Button label="Accéder au service" onClick={()=> window} icon={FaRegPenToSquare} ></Button>
             </div>
           
           </div>
           </div>
          
        </div>
        <div className="bg-white shadow-b-xl rounded flex  w-[800px] h-[200px] py-8 mt-8">
           <div className="flex flex-col p-8">
           <h1 className="text-2xl text-center font-[Tara]   flex flex-row"><IoDocumentTextOutline className="mr-2 text-4xl" />Déclaration des comptes ouverts</h1>
              <div className="flex justify-between mt-8">
             <div className="w-60">
             <Button label="Accéder au service" onClick={()=> window} icon={FaRegPenToSquare} ></Button>
             </div>
           
           </div>
           </div>
          
        </div>
        <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[350px] py-8 mt-8">
           <div className="flex flex-col p-8">
           <h1 className="text-2xl text-center font-[Tara]   flex flex-row"><HiOutlineClipboardDocumentList className="mr-2 text-4xl" />Télédeclaration</h1>
              <p className="text-justify font-[Tara] text-gray-800/70 mt-8">Ce service permet aux contribuables adhérents de liquider et de payer leurs impôts à partir de leur poste de travail en se connectant sur INTERNET. Il permet de liquider et de payer les déclarations mensuelles d’impôts ainsi que les déclarations annuelles : dépôt et paiement des déclarations de l'Impôt sur le Revenu (IR), de l'Impôt Synthétique (IS), de la Taxe sur la Valeur Ajoutée (TVA), de l'Impôt sur les Revenus Salariaux et Assimilés (IRSA).</p>
              <div className="flex justify-between mt-8">
             <div className="w-60">
             <Button label="Accéder au service" onClick={()=> window} icon={FaRegPenToSquare} ></Button>
             </div>
           
           </div>
           </div>
          
        </div>
        
       </div>
        </div>
        <div className="w-full h-full bg-[#959824] flex justify-between py-14 px-8">
 <div className="h-[200px] w-60">
<h1 className="text-white flex flex-row font-[Tara]"><div className="bg-white w-[5px] rounded h-[30px] mr-4"></div>DGI</h1>
<p className="text-justify font-[Tara] text-white mt-8">DIRECTION GÉNÉRALE DES IMPOTS
</p>
<p className="text-justify font-[Tara] text-white mt-2">Immeuble MFB, Antaninarenina
Antananarivo, 101, Madagascar</p>
<p className="text-justify font-[Tara] text-white mt-2">Tél: (020) xx-xxx-xx</p>
<p className="text-justify font-[Tara] text-white mt-2">E-mail: dgimpots@moov.mg</p>
 </div>
 <div className="h-[200px] w-80">
<h1 className="text-white flex flex-row font-[Tara]"><div className="bg-white w-[5px] rounded h-[30px] mr-4"></div>SSIF</h1>
<p className="text-justify font-[Tara] text-white mt-8">SERVICE DU SYSTÈME D'INFORMATION FISCALE
</p>
<p className="text-justify font-[Tara] text-white mt-2">Mandrosoa, Ambohijatovo
Antananarivo, 101, Madagascar</p>
<p className="text-justify font-[Tara] text-white mt-2">Tél: ( 8h à 16h ) 034 49 431 52, 032 12 011 74</p>
<p className="text-justify font-[Tara] text-white mt-2">E-mail: impot.ssif.hotline@gmail.com</p>
 </div>
 <div className="h-[200px] w-60">
<h1 className="text-white flex flex-row font-[Tara]"><div className="bg-white w-[5px] rounded h-[30px] mr-4"></div>NOTRE SITE</h1>
<p className="text-justify font-[Tara] text-white mt-8">SITE WEB
</p>
<p className="text-justify font-[Tara] text-blue-500 hover:cursor-pointer hover:text-white hover:border-b-2 hover:border-white mt-2">www.impots.mg</p>
<p className="text-justify font-[Tara] text-white   mt-2">Nifonline</p>
<p className="text-justify font-[Tara] text-blue-500 hover:cursor-pointer hover:text-white hover:border-b-2 hover:border-white mt-2">nifonline.impots.mg</p>
 </div>
 
        </div>
        <div className="bg-black w-full h-16 p-3 flex justify-center">
             <p className="text-justify  text-white ">© 2022-2023, Direction Générale des Impôts, SSIF</p>
        </div>
        <ModalLogin isOpen={isModal} onClose={()=>setIsModal(false)} quitter={()=>setIsModal(false)}></ModalLogin>
    </div>
  )
}

export default HomePage