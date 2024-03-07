import { useEffect, useRef, useState } from "react";
import { Card } from "../../../components/card/card"
// import Input from "../../../components/inputs"
// import Select from "../../../components/inputs/selectInput";
// import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
// import { Button } from "../../../components/common";
import { Link } from "react-router-dom";
import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { TitleH3 } from "../../../components/title";
import axios from "axios";
import * as XLSX from 'xlsx';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ConsultationContribuableBloque() {

  // const [selectedOption, setSelectedOption] = useState('');
  // const [bloque , setbloque ]  =  useState<{
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
  
const [DataBloque ,setDataBloque] = useState([]);
useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/consultation/contribuable/bloque')
      .then((response) => setDataBloque(response.data))
      .catch((error) => console.error(error));
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
    const allData = DataBloque.map((item) => ({
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
  const DataTable = [
    []
  ]
  const contentCard = (
    <div className="p-8 flex flex-col">
<div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
  Consultation des contribuables bloqués
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
<div className="flex justify-center items-center mt-12" >

<Table
 id="yourTableId" ref={tableRef}
headers={HeaderTable}
data={DataTable}
></Table>
</div>
<div className="flex justify-between mt-6">
<button  onClick={exportToExcelAllData} className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button onClick={downloadPDF}   className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
<Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>
</div>
    </div>
  )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
   <Card contentCard={contentCard} className="w-[1000px] h-[1000px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default ConsultationContribuableBloque