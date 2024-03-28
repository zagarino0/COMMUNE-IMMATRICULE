import { CiLogin } from "react-icons/ci"
import Button from "../../components/common/Button"
import { Navbar } from "../../components/navbar/Nabvar"
import Repoblika from "../../assets/Repoblika.png"
import { CiSquareCheck } from "react-icons/ci";
import { ImPrinter } from "react-icons/im";
import { GoDot } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { ModalLogin } from "../Home/Modal/ModalLogin";
function Immatriculation() {
  const printRef = useRef<HTMLDivElement>(null);
  const [isModal , setIsModal] = useState(false);
  const content = (
    <div className="flex justify-between ">
      <Link to="/" className="flex justify-start">
        <span className="font-semibold flex flex-row">
          <p className="text-3xl text-[#959824]  ">E</p>
          <p className="text-3xl">-immatriculation</p>
        </span>
      </Link>
      <div className="flex justify-between py-3 w-[350px]">
        <span className="font-[Tara] hover:border-b-2 hover:border-[#959824]">
          Immatriculation
        </span>
        <a
          href="https://mairie-mahajanga.mg/"
          className="font-[Tara] hover:border-b-2 hover:border-[#959824] ml-2"
        >
          Site CUM
        </a>
        <a
          href="#"
          className="font-[Tara] hover:border-b-2 hover:border-[#959824] ml-2"
        >
          Contact
        </a>
      </div>
      <div className="w-[180px]">
        <Button
          label="Se connecter"
          onClick={() => setIsModal(true)}
          icon={CiLogin}
        ></Button>
      </div>
    </div>
  );
   
  const handlePrint = () => {
    if (printRef.current) {
      const content = printRef.current.innerHTML;
      const originalContent = document.body.innerHTML;
  
      // Ajoutez une feuille de style pour l'impression
      const printStyle = document.createElement('style');
      printStyle.innerHTML =
        '@media print { body { visibility: hidden; } .print-content { visibility: visible; } }';
      document.head.appendChild(printStyle);
  
      document.body.innerHTML = `<div class="print-content">${content}</div>`;
  
      window.print();
  
      // Supprimez la feuille de style après l'impression
      document.head.removeChild(printStyle);
  
      // Restaurez le contenu original après l'impression
      document.body.innerHTML = originalContent;
      window.location.reload();
    }
  };
  
  return (
    <div className=" w-full h-full bg-gray-200 ">
      <ModalLogin isOpen={isModal} onClose={()=> setIsModal(false)} quitter={()=> setIsModal(false)}></ModalLogin>
        <Navbar content={content} className="h-16 z-10"></Navbar>
        <div className=" flex justify-center py-14 bg-hoteldeville ">
            <div className="flex flex-col">
            <img src={Repoblika} alt="repoblika photo" />
            <div className="bg-white w-[600px] h-[100px] rounded flex items-center justify-center ">
            <p className="text-center font-[kaldera] text-4xl ">Immatriculation</p>
            </div>
            </div>
        </div>
        
        <div className="flex justify-center  w-full h-full  py-14">
       <div className="flex flex-col">
       <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[120px] py-8">
       <div className="flex flex-col">
       <h1 className="text-2xl text-center font-[Tara]   flex flex-row">Immatricuation sur E-immatriculation</h1>
       
       <h1 className="text-xl text-gray-600 text-center font-[Tara]    flex flex-row">C'est votre première connexion : Bienvenue !</h1>
       
       </div>
        </div>
        <div  className="bg-white shadow-b-xl rounded flex flex-col px-8 w-[800px] h-[1480px] py-8 mt-8">
          <div ref={printRef} className="flex flex-col">
          <div className="flex flex-col">
          <h1 className="text-2xl text-center font-[Tara]    flex flex-row">Pièces à présenter pour l'obtention du RF :</h1>
          <h1 className="text-2xl text-center font-[Tara] text-gray-800/70 mt-8  flex flex-row">Pour les personnes physiques</h1>
          <h1 className="text-2xl text-center font-[Tara] text-[#959824] cursor-pointer hover:border-b-[#959824] hover:border-b-2 w-[600px] mt-8  flex flex-row">Formulaire E-immatriculation pour les personnes physiques</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-8 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Originale et copie de la CIN</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Carte de résident pour les étrangers</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Certificat de résidence et/ou Facture de la JIRAMA moins de trois mois</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Plan de répérage</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Récépissé et bordereau de versement de l'IS ou de l'IR</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Carte statistique</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Titre de propriété du local (pour le contrat de bail ou contrat de domiciliation ou lettre d'occupation ou mise à disposition)</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Autres pièces originales (autorisation ministérielle, carte grise, licence, ...)</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Procuration légalisée si représentant</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Référence de la demande</h1>
          
          
          </div>
          <div className="flex flex-col mt-8">
        
          <h1 className="text-2xl text-center font-[Tara] text-gray-800/70 mt-8  flex flex-row">Pour les Personnes Morales :</h1>
          <h1 className="text-2xl text-center font-[Tara] text-[#959824] cursor-pointer hover:border-b-[#959824] hover:border-b-2 w-[580px] mt-8  flex flex-row">Formulaire E-immatricualtion pour les personnes morales</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-8 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Statuts de la société</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Originale et copie de la CIN du premier responsable</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Carte de résident pour les étrangers</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Certificat de résidence du premier responsable et/ou Facture de la JIRAMA moins de trois mois</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Plan de répérage</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Certificat d'existence</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Carte statistique</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Titre de propriété du local (pour le contrat de bail ou contrat de domiciliation ou lettre d'occupation ou mise à disposition)</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Autres pièces originales (autorisation ministérielle, carte grise, licence, ...)</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Procuration légalisée si représentant</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Référence de la demande</h1>
                  
          </div>
         
          </div>
          <div className="w-[200px] mt-8">
         <Button label="Imprimer tout" onClick={()=>handlePrint()} icon={ImPrinter  } ></Button>
         </div>
        </div>
        
        <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[450px]  px-8  py-8 mt-8">
          <div className="flex flex-col">
          <h1 className="text-2xl text-center font-[Tara]    flex flex-row">Pour toute nouvelle demande d'immatriculation au Numéro d'Identification Fiscale (NIF)</h1>
          <h1 className="text-2xl text-center font-[Tara] text-gray-800/70 mt-8  flex flex-row">Veuillez suivre la procédure suivante :</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><GoDot className="text-2xl mr-2 " />Compléter les pièces nécessaires requises</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><GoDot className="text-2xl mr-2 " />Remplir le Formulaire d'inscription en ligne</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><GoDot className="text-2xl mr-2 " />Se présenter au Bureau fiscal territorialement compétent avec :</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><GoDot className="text-2xl mr-2 " />L'original des pièces requises</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70  mt-4 flex flex-row"><GoDot className="text-2xl mr-2 " />Le référence d'inscription</h1>
          
          </div>
          
        </div>
        <div className="bg-white shadow-b-xl rounded flex justify-center w-[800px] h-[200px]  px-8  py-8 mt-8">
          <div className="flex flex-col">
          <h1 className="text-2xl text-center font-[Tara]    flex flex-row">Pour accéder au formulaire d'inscription</h1>
          <h1 className=" text-center font-[Tara] text-gray-800/70 mt-8  flex flex-row"><Link to="/register"><TfiWrite className="text-2xl mr-2" ></TfiWrite></Link>Cliquer sur l'icône</h1>
          
          
          </div>
          
        </div>
       </div>
        </div>
  
        <div className="bg-black w-full h-16 p-3 flex justify-center">
             <p className="text-justify  text-white ">© 2023-2024, Commune Urbaine Mahajanga , CUM </p>
        </div>
    </div>
  )
}

export default Immatriculation