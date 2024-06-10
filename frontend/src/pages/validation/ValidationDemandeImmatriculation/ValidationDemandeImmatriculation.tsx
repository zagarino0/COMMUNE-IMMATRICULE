import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
// import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
// import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import "../../../components/font/font.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";
import DateFormatConverter from "../../../components/date/Date";

function ValidationDemandeImmatriculation() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);



//   const [Valide ] = useState<{
// domaine_recherche : string ,
// reference : string ,
// cin:string,
// raison_social : string,
// adresse : string,
// nom_commercial: string,
// date_debut : string ,
// date_fin : string,
// reference_fiscal : string

// }>({
//   domaine_recherche : "" ,
//   reference : "" ,
//   cin:"",
//   raison_social:"",
//   adresse:"",
//   nom_commercial:"",
//   date_debut : "" ,
//   date_fin : "",
//   reference_fiscal: ""
// })

const [Data , setData] = useState([])
const [searchTerm, setSearchTerm] = useState("");
// Fonction pour faire un  recherche d'un client avec référence fiscal
// const handleSearchClient = async () => {
//   const DataSearch ={
//   "reference":Valide.reference,
//   "raison_social":Valide.raison_social,
//   "reference_fiscal": Valide.reference_fiscal,
//   "cin":Valide.cin,
//   "adresse": Valide.adresse,
//   "nom_commercial": Valide.nom_commercial,
//   "date_debut":Valide.date_debut,
//   "date_fin": Valide.date_fin
//   }
//   try {
//     // Make a POST request to your server endpoint
//     const response = await axios.post("http://localhost:3500/consultation/contribuable/avalide", DataSearch);
//     setData(response.data);
//     // Check the response status or do something with the response
//     console.log("Server Response:", Data );
//   } catch (error) {
//     // Handle errors
//     console.error("Error:", error);
//     alert('il y a une erreur')
//   }
// };
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

 
    useEffect(() => {
        // Récupérer les données depuis le backend
        axios.get('http://localhost:3500/consultation/contribuable/avalide')
          .then((response) => setData(response.data))
          .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
      }, []);
    
   
     
const headers = ["Ref démandé", "Raison social",  "Référence Fiscal" , "type" , " Date autorisation" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"];
//const data = Data.map((item)=>[item.id , item.raison_social , item.capital , item.forme_juridique , item.reference_fiscal , item.type])
  // [Data.id , Data.raison_social , Data.nom_commercial , Data.forme_juridique]

  const filteredData = Data.filter((item:any) => 
  item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const data = filteredData.map((item:any) =>[
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



 const navigate = useNavigate()// Initialize useHistory

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedValidationData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);

    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/Assujetissement";

    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };

  const handleTableRowClick = (rowIndex: any) => {
    // Check if the clicked row is already selected
    const isSelected = rowIndex === selectedRowIndex;
  
    // Toggle selection
    const newSelectedRowIndex = isSelected ? null : rowIndex;
    setSelectedRowIndex(newSelectedRowIndex);
  
    // Extract the property values from the data object
    const selectedRowData = isSelected ? [] : Data[rowIndex];
  
    // Set the selected data
    setDataSelected(selectedRowData);
    console.log('Selected Row Data:', selectedRowData);
  };
  

  const ContentSearch =(
    <div>     
       <div className="  p-4">
   <div className="">
   <div className="text-white  py-3 px-4 rounded bg-[#959824] text-3xl  font-semibold  mt-2">
       DEMANDES RF A VALIDER
     </div>

     <div className="flex flex-col mt-2">
    {/**card recherche  */} 
    <div className="mt-6 flex  justify-center ">
                <Label text="Réference" className="mt-4" ></Label>
                <Input type="text" className="w-96 ml-16 "placeholder="Reférence EX:0005" onChange={handleSearch}></Input>
                {/* <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
            </div>
</div>
         {/* <div className="text-lg font-semibold p-4 ">
           Recherche des contribuables :
         </div>
   </div>
    </div>
   <div className="flex justify-center  ">
<div className="flex flex-col ">
      
<div className="flex flex-col py-4">

<div className="mt-6 flex justify-between">
  <Label text="Domaine de recherche :"></Label>
  <Select options={options} value={Valide.domaine_recherche}
   onChange={ (options)=>{setValide({...Valide , domaine_recherche: options})}} 
    className="w-96 mx-6"/>
</div>
{Valide.domaine_recherche === "Raison sociale" &&(

<div className="mt-4 flex justify-between">
<Label text="Raison Social :"></Label>
<Input type="text" className="w-96  "
value={Valide.raison_social}
onChange={(e)=> {setValide({...Valide , raison_social: e.target.value})}}
></Input>
</div>
) 
}

{Valide.domaine_recherche === "référence" &&(

<div className="mt-4 flex justify-between">
<Label text="Réference :"></Label>
<Input type="text" className="w-96  "
value={Valide.reference}
onChange={(e)=> {setValide({...Valide , reference: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "Référence fiscal" &&(

<div className="mt-4 flex justify-between">
<Label text="Référence fiscal :"></Label>
<Input type="text" className="w-96  "
value={Valide.reference_fiscal}
onChange={(e)=> {setValide({...Valide , reference_fiscal: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "CIN" &&(

<div className="mt-4 flex justify-between">
<Label text="CIN :"></Label>
<Input type="text" className="w-96  "
value={Valide.cin}
onChange={(e)=> {setValide({...Valide , cin: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "Adresse" &&(

<div className="mt-4 flex justify-between">
<Label text="Adresse :"></Label>
<Input type="text" className="w-96  "
value={Valide.adresse}
onChange={(e)=> {setValide({...Valide , adresse: e.target.value})}}
></Input>
</div>
) 
}
{Valide.domaine_recherche === "Nom commercial" &&(

<div className="mt-4 flex justify-between">
<Label text="Nom Commercial :"></Label>
<Input type="text" className="w-96  "
value={Valide.nom_commercial}
onChange={(e)=> {setValide({...Valide , nom_commercial: e.target.value})}}
></Input>
</div>
) 
}
<div className="mt-4 flex justify-between">
  <Label text="Date de debut :"></Label>
<Input type="date" className="w-96  "
value={Valide.date_debut}
onChange={(e)=> {setValide({...Valide , date_debut: e.target.value})}}
></Input>
</div>
<div className="mt-4 flex justify-between">
  <Label text="Date fin :"></Label>
<Input type="date" className="w-96 mx-[120px] "
value={Valide.date_fin}
onChange={(e)=> {setValide({...Valide , date_fin: e.target.value})}}
></Input>
</div>

<Button type="submit" text="Rechercher" onClick={handleSearchClient} className="w-96 ml-[180px] mt-4"></Button>
      </div> */}
<div className=" flex  justify-center items-center mt-4" >

<Table

headers={headers}
data={data}
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
className=""
></Table>
</div>

<button  className="flex flex-row mt-2 " onClick={handleButtonClick}><TiDocumentText  className="mr-2 text-[#1956e3] text-xl"/><TitleH3 text="Voir les détails du Contribuable " className="text-xs"></TitleH3></button>
</div>
   </div>
   </div>
  )
return (
  <MainLayout>
  <div className=" mt-24 mb-8">
  <Card contentCard={ContentSearch} className="w-[1300px] "></Card>
  </div>
      </MainLayout>
)
}


export default ValidationDemandeImmatriculation