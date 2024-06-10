import { ImFilePdf } from "react-icons/im";
import { Card } from "../../../components/card/card";
import { TitleH1, TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { SiMicrosoftexcel } from "react-icons/si";
import Table from "../../../components/table/table";
// import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import * as XLSX from 'xlsx';
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";


function ListeUtilisateur() {
  const [dataTable ,setDataTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [DataContribuable ,setDataContribuble] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3500/user/all')
      .then((response) => setDataTable(response.data))
      .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
  }, []);

  console.log(dataTable)
  const headers = ["Code", "Nom", "Prénom", "Numéro matriculé" , "Type opérateur"];
    const filteredData = dataTable.filter((item:any) =>
    item.numero_matricule.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const data = filteredData.map((item :any) => [
    item.code,
    item.nom,
    item.prenom,
    item.numero_matricule,
    item.type_operateur,
  ]);
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
  // const handleSearchButtonClick = () => {
  //   console.log(filteredData);
  // };



  const printRef = useRef<HTMLDivElement>(null);
  const downloadPDF = () => {
    // Use querySelector to get the table element
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


  const exportToExcelAllData = () => {
    // const allData = DataContribuable.map((item:any) => ({
    //   "Référence ": item.id,
    //   "Raison social" : item.raison_social ,
    //   "Référence Fiscale" : item.reference_fiscal,
    //   "Type" : item.type ,
    //   "CIN" : item.cin ,
    //   "Passport": item.numero_passeport ,
    //   "sexe" : item.sexe
    //   // ... add other properties you want to export
    // }));
  
    const ws = XLSX.utils.json_to_sheet(dataTable);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'all_data.xlsx');
  };
  const contentCard=(
      <div >

<div className="flex justify-center  mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl text-center  font-semibold  mt-4"><TitleH1 text="LISTE DES UTILISATEURS" className="text-[#959824] text-3xl border-b-2  mt-2"></TitleH1></div>
<div className="mt-6 flex flex-col">


    {/**card recherche  */} 
      <div className="mt-8 flex  justify-center ">
        <Label text="numéro matricule" className="mt-3" ></Label>
        <Input type="text" className="w-96 ml-5 mb-3"placeholder="numéro immatricule Ex:1234556" onChange={handleSearch}></Input>

      </div>
</div>
<div ref={printRef} className="overflow-y-auto mt-10">
<Table headers={headers}data={data}></Table>
</div>
<div className="flex justify-between m-4">
<button onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl text-[#19e341]"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button onClick={downloadPDF}  className="flex flex-row "><ImFilePdf   className="mr-2 text-xl text-[#e32019]"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>

</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[540px] mt-16  ">
  <Card contentCard={contentCard} className=" w-[1300px] "></Card>
  </div>
 </MainLayout>
)
}

export default ListeUtilisateur