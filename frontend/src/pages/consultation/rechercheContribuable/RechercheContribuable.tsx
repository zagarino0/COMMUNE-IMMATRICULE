import { useEffect, useRef, useState } from "react";
import { Card } from "../../../components/card/card"
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
import { Link, useNavigate } from "react-router-dom";
import { SiMicrosoftexcel } from "react-icons/si";
import { TitleH3 } from "../../../components/title";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import axios from "axios";
import { Button } from "../../../components/common";
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function RechercheContribuablePage() {

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);

    const [Contribuable , setContribuable ]  =  useState<{
      domaine_recherche : string ,
      reference : string ,
      cin:string,
      raison_social : string,
      adresse : string,
      nom_commercial: string,
      date_debut : string ,
      date_fin : string,
      reference_fiscal : string
      regimfiscal : string , 
      type: string      
      }>({
        domaine_recherche : "" ,
        reference : "" ,
        cin:"",
        raison_social:"",
        adresse:"",
        nom_commercial:"",
        date_debut : "" ,
        date_fin : "",
        reference_fiscal: "",
        regimfiscal : "",
        type: ""
      })
  


const [DataContribuable ,setDataContribuble] = useState([]);
useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/etat/contribuable/valide')
      .then((response) => setDataContribuble(response.data))
      .catch((error) => console.error(error));
  }, []);


 
    

  const handleSearchClient = async () => {
    const DataSearch ={
      "reference":Contribuable.reference,
      "raison_social":Contribuable.raison_social,
      "reference_fiscal": Contribuable.reference_fiscal,
      "cin":Contribuable.cin,
      "adresse": Contribuable.adresse,
      "nom_commercial": Contribuable.nom_commercial,
      "date_debut":Contribuable.date_debut,
      "date_fin": Contribuable.date_fin  
    }
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/contribuable", DataSearch);
      setDataContribuble(response.data);
      // Check the response status or do something with the response
      console.log("Server Response:", DataContribuable );
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
    

  const headers = [ "Référence" , "Raison social" , "référence fiscal" , "Type" , "CIN" , "Passport" , "Sexe"]
  const data = DataContribuable.map((item)=>[item.id , item.raison_social , item.reference_fiscal , item.type , item.cin , item.numero_passeport , item.sexe])
    
      const options = [
        { value: 'référence', label: 'référence' },
        { value: 'Raison sociale', label: 'Raison sociale' },
        { value: 'Référence fiscal', label: 'Référence fiscal' },
        { value: 'CIN', label: 'CIN' },
        { value: 'Adresse', label: 'Adresse' },
        { value: 'Nom commercial', label: 'Nom commercial' },
      ];
    

      const exportToExcelAllData = () => {
        const allData = DataContribuable.map((item) => ({
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

    
      
      
 const navigate = useNavigate()// Initialize useHistory

 const [isStorageUpdated, setIsStorageUpdated] = useState(false);

 useEffect(() => {
   // Store Value data in localStorage
   localStorage.setItem("selectedRechercheConsulationData", JSON.stringify(DataSelected ));
   // Reset the dummy state to trigger rerender
   console.log(DataSelected)
   setIsStorageUpdated(false);
 }, [DataSelected, isStorageUpdated]);
 
 const handleButtonClick = () => {
   // Trigger a rerender by updating the dummy state
   setIsStorageUpdated(true);

   // Use the selectedOption to determine the route to navigate to
   const routeToNavigate = "/VoirContribuableDetail";

   // Use navigate to navigate to the determined route
   navigate(routeToNavigate, { state: { DataSelected } });
 };

const handleTableRowClick = (rowIndex) => {
 setSelectedRowIndex(rowIndex);
 
 // Extract the property values from the data object
 const selectedRowData = DataContribuable[rowIndex];

 setDataSelected(selectedRowData);
 console.log('Selected Row Data:', DataSelected);
};

    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4">Consultation des Référence Fiscal</div>
           <div className="flex flex-col m-4">
{/* <div className="mt-6 flex flex-row justify-between">
    <Label text="Domaine de Recherche :" className="mt-4"></Label>
    <Select options={options} value={Contribuable.domaine_recherche} onChange={(option)=>setContribuable({...Contribuable , domaine_recherche : option})} className="w-96  "/>
</div>
{Contribuable.domaine_recherche === "Raison sociale" &&(

<div className="mt-4 flex justify-between">
<Label text="Raison Social :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.raison_social}
onChange={(e)=> {setContribuable({...Contribuable , raison_social: e.target.value})}}
></Input>
</div>
) 
}

{Contribuable.domaine_recherche === "référence" &&(

<div className="mt-4 flex justify-between">
<Label text="Réference :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.reference}
onChange={(e)=> {setContribuable({...Contribuable , reference: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "Référence fiscal" &&(

<div className="mt-4 flex justify-between">
<Label text="Référence fiscal :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.reference_fiscal}
onChange={(e)=> {setContribuable({...Contribuable , reference_fiscal: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "CIN" &&(

<div className="mt-4 flex justify-between">
<Label text="CIN :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.cin}
onChange={(e)=> {setContribuable({...Contribuable , cin: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "Adresse" &&(

<div className="mt-4 flex justify-between">
<Label text="Adresse :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.adresse}
onChange={(e)=> {setContribuable({...Contribuable , adresse: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "Nom commercial" &&(

<div className="mt-4 flex justify-between">
<Label text="Nom Commercial :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.nom_commercial}
onChange={(e)=> {setContribuable({...Contribuable , nom_commercial: e.target.value})}}
></Input>
</div>
) 
}
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Régime fiscal :" className="mt-4"></Label>
 <Input
 value={Contribuable.regimfiscal}
 onChange={(e)=> setContribuable({...Contribuable , regimfiscal : e.target.value })}
 type="text" placeholder="Régime fiscal" className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Date de validation Du :" className="mt-4"></Label>
 <Input 
 value={Contribuable.date_debut}
 onChange={(e)=>setContribuable({...Contribuable , date_debut : e.target.value})}
 type="date"  className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Au :" className="mt-4"></Label>
 <Input type="date" 
 value={Contribuable.date_fin}
 onChange={(e)=>setContribuable({...Contribuable , date_fin : e.target.value})}
 className="w-96 "></Input>
 </div>

  <div className="mt-6 flex flex-row justify-between" >
<div>
<Label text="Type :" className="mt-4"></Label>
</div>
<div>
<Checkbox label="Physique" checked={Contribuable.type ==="Personne physique"} onChange={()=>setContribuable({...Contribuable , type : "Personne physique"})}></Checkbox>
<Checkbox label="Morale" checked={Contribuable.type === "Personne moral"} onChange={()=>setContribuable({...Contribuable , type : "Personne moral"})}></Checkbox>
</div>
  </div>
           </div>

<div className="mt-6">
<Button text="Lister" onClick={handleSearchClient}></Button>
</div> */}
</div> 
<div className="mt-10">
<Table
id="yourTableId" ref={tableRef}
headers={headers}
data={data}
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}


></Table>
</div>
<div className="flex justify-between mt-12">
<button onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  onClick={downloadPDF}  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
< button onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></button>
{/* to="/VoirContribuableDetail"  */}
</div>
        </div>
    )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
   <Card contentCard={contentCard} className="w-[800px] h-[1200px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default RechercheContribuablePage