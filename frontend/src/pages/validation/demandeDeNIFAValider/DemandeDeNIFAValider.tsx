import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common"
import Input from "../../../components/inputs"
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import "../../../components/font/font.css";
import axios from "axios";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function DemandeDeNIFAValiderPage() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const [Valide , setValide] = useState<{
    domaine_recherche : string ,
    reference : string ,
    cin:string,
    raison_social : string,
    adresse : string,
    nom_commercial: string,
    date_debut : string ,
    date_fin : string,
    reference_fiscal : string
    
    }>({
      domaine_recherche : "" ,
      reference : "" ,
      cin:"",
      raison_social:"",
      adresse:"",
      nom_commercial:"",
      date_debut : "" ,
      date_fin : "",
      reference_fiscal: ""
    })

    const options = [
      { value: 'référence', label: 'référence' },
      { value: 'Raison sociale', label: 'Raison sociale' },
      { value: 'Référence fiscal', label: 'Référence fiscal' },
      { value: 'CIN', label: 'CIN' },
      { value: 'Adresse', label: 'Adresse' },
      { value: 'Nom commercial', label: 'Nom commercial' },
    ];
    
    const [Data , setData] = useState([])
    
    // Fonction pour faire un  recherche d'un client avec référence fiscal
    const handleSearchClient = async () => {
      const DataSearch ={
      "reference":Valide.reference,
      "raison_social":Valide.raison_social,
      "reference_fiscal": Valide.reference_fiscal,
      "cin":Valide.cin,
      "adresse": Valide.adresse,
      "nom_commercial": Valide.nom_commercial,
      "date_debut":Valide.date_debut,
      "date_fin": Valide.date_fin
      }
      try {
        // Make a POST request to your server endpoint
        const response = await axios.post("http://localhost:3500/contribuable", DataSearch);
        setData(response.data);
        // Check the response status or do something with the response
        console.log("Server Response:", Data );
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    };



    const headers = ["Ref démandé", "Raison social", "Nom commercial", "Forme juridique"];
    const data = Data.map((item)=>[item.id  ,item.raison_social ,  item.nom_commercial , item.forme_juridique])
    
    
    
 const navigate = useNavigate()// Initialize useHistory

 const [isStorageUpdated, setIsStorageUpdated] = useState(false);

 useEffect(() => {
   // Store Value data in localStorage
   localStorage.setItem("selectedMAJRenseignementData", JSON.stringify(DataSelected ));
   // Reset the dummy state to trigger rerender
   console.log(DataSelected)
   setIsStorageUpdated(false);
 }, [DataSelected, isStorageUpdated]);
 
 const handleButtonClick = () => {
   // Trigger a rerender by updating the dummy state
   setIsStorageUpdated(true);

   // Use the selectedOption to determine the route to navigate to
   const routeToNavigate = "/DemandeValidationNif";

   // Use navigate to navigate to the determined route
   navigate(routeToNavigate, { state: { DataSelected } });
 };

const handleTableRowClick = (rowIndex) => {
 setSelectedRowIndex(rowIndex);
 // Update input fields or perform other actions based on the selected row data
 const selectedRowData = Data[rowIndex];
setDataSelected(selectedRowData)

};

    const ContentSearch =(
      <div>     
         <div className="    p-4">
     <div className=" p-4">
     <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 ">
         DEMANDES DE MISE A JOUR DES RENSEIGNEMENTS SUR LES CONTRIBUABLES A VALIDER
       </div>
           <div className="text-lg  font-semibold  p-4 ">
             Recherche des contribuables:
           </div>
     </div>
      </div>
     <div className="flex justify-center items-center ">
<div className="flex flex-col ">
        
<div className="flex flex-col py-4">

<div className="mt-6 flex flex-row">
  <Label text="Domaine de recherche :"></Label>
  <Select options={options} value={Valide.domaine_recherche}
   onChange={ (options)=>{setValide({...Valide , domaine_recherche: options})}} 
    className="w-96 mx-6"/>
</div>
{Valide.domaine_recherche === "Raison sociale" &&(

<div className="mt-4 flex flex-row">
<Label text="Raison Social :"></Label>
<Input type="text" className="w-96 mx-[65px] "
value={Valide.raison_social}
onChange={(e)=> {setValide({...Valide , raison_social: e.target.value})}}
></Input>
</div>
) 
}

{Valide.domaine_recherche === "référence" &&(

<div className="mt-4 flex flex-row">
<Label text="Réference :"></Label>
<Input type="text" className="w-96 mx-[65px] "
value={Valide.reference}
onChange={(e)=> {setValide({...Valide , reference: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "Référence fiscal" &&(

<div className="mt-4 flex flex-row">
<Label text="Référence fiscal :"></Label>
<Input type="text" className="w-96 mx-[65px] "
value={Valide.reference_fiscal}
onChange={(e)=> {setValide({...Valide , reference_fiscal: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "CIN" &&(

<div className="mt-4 flex flex-row">
<Label text="CIN :"></Label>
<Input type="text" className="w-96 mx-[65px] "
value={Valide.cin}
onChange={(e)=> {setValide({...Valide , cin: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "Adresse" &&(

<div className="mt-4 flex flex-row">
<Label text="Adresse :"></Label>
<Input type="text" className="w-96 mx-[65px] "
value={Valide.adresse}
onChange={(e)=> {setValide({...Valide , adresse: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "Nom commercial" &&(

<div className="mt-4 flex flex-row">
<Label text="Nom Commercial :"></Label>
<Input type="text" className="w-96 mx-[65px] "
value={Valide.nom_commercial}
onChange={(e)=> {setValide({...Valide , nom_commercial: e.target.value})}}
></Input>
</div>
) 
}
<div className="mt-4 flex flex-row">
  <Label text="Date de debut :"></Label>
<Input type="date" className="w-96 mx-20 "
value={Valide.date_debut}
onChange={(e)=> {setValide({...Valide , date_debut: e.target.value})}}
></Input>
</div>
<div className="mt-4 flex flex-row">
  <Label text="Date fin :"></Label>
<Input type="date" className="w-96 mx-[120px] "
value={Valide.date_fin}
onChange={(e)=> {setValide({...Valide , date_fin: e.target.value})}}
></Input>
</div>
<Button  onClick={handleSearchClient} type="submit" text="Rechercher" className="w-96 ml-[180px] rounded font-bold mt-6"></Button>
        </div>
 <div className="flex justify-center items-center mt-4" >

<Table
headers={headers}
data={data}
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}

></Table>
</div>

<button  className="flex flex-row " onClick={handleButtonClick}><TiDocumentText   className="mr-2 text-xl"/><TitleH3 text="Mise à jour renseignement" className="text-xs"></TitleH3></button>
</div>
     </div>
     </div>
    )
  return (
    <MainLayout>
    <div className="overflow-y-auto h-[500px] mt-14 mb-8">
    <Card contentCard={ContentSearch} className="w-[1300px] h-[1200px]"></Card>
    </div>
        </MainLayout>
  )
}

export default DemandeDeNIFAValiderPage