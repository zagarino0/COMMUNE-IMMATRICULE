import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import Table from "../../../components/table/table";
// import { Button } from "../../../components/common";
// import Input from "../../../components/inputs";
// import { Label } from "../../../components/label/label";
import { TiDocumentText } from "react-icons/ti";
import { TitleH1, TitleH3 } from "../../../components/title";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function ImpressionDuplicataCessation() {
  const printRef = useRef<HTMLDivElement>(null);

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

  // Fonction pour faire un  recherche d'un client avec référence fiscal

const [Data , setData] = useState([])
//const [reference_fiscal , setReference_fiscal] = useState('');
useEffect(() => {
  // Récupérer les données depuis le backend
  axios.get('http://localhost:3500/etat/contribuable/cesse')
    .then((response) => setData(response.data))
    .catch((error) => console.error(error));
}, []);




const headers = ["RF", "Raison social", "Type", "Forme juridique" , "Date de création"];
const data = Data.map((item:any)=>[item.id , item.raison_social , item.type , item.forme_juridique , item.date_creation ])


  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="IMPRESSION DU DUPLICATA DE LA CESSATION"></TitleH1></div>
{/* <div className="mt-6 flex flex-col  ">

<div className="flex justify-between mt-6">
  <Label text="Référence Fiscal"></Label>
<Input type="text" 
value={reference_fiscal}
onChange={(e)=>setReference_fiscal(e.target.value)}
className=" w-40"></Input>

</div>
<Button onClick={handleSearchClient} type="submit" text="Trouver" className="mt-6"></Button>
</div> */}
<div className="mt-10" ref={printRef}>
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-start mt-6">
 
 <button onClick={()=>handlePrint()}   className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Imprimer l'Attestation de Cessation " className="text-xs"></TitleH3></button>
 </div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[800px] h-[600px] "></Card>
  </div>
 </MainLayout>
)
}

export default ImpressionDuplicataCessation