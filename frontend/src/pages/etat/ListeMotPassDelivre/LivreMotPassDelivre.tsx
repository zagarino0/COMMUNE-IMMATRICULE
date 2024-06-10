// import { Button } from "../../../components/common";
//import Select from "../../../components/inputs/selectInput";
//import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { TitleH1, TitleH3 } from "../../../components/title";
// import { TiDocumentText } from "react-icons/ti";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";
import Table from "../../../components/table/table";
// import {  useNavigate } from "react-router-dom";
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
import {useEffect, useState, useRef } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import DateFormatConverter from "../../../components/date/Date";

function LivreMotPassDelivre() {
  //const [selectedOption] = useState ('')
  const tableRef = useRef(null);
  // const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected ] = useState([]);  
  const [DataContribuable ,setDataContribuble] = useState([]);
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    handleCesse();
  }, []);
  const handleCesse = async () =>{
            try
            {
                  const response = await axios.get('http://localhost:3500/etat/contribuable/valide', {});
                  setDataContribuble(response.data)
            }     
            catch(error)
            {
                    console.log('An  error occurred during the request',error);   
              alert(`Une erreur de reponse  : ${error}`)
                  }
  };
   console.log(DataContribuable);
   
    const headers = [ "Référence" , "Raison social" , "mot de passe " , "référence fiscal" , "Type" , "Date d'agrement" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"]
    const filteredData = DataContribuable.filter((item:any) => 
      item.reference_fiscal && item.reference_fiscal.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
    
  const data = filteredData.map((item:any) =>  [
    item.id , 
    item.mot_de_passe ,
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

  useEffect(() => {
    localStorage.setItem("selectedRechercheConsulationData", JSON.stringify(DataSelected ));
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);

  // const handleTableRowClick = (rowIndex : any) => {
  //   setSelectedRowIndex(rowIndex);
    
  //   // Extract the property values from the data object
  //   const selectedRowData = DataContribuable[rowIndex];
   
  //   setDataSelected(selectedRowData);
  //   console.log('Selected Row Data:', DataSelected);
  //  };

  //  const handleButtonClick = () => {
  //   setIsStorageUpdated(true);
  //   const routeToNavigate = "./InfoDemandeValide";
  //   navigate(routeToNavigate, { state: { DataSelected } });
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
  
    const ws = XLSX.utils.json_to_sheet(DataContribuable);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'all_data.xlsx');
  };

  // const handleSearchButtonClick = () => {
  //   console.log(filteredData);
  // };

{/**
  //option select input
  const options = [
    { value: 'référence', label: 'référence' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'NIF', label: 'NIF' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];

  // onChange in the select input 
  const handleOptionChange = (value:any) => {
    setSelectedOption(DataContribuable[value]);
  };
*/}
  const contentCard=(

  <div className="flex justify-center items-center mt-4" >
      <div className="mt-14 flex flex-col mx-6">
        <div className="text-[#959824] text-3xl text-center font-semibold  mt-2"><TitleH1 className="text-[#959824] text-3xl text-center font-semibold border-b-2  mt-4" text="CONSULTATION DES MOTS DE PASSE DES REFERENCES FISCALS DELIVRES"></TitleH1></div>
              <div className="mt-6 flex flex-col  ">

                    {/**card recherche  */} 
                    <div className="mt-8 flex  justify-center">
                      <Label text="Reference fiscale" className="mt-2" ></Label>
                      <Input type="text" className="w-96 ml-5 " placeholder="Reférence fiscale EX: 0001236" onChange={handleSearch}></Input>
                          {/* <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
                    </div>
                
                {/** 
                 * 
                 * 
                 * <div className="flex justify-between mt-6">
                    <Label text="Date de Validation , Du"></Label>
                  <Input type="date"  className=" w-40"></Input>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Label text="Au"></Label>
                  <Input type="date"  className=" w-40"></Input>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Label text="Région"></Label>
                  <Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Label text="CF Gestionnaire"></Label>
                  <Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
                  </div>
                * 
                * 
                * <Button text="Lister" type="button" className="mt-6" onClick={handleSearch}></Button>
                * 
                * 
                */}

              </div>
              <div ref={printRef} className="overflow-y-auto mt-10">
                  <Table headers={headers} data={data} 
                  id="yourTableId" ref={tableRef}
                  // onClick={handleTableRowClick}
                  // selectedRowIndex={selectedRowIndex}
                  ></Table>
              </div>
              <div className="flex justify-between m-4">
                  <button onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl text-[#19e341]"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
                  <button onClick={downloadPDF}  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl text-[#e32019]"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
                
              </div>
        <div>
      </div>
        </div>
  </div>
      
  )
return (
  <MainLayout>
  <div className="overflow-y-auto h-[550px] mt-12 ">
      <Card contentCard={contentCard} className="w-[1300px] "></Card>
  </div>
 </MainLayout>
)
}
export default LivreMotPassDelivre