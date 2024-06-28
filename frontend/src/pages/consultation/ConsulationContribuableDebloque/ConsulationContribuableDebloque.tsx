//import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import { TitleH3 } from "../../../components/title";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";
import Table from "../../../components/table/table";
//import { Button } from "../../../components/common";
import {  useNavigate } from "react-router-dom";
//import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DateFormatConverter from "../../../components/date/Date";

function ConsulationContribuableDebloque() {
  const [DataSelected, setDataSelected] = useState([]);
  const [DataContribuable] = useState([]);
  const [DataDebloque ,setDataDebloque] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const tableRef = useRef(null);
  const navigate = useNavigate()


useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/consultation/contribuable/debloque')
      .then((response) => setDataDebloque(response.data))
      .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
  }, []);

{/**
  const options = [
    { value: 'référence', label: 'référence' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'Référence fiscal', label: 'Référence fiscal' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];
*/}



  const exportToExcelAllData = () => {
    // const allData = DataDebloque.map((item : any) => ({
    //   "Référence ": item.id,
    //   "Raison social" : item.raison_social ,
    //   "Référence Fiscale" : item.reference_fiscal,
    //   "Type" : item.type ,
    //   "CIN" : item.cin ,
    //   "Passport": item.numero_passeport ,
    //   "sexe" : item.sexe
    //   // ... add other properties you want to export
    // }));
  
    const ws = XLSX.utils.json_to_sheet(DataDebloque);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'all_data.xlsx');
  };





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


  const HeaderTable = [ "Référence" , "Raison social" , "référence fiscal" , "Type"  , "Date d'agrement" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"]
  
  const filteredData = DataDebloque.filter((item:any)=>
  item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const DataTable = filteredData.map((item:any) =>[
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
      const selectedRowData = DataDebloque[rowIndex];
  
      setDataSelected(selectedRowData);
      console.log('Selected Row Data:', selectedRowData);
    }
  };
  
   useEffect(() => {
    localStorage.setItem("selectedRechercheConsulationDataDebloque", JSON.stringify(DataSelected ));
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
   const handleButtonClick = () => {
    setIsStorageUpdated(true);
    const routeToNavigate = "/VoirContribuableDetailDebloque";
    navigate(routeToNavigate, { state: { DataSelected } });
  };
   
{/**  const handleSearchButtonClick = () => {
    console.log(filteredData);
  }; */}
 
  const contentCard = (
    <div className=" flex flex-col">
        <div className=" font-semibold text-[#959824] text-center  text-4xl mt-6 border-b-2 ">
          CONSULTATION DES CONTRIBUABLES DEBLOQUES
        </div>

        <div className="flex flex-col mt-2">
            {/**card recherche  */} 
                    <div className="mt-6 flex  justify-center ">
                        <Label text="Réference" className="mt-4" ></Label>
                        <Input type="text" className="w-96 ml-5 "placeholder="Reférence EX:0005" onChange={handleSearch}></Input>
                       {/** <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button>*/} 
                    </div>
        </div>


{/* <div className="mt-4 text-xl font-semibold">
  veuillez remplir vos critères ci-dessous : 
</div> */}
{/* <div className="flex justify-between mt-4">
<Label text="Domaine de recherche :" className="mt-4"></Label>
<Select options={options} value={Debloque.domaine_recherche} onChange={(options)=>{setDebloque({...Debloque ,domaine_recherche: options})}} className="w-96 mx-6"/>
</div> */}
{/* {Debloque.domaine_recherche === "Raison sociale" &&(

<div className="mt-4 flex justify-between">
<Label text="Raison Social :"></Label>
<Input type="text" className="w-96  "
value={Debloque.raison_social}
onChange={(e)=> {setDebloque({...Debloque , raison_social: e.target.value})}}
></Input>
</div>
) 
}

{Debloque.domaine_recherche === "référence" &&(

<div className="mt-4 flex justify-between">
<Label text="Réference :"></Label>
<Input type="text" className="w-96  "
value={Debloque.reference}
onChange={(e)=> {setDebloque({...Debloque , reference: e.target.value})}}
></Input>
</div>
) 
}
{Debloque.domaine_recherche === "Référence fiscal" &&(

<div className="mt-4 flex justify-between">
<Label text="Référence fiscal :"></Label>
<Input type="text" className="w-96  "
value={Debloque.reference_fiscal}
onChange={(e)=> {setDebloque({...Debloque , reference_fiscal: e.target.value})}}
></Input>
</div>
) 
}
{Debloque.domaine_recherche === "CIN" &&(

<div className="mt-4 flex justify-between">
<Label text="CIN :"></Label>
<Input type="text" className="w-96  "
value={Debloque.cin}
onChange={(e)=> {setDebloque({...Debloque , cin: e.target.value})}}
></Input>
</div>
) 
}
{Debloque.domaine_recherche === "Adresse" &&(

<div className="mt-4 flex justify-between">
<Label text="Adresse :"></Label>
<Input type="text" className="w-96  "
value={Debloque.adresse}
onChange={(e)=> {setDebloque({...Debloque , adresse: e.target.value})}}
></Input>
</div>
) 
}
{Debloque.domaine_recherche === "Nom commercial" &&(

<div className="mt-4 flex justify-between">
<Label text="Nom Commercial :"></Label>
<Input type="text" className="w-96  "
value={Debloque.nom_commercial}
onChange={(e)=> {setDebloque({...Debloque , nom_commercial: e.target.value})}}
></Input>
</div>
) 
}
<div className="mt-4 flex justify-between">
  <Label text="Date du blocage :"></Label>
<Input type="date" className="w-96  "
value={Debloque.date_debut}
onChange={(e)=> {setDebloque({...Debloque , date_debut: e.target.value})}}
></Input>
</div>
<div className="mt-4 flex justify-between">
  <Label text="Date fin :"></Label>
<Input type="date" className="w-96 mx-[120px] "
value={Debloque.date_fin}
onChange={(e)=> {setDebloque({...Debloque , date_fin: e.target.value})}}
></Input>
</div>


<div className="mt-4">
<Button text="Lister" className="rounded w-40"></Button>
</div> */}
<div ref={printRef} className="flex justify-center mt-12 w-[1300px]" >

<Table ref={tableRef} headers={HeaderTable} data={DataTable} onClick={handleTableRowClick} selectedRowIndex={selectedRowIndex}></Table>
</div>
<div className="flex justify-between m-4 p-6">
<button onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl text-[#19e341]"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  onClick={downloadPDF}  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl text-[#e32019]"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
< button onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-xl text-[#1956e3]"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></button>
{/* to="/VoirContribuableDetail"  */}
</div>
    </div>
  )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
   <Card contentCard={contentCard} className="w-[1300px]"></Card> 
   </div>
   </MainLayout>
  )
}


export default ConsulationContribuableDebloque