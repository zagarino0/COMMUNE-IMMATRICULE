import { Link } from "react-router-dom"
import { Card } from "../../../components/card/card"
import { MainLayout } from "../../../layouts/main"
import { TiDocumentText } from "react-icons/ti"
import { ImFilePdf } from "react-icons/im"
import { SiMicrosoftexcel } from "react-icons/si"
import Table from "../../../components/table/table"
import { TitleH3 } from "../../../components/title"
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
import { Button } from "../../../components/common";
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ConsulterListeMJRValider() {

  
const [DataMJRValide ,setDataMJRValide] = useState([]);
const [searchTerm, setSearchTerm] = useState("")
useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/consultation/contribuable/miseajouravalide')
      .then((response) => setDataMJRValide(response.data))
      .catch((error) => console.error(error));
  }, []);

  const exportToExcelAllData = () => {
    const allData = DataMJRValide.map((item : any) => ({
      "Référence ": item.id,
      "Raison social" : item.raison_social ,
      "Référence Fiscale" : item.reference_fiscal,
      "Type" : item.type ,
      "CIN" : item.cin ,
      "Passport": item.numero_passeport ,
      "sexe" : item.sexe
      // ... add other properties you want to export
    }));
  
    const ws = XLSX.utils.json_to_sheet(allData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'all_data.xlsx');
  };



  const tableRef = useRef(null);

  const downloadPDF = () => {
    // Use querySelector to get the table element
    const table = document.querySelector("#yourTableId"); // Replace with the actual ID or class of your table

    if (!table) {
      console.error("Table not found");
      return;
    }

    // Convert the table to a canvas
    html2canvas(table).then((canvas) => {
      // Convert the canvas to a PDF using jsPDF
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

      // Download the PDF
      pdf.save('table.pdf');
    });
  };
  const HeaderTable = [ "Référence" , "Raison social" , "référence fiscal" , "Type" , "CIN" , "Passport" , "Sexe"]
  //const DataTable = DataMJRValide.map((item)=>[item.id , item.raison_social , item.reference_fiscal , item.type , item.cin , item.numero_passeport , item.sexe])
   
  const filteredData = DataMJRValide.filter ((item:any)=>
  item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const DataTable = filteredData.map((item:any)=>
  [
   item.id,
   item.raison_social,
   item.reference_fiscal ,
   item.type,
   item.cin,
   item.numero_passeport,
   item.sexe,
  ]);
 
  const handleSearch = (e:any) => {
   setSearchTerm(e.target.value);
 };
 
 const handleSearchButtonClick = () => {
   console.log(filteredData);
 }
  
  
  
  const contentCard = (
     <div className="m-4">
         <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4">Liste des mise à jour à valider</div>
        <div className="flex flex-col m-4">

                               {/**card recherche  */} 
                     <div className="mt-6 flex  justify-between ">
                        <Label text="Reférence" className="mt-4" ></Label>
                        <Input type="text" className="w-96 ml-5 "placeholder="Reférence EX: 005" onChange={handleSearch}></Input>
                        <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button>
                    </div>

 
         <div className="mt-6">
 <Table headers={HeaderTable} data={DataTable} id="yourTableId" ref={tableRef}>
 
 </Table>
         </div>
        </div>
 
 <div className="flex justify-between mt-6 m-4">
 <button onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
 <button onClick={downloadPDF}  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
 <Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>
 
 </div>
     </div>
 )
 return (
 <MainLayout>
 <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
 <Card contentCard={contentCard} className="w-[1000px] h-[600px] "></Card> 
 </div>
 </MainLayout>
 )
 }

export default ConsulterListeMJRValider