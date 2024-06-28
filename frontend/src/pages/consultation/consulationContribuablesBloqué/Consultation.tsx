import { useEffect, useRef, useState } from "react";
import { Card } from "../../../components/card/card"
import Input from "../../../components/inputs"
// import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
//import { Button } from "../../../components/common";
import { useNavigate} from "react-router-dom";
import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { TitleH3 } from "../../../components/title";
import axios from "axios";
import * as XLSX from 'xlsx';
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import DateFormatConverter from "../../../components/date/Date";

function ConsultationContribuableBloque() {
  const [DataSelected , setDataSelected] = useState([]);
  const [DataBloque ,setDataBloque] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);
  const [DataContribuable ] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const tableRef = useRef(null);
  const navigate = useNavigate()// Initialize useHistory

  // const [selectedOption, setSelectedOption] = useState('');
  //const [bloque , setbloque ]  =  useState<{
  //   domaine_recherche : string ,
  //   reference : string ,
  //   cin:string,
  //   raison_social : string,
  //   adresse : string,
  //   nom_commercial: string,
  //   date_debut : string ,
  //   date_fin : string,
  //   reference_fiscal : string
    
  //   }>({
  //     domaine_recherche : "" ,
  //     reference : "" ,
  //     cin:"",
  //     raison_social:"",
  //     adresse:"",
  //     nom_commercial:"",
  //     date_debut : "" ,
  //     date_fin : "",
  //     reference_fiscal: ""
  //   })
  

useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/consultation/contribuable/bloque')
      .then((response) => setDataBloque(response.data))
      .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
  }, []);

console.log(DataBloque)


  // const options = [
  //   { value: 'référence', label: 'référence' },
  //   { value: 'Raison sociale', label: 'Raison sociale' },
  //   { value: 'Référence fiscal', label: 'Référence fiscal' },
  //   { value: 'CIN', label: 'CIN' },
  //   { value: 'Adresse', label: 'Adresse' },
  //   { value: 'Nom commercial', label: 'Nom commercial' },
  // ];

  const exportToExcelAllData = () => {
    // const allData = DataBloque.map((item:any) => ({
    //   "Référence ": item.id,
    //   "Raison social" : item.raison_social ,
    //   "Référence Fiscale" : item.reference_fiscal,
    //   "Type" : item.type ,
    //   "CIN" : item.cin ,
    //   "Passport": item.numero_passeport ,
    //   "sexe" : item.sexe
    // }));
  
    const ws = XLSX.utils.json_to_sheet(DataBloque);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'all_data.xlsx');
  };
  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedRechercheConsulationDataBloque", JSON.stringify(DataSelected ));
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  

  const handleButtonClick = () => {
    setIsStorageUpdated(true);
    const routeToNavigate = "/VoirContribuableDetailBloque";
    navigate(routeToNavigate, { state: { DataSelected } });
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
  const filteredData = DataBloque.filter((item:any) => 
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

 {/** const handleSearchButtonClick = () => {
    console.log(filteredData);
  }; */}

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
  
  const contentCard = (
    <div className="p-8 flex flex-col">
<div className=" font-semibold text-[#959824] text-center text-4xl mt-6 border-b-2 ">
  CONSULTATION  DES CONTRIBUABLES BLOQUES
</div>
<div className="flex flex-col mt-8">
    {/**card recherche  */} 
    <div className="mt-6 flex  justify-center ">
                <Label text="Réference" className="mt-4" ></Label>
                <Input type="text" className="w-96 ml-5 "placeholder="Reférence EX:0005" onChange={handleSearch}></Input>
                {/**<Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
    </div>
</div>
{/* <div className="mt-4 text-xl font-semibold">
  veuillez remplir vos critères ci-dessous : 
</div> */}
{/* <div className="flex justify-between mt-4">
<Label text="Domaine de recherche :" className="mt-4"></Label>
<Select options={options} value={bloque.domaine_recherche} onChange={(options)=>{setbloque({...bloque , domaine_recherche : options})}} className="w-96 mx-6"/>
</div>
{bloque.domaine_recherche === "Raison sociale" &&(

<div className="mt-4 flex justify-between">
<Label text="Raison Social :"></Label>
<Input type="text" className="w-96  "
value={bloque.raison_social}
onChange={(e)=> {setbloque({...bloque , raison_social: e.target.value})}}
></Input>
</div>
) 
}

{bloque.domaine_recherche === "référence" &&(

<div className="mt-4 flex justify-between">
<Label text="Réference :"></Label>
<Input type="text" className="w-96  "
value={bloque.reference}
onChange={(e)=> {setbloque({...bloque , reference: e.target.value})}}
></Input>
</div>
) 
}
{bloque.domaine_recherche === "Référence fiscal" &&(

<div className="mt-4 flex justify-between">
<Label text="Référence fiscal :"></Label>
<Input type="text" className="w-96  "
value={bloque.reference_fiscal}
onChange={(e)=> {setbloque({...bloque , reference_fiscal: e.target.value})}}
></Input>
</div>
) 
}
{bloque.domaine_recherche === "CIN" &&(

<div className="mt-4 flex justify-between">
<Label text="CIN :"></Label>
<Input type="text" className="w-96  "
value={bloque.cin}
onChange={(e)=> {setbloque({...bloque , cin: e.target.value})}}
></Input>
</div>
) 
}
{bloque.domaine_recherche === "Adresse" &&(

<div className="mt-4 flex justify-between">
<Label text="Adresse :"></Label>
<Input type="text" className="w-96  "
value={bloque.adresse}
onChange={(e)=> {setbloque({...bloque , adresse: e.target.value})}}
></Input>
</div>
) 
}
{bloque.domaine_recherche === "Nom commercial" &&(

<div className="mt-4 flex justify-between">
<Label text="Nom Commercial :"></Label>
<Input type="text" className="w-96  "
value={bloque.nom_commercial}
onChange={(e)=> {setbloque({...bloque , nom_commercial: e.target.value})}}
></Input>
</div>
) 
} */}
{/* <div className="flex justify-between mt-4">
<Label text="Date blocage du :" className="mt-4"></Label>
<Input type="date" className="w-96 mx-6" ></Input>
</div> */}

{/* <div className="flex justify-between mt-4">
<Label text="Au :" className="mt-4"></Label>
<Input type="date" className="w-96 mx-6" ></Input>
</div> */}
{/* 
<div className="mt-4">
<Button text="Lister" className="rounded w-40"></Button>
</div> */}
<div ref={printRef} className="mt-12 flex justify-center w-[1200px]" >

<Table
 id="yourTableId" ref={tableRef}
headers={HeaderTable}
data={DataTable}
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}


></Table>
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

export default ConsultationContribuableBloque