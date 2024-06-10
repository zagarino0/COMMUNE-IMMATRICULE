//import { Link } from "react-router-dom"
import { Card } from "../../../components/card/card"
import { MainLayout } from "../../../layouts/main"
import { TiDocumentText } from "react-icons/ti"
import { ImFilePdf } from "react-icons/im"
import { SiMicrosoftexcel } from "react-icons/si"
import { TitleH3 } from "../../../components/title"
import Table from "../../../components/table/table"
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
//import { Button } from "../../../components/common";
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {  useNavigate } from "react-router-dom";
import DateFormatConverter from "../../../components/date/Date"

function ConsulterListeDemandeValide() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);      
  const navigate = useNavigate()// Initialize useHistory
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);
  const [DataContribuable ,setDataContribuble] = useState([]);
const [DataValide ,setDataValide] = useState([]);
const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        // Récupérer les données depuis le backend
        axios.get('http://localhost:3500/consultation/contribuable/avalide')
          .then((response) => setDataValide(response.data))
          .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
      }, []);
    console.log(DataValide);
    
    const exportToExcelAllData = () => {
        // const allData = DataValide.map((item : any) => ({
        //   "Référence ": item.id,
        //   "Raison social" : item.raison_social ,
        //   "Référence Fiscale" : item.reference_fiscal,
        //   "Type" : item.type ,
        //   "CIN" : item.cin ,
        //   "Passport": item.numero_passeport ,
        //   "sexe" : item.sexe
        //   // ... add other properties you want to export
        // }));
      
        const ws = XLSX.utils.json_to_sheet(DataValide);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'AllData');
        XLSX.writeFile(wb, 'all_data.xlsx');
      };



      const tableRef = useRef(null);
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

      useEffect(() => {
        localStorage.setItem("selectedRechercheConsulationData", JSON.stringify(DataSelected ));
        console.log(DataSelected)
        setIsStorageUpdated(false);
      }, [DataSelected, isStorageUpdated]);
      
      const handleButtonClick = () => {
        setIsStorageUpdated(true);
        const routeToNavigate = "/VoirContribuableDetail";
        navigate(routeToNavigate, { state: { DataSelected } });
      };
     
      const handleTableRowClick = (rowIndex: any) => {
        if (selectedRowIndex === rowIndex) {
          // Deselect the row if it's already selected
          setSelectedRowIndex(null);
          setDataSelected([]);
          console.log('Deselected Row');
        } else {
          // Select the row
          setSelectedRowIndex(rowIndex);
      
          // Extract the property values from the data object
          const selectedRowData = DataContribuable[rowIndex];
      
          setDataSelected(selectedRowData);
          console.log('Selected Row Data:', selectedRowData);
        }
      };
      
      
 const HeaderTable = [ "Référence" , "Raison social" , "référence fiscal" , "Type" , "Date d'agrement" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"]
 //const DataTable = DataValide.map((item)=>[item.id , item.raison_social , item.reference_fiscal , item.type , item.cin , item.numero_passeport , item.sexe])
 const filteredData = DataValide.filter ((item:any)=>
 item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
 );
 
 const DataTable = filteredData.map((item:any)=>
 [
  item.id , 
  item.raison_social , 
  item.reference_fiscal , 
  item.type,
  <DateFormatConverter isoDate={item.date_agrement}></DateFormatConverter> ,
  item.regime_fiscal,
  item.forme_juridique ,
 <DateFormatConverter isoDate={item.date_creation}></DateFormatConverter> ,
  item.RIB
]);

 const handleSearch = (e:any) => {
  setSearchTerm(e.target.value);
};

{/**const handleSearchButtonClick = () => {
  console.log(filteredData);
}
  */}
 
 
 
 const contentCard = (
    <div className="m-4">
        <div className="text-[#959824] text-4xl text-center font-semibold border-b-2  mt-2 m-4">LISTE DES DEMANDES A VALIDER</div>
       <div className="flex flex-col m-4">
                     {/**card recherche  */} 
                    <div className="mt-6 flex  justify-center">
                        <Label text="Reférence" className="mt-4" ></Label>
                        <Input type="text" className="w-96 ml-5 "placeholder="Reférence EX: 005" onChange={handleSearch}></Input>
                        {/**<Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
                    </div>



        <div ref={printRef} className="mt-6">
<Table headers={HeaderTable} data={DataTable} onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex} id="yourTableId" ref={tableRef} >

</Table>
        </div>
       </div>

<div className="flex justify-between mt-6 m-4">
<button onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-[#19e341] text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button onClick={downloadPDF}  className="flex flex-row "><ImFilePdf  className="mr-2 text-[#e32019] text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
< button onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-xl text-[#1956e3]"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></button>

</div>
    </div>
)
return (
<MainLayout>
<div className="overflow-y-auto h-[540px] mt-12">
<Card contentCard={contentCard} className="w-[1300px]"></Card> 
</div>
</MainLayout>
)
}

export default ConsulterListeDemandeValide