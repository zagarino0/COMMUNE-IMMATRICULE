
import Button from "../../../components/common/Button";
import { ImPrinter} from "react-icons/im";
import Images from "../../../assets/images.jpg"
import { useRef , useState} from "react";  
//import { useNavigate } from "react-router-dom";
import axios from "axios";




function ImpressionCessation() {

  //let navigate = useNavigate();
  const selectedData = localStorage.getItem("selectedBlocageData");
  const [value]=useState(
     JSON.parse(selectedData as string)
    );
  const [language, setLanguage] = useState("mg"); // State to track selected language  
  console.log(value)

    const  handleSendImp = async () =>{

      const Data = {
        "nrf":value.reference_fiscal,
        "raison social/Nom et Prenom":value.raison_social,
        "nom commercial":value.nom_commercial,
        "siege social":value.siege_social,

      }
      try{
        const response = await axios.post("http://localhost:3500/contribuable", Data);
        console.log("serveur Response :", response.data);
        alert(`impression pour ${value.reference_fiscal}`)
      }catch(error){
         console.log(error)
      }
    }

  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = () => {
    if (printRef.current) {
      const content = printRef.current.innerHTML;
      const originalContent = document.body.innerHTML;

      // Ajoutez une feuille de style pour l'impression
      const printStyle = document.createElement("style");
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
      setLanguage(e.target.value);
    }
  };

  return (
    <div className=" w-full h-full bg-white ">
      <div   className="flex justify-center ">
        <div className="flex flex-col">
      
        <div>
            {language === "fr" && (
              <>
                  <div  className="flex flex-col bg-white  w-[800px]">
              <div  ref={printRef}   className=" p-4 font-[Time New Roman ] flex flex-col  border rounded-lg shadow-md">
              {/* bloc de contexte fr  */}
              <form>
              <img src={Images} alt="images"  className="w-[180px] h-[100px] px-10 mt-6"/>

                <h4 className="font-[arial] font-bold border-b-3 border-[#8] mt-2">COMMUNE URBAINE DE <br /> <span className="px-10">MAHAJANGA</span></h4>
              
                <h4 className="  text-center font-bold mb-1  mt-4 flex flex-col">
                  ATTESTATION <br />DE CESSATION D'ACTIVITE
                </h4>
                      
                <div className="mb-4 px-6 mt-8 relative">
                 
                  <p className="px-10">LE CHEF DE L’EXECUTIF soussigné, atloteste que :</p>
                  <div className="font-[arial] ">NRF :{value.reference_fiscal}</div>
                  <div className="font-[arial] ">Raison Sociale: {value.raison_social} </div>
                  <div className="font-[arial] ">Nom Commercial: </div>
                  <div className="font-[arial] ">Siège Social/Adresse:{value.siege} </div>
                  <div className="font-[arial] ">Lieu d’exploitation: </div>
                  <div className="font-[arial] ">Activité: {value.activite}</div>
                  <div className="px-12 mt-6">
                    A cessé son activité à la date du: {value.date_creation} suivant accord
                    du {value.date_cessation}
                  </div>
                  <p className="px-8 mt-12">
                    En foi de quoi, la présente attestation lui est délivrée sur sa demande pour servir et valoir ce que droit.
                  </p>
                  <p className="px-40 mt-10 font-[arial]">Fait à LA COMMUNE URBAINE DE MAHAJANGA, le....</p>
      
                </div>
              
              </form>
             
              </div>
                  </div>
              </>
            )} 
<br />
                {language === "mg" && (
                    <>
                        <div className="flex flex-col bg-white  w-[800px]">
                              <div  ref={printRef}   className="p-4 font-[Time New Roman ] flex flex-col  border rounded-lg shadow-md">
                                {/* bloc de contexte mg  */}
                                <form>
                                  <img src={Images} alt="images"  className="w-[180px] h-[100px] px-10 mt-6"/>
                                    <h4 className="font-[arial] font-bold border-b-3 border-[#8] mt-2">KAOMININA AMBONY VOHITRY<br/> <span className="px-20">MAHAJANGA</span></h4>
                                    <h4 className="  text-center font-bold mb-1  mt-4 flex flex-col">
                                    FANAMARINANA  <br />FIJANONANAAMIN’NY ASA ATAO</h4>
                                
                                  <div className="mb-4 px-6 mt-8  relative">
                                      <p className="px-10">Ny LEHIBEN’NY MPANANTANTERAKA , izay manao sonia eto ambany dia manamarina fa ny :</p>
                                      <div className="font-[arial] ">NRF :{value.reference_fiscal}</div>
                                      <div className="font-[arial] ">Anarana : {value.raison_social} </div>
                                      <div className="font-[arial] ">Anaran'ny tsena : </div>
                                      <div className="font-[arial] ">Adiresy fonenana:{value.siege} </div>
                                      <div className="font-[arial] ">Adiresy fiasana: </div>
                                      <div className="font-[arial] ">Asa atao : {value.activite}</div>
                                      <div className="px-12 mt-6">
                                      Dia nijanona tamin'ny asany nanomboka tamin'ny  {value.date_creation} araka ny fankatoavana ny taratasy fangatahana  izay natao sonia tamin'ny  {value.date_cessation}
                                  </div>
                                      <p className="px-8 mt-12">
                                      rehefa nahaloa ara-dalàna ny hetra rehetra mahakasika azy mialoha ny fijanonany tanteraka amin'ny asa. Omena azy ity fanamarinana ity ary azo ampiasaina amin'izay mety ilàna azy
                                      </p>
                                      <p className="px-40 mt-10 font-[arial]">Natao teto amin'ny KAOMININA MAHAJANGA , ny ....</p>
                               </div>
                            
                                </form>
                              </div>
                        </div>
                    </>
                )}
        </div>       

          <div className=" mt-6 mb-6 ">
            {/* select to language*/}
            
            <div className=" flex font-[Tara]   mb-6 ">
           
              <p className="px-8">Choisissez la version que Vous souhaitiez imprimer </p>
            <select className="border rounded border-2 border-[#159ce6] px-8 font-bold text-[#159ce6]" value={language} onChange={(e) => setLanguage(e.target.value)}>
               <option value="fr"> Français</option>
               <option value="mg"> Malagasy</option>
            </select>
            </div>
                {/* Button to imprimate*/} 
           {/**route action button : POST contribuable/cessation/attestion  */}
            <Button label="Imprimer" onClick={() => handlePrint()}icon={ImPrinter}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpressionCessation;
