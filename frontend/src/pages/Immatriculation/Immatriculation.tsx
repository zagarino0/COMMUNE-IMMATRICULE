import { CiLogin } from "react-icons/ci"
import Button from "../../components/common/Button"
import { Navbar } from "../../components/navbar/Nabvar"
import { CiSquareCheck } from "react-icons/ci";
import { ImPrinter } from "react-icons/im";
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
    <div className=" w-full h-full bg-[#dfe7ed]-200  ">
      <ModalLogin isOpen={isModal} onClose={()=> setIsModal(false)} quitter={()=> setIsModal(false)}></ModalLogin>
        <Navbar content={content} className="h-16 z-10"></Navbar>
        {/*party image  */}
        <div className=" flex justify-center  p-8 py-80 bg-logo "></div>
        
        <div className=" justify-center items-center  w-full h-full flex">
            <div className="flex flex-col">
              {/** title GB */}
                  <div className=" mt-40 bg-gray-400 border shadow-b-xl  flex  flex-col rounded flex justify-center mt-14 items-center position-fixed w-[1200px] h-[120px]">
                              <h1 className="text-2xl text-center font-[Tara]  flex flex-row">Immatricuation sur E-immatriculation</h1>
                              <h1 className="text-xl text-gray-600 text-center font-[Tara] flex flex-row">C'est votre première connexion : Bienvenue !</h1>  
                  </div>

                {/**contenu  */}  
                 <div className="flex">
                      <div  className="  justify-center item-center  shadow-b-xl rounded flex flex-col w-[600px] h-[1150px] mt-7">
                  
                    
                    <div className="flex mt-40  px-10">
                                       {/*party imprimer  */}
                                    <div ref={printRef} >
                                        <div className="flex flex-col border  p-4 px-4">
                                            <h1 className="text-2xl text-center item-center font-[Tara] flex flex-row">Pièces à présenter pour l'obtention du RF :</h1>
                                            <h1 className="text-2xl text-center font-[Tara] text-gray-800/60 mt-2 px-8 flex flex-row">Pour les personnes physiques</h1>
                                            <h1 className="text-1xl text-center font-[Tara] text-[#959824] cursor-pointer hover:border-b-[#959824]  w-[600px] mt-4  flex flex-row">Formulaire E-immatriculation pour les personnes physiques</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Originale et copie de la CIN</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Carte de résident pour les étrangers</h1>
                                            <h1 className=" Qfont-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Certificat de résidence et/ou Facture de la JIRAMA moins de trois mois</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Plan de répérage</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Récépissé et bordereau de versement de l'IS ou de l'IR</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Carte statistique</h1>
                                            <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-4xl mr-1 " />Titre de propriété du local (pour le contrat de bail ou contrat de domiciliation ou lettre d'occupation ou mise à disposition)</h1>
                                            <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Autres pièces originales (autorisation ministérielle, carte grise, licence,...)</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Procuration légalisée si représentant</h1>
                                            <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Référence de la demande</h1>
                                        </div>

                                        <div className="flex flex-col border mt-4 justify-center item-center p-4 px-4">
                                              <h1 className="text-2xl text-center font-[Tara] text-gray-800/70 mt-2 px-8 flex flex-row">Pour les Personnes Morales :</h1>
                                              <h1 className="text-1xl text-center font-[Tara] text-[#959824] cursor-pointer  w-[580px] mt-4 flex flex-row">Formulaire E-immatricualtion pour les personnes morales</h1>
                                              <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Statuts de la société</h1>
                                              <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Originale et copie de la CIN du premier responsable</h1>
                                              <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Carte de résident pour les étrangers</h1>
                                              <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-3xl mr-1 " />Certificat de résidence du premier responsable et/ou Facture de la JIRAMA moins de trois mois</h1>
                                              <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Plan de répérage</h1>
                                              <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Certificat d'existence</h1>
                                              <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Carte statistique</h1>
                                              <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-4xl mr-1 " />Titre de propriété du local (pour le contrat de bail ou contrat de domiciliation ou lettre d'occupation ou mise à disposition)</h1>
                                              <h1 className=" font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Autres pièces originales (autorisation ministérielle, carte grise, licence, ...)</h1>
                                              <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Procuration légalisée si représentant</h1>
                                              <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-1 flex flex-row"><CiSquareCheck className="text-2xl mr-1 " />Référence de la demande</h1>
                                        </div>

                                 {/*party demande NIF */}
                                        <div className="flex flex-col border px-6 p-4 ">
                        <h1 className="text-2xl text-center font-[Tara] flex flex-row">Pour toute nouvelle demande d'immatriculation sur <br/>E-immatriculation</h1>
                        <h1 className="text-1xl text-center font-[Tara] text-gray-800/70 mt-4 flex flex-row">Veuillez suivre la procédure suivante :</h1>
                        <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-2 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Compléter les pièces nécessaires requises</h1>
                        <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-2 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Remplir le Formulaire d'inscription en ligne</h1>
                        <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-2 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Se présenter au Bureau fiscal territorialement compétent avec :</h1>
                        <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-2 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />L'original des pièces requises</h1>
                        <h1 className=" text-center font-[Tara] text-gray-1000/70  mt-2 flex flex-row"><CiSquareCheck className="text-2xl mr-2 " />Le référence d'inscription</h1>  
                      </div>
                                    </div>
                      
                      
                    </div>
                    <div className="w-[200px] justify-center items-center cursor-pointer ml-12 mt-8">
                          <Button label="Imprimer tout" onClick={()=>handlePrint()} icon={ImPrinter}></Button>
                        </div> 
                  </div>
         
                  <div  className="bg-white flex-col  shadow-b-xl rounded flex justify-center w-[600px] h-[820px]">
              
                       {/*party acceded au formulaire */}
                  <div className="shadow-b-xl rounded border flex justify-center w-[600px] h-[150px]  px-8  py-8  ml-12">
                    <div className="flex flex-col">
                      <h1 className="text-2xl text-center font-[Tara] flex flex-row">Pour accéder au formulaire d'inscription</h1>
                      <h1 className=" text-center font-[Tara] justify-center text-[#959824] mt-4 flex flex-row"><Link to="/register"><TfiWrite className="text-2xl mr-2" ></TfiWrite></Link>Cliquer sur l'icône</h1>
                    </div>
                    
                  </div>
                  </div>
                  
                 

                 </div>
            </div>
        </div>
  
        <div className="bg-black w-full h-16 p-3 flex justify-center mt-96">
             <p className="text-justify  text-white ">© 2023-2024,Commune Urbaine Mahajanga Developped_by BOUANA SERVICE </p>
        </div>
    </div>
  )
}

export default Immatriculation