
import { useLocalStorage } from "react-use";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import Table from "../../../components/table/table";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
 import { Label } from "../../../components/label/label";
import { TiDocumentText } from "react-icons/ti";
import { TitleH1, TitleH3 } from "../../../components/title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ImpressionDuplicataCessation() {

  

  // Fonction pour faire un  recherche d'un client avec référence fiscal
const [Data , setData] = useState([])
const [searchTerm, setSearchTerm] = useState("");

//const [reference_fiscal , setReference_fiscal] = useState('');
useEffect(() => {
  axios.get('http://localhost:3500/etat/contribuable/cesse')
    .then((response) => setData(response.data))
    .catch((error) => console.error(error));
}, []);
console.log(Data);

const headers = ["Reference fiscal", "Raison social", "Type", "Forme juridique" , "Date de création"];
//const data = Data.map((item:any)=>[item.id , item.raison_social , item.type , item.forme_juridique , item.date_creation ])
const filteredData = Data.filter((item:any) =>
item.reference_fiscal.toLowerCase().includes(searchTerm.toLowerCase())
);
const data = filteredData.map((item:any) => [
  item.reference_fiscal,
  item.raison_social,
  item.type ,
  item.forme_juridique,
  item.date_creation,
]);

const handleSearch = (e:any) => {
  setSearchTerm(e.target.value);
};

const handleSearchButtonClick = () => {
  console.log(filteredData);
};

const navigate = useNavigate();

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedBlocageData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
// Selectionner la ligne 
  const handleTableRowClick = (rowIndex: null) => {
    setSelectedRowIndex(rowIndex);   

    const selectedRowData = Data[rowIndex] 
    setDataSelected(selectedRowData);
    console.log('Selected Row Data:', DataSelected);
  };

  const handleSendImpression = () =>{
  setIsStorageUpdated(true);
  const routeToNavigate = "/Impression";
  navigate(routeToNavigate, { state: { DataSelected } });
  };
 
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="IMPRESSION DU DUPLICATA DE LA CESSATION"></TitleH1></div>
<div className="mt-6 flex flex-col  ">


   {/**card recherche  */} 
      <div className="mt-6 flex  justify-between ">
            <Label text="Reference" className="mt-2" ></Label>
            <Input type="text" className="w-96 ml-5 "placeholder="Reférence EX: 005" onChange={handleSearch}></Input>
            <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button>
      </div>
</div>
{/* 

<div className="flex justify-between mt-6">
  <Label text="Référence Fiscal"></Label>
<Input type="text" 
value={reference_fiscal}
onChange={(e)=>setReference_fiscal(e.target.value)}
className=" w-40"></Input>

</div>
<Button onClick={handleSearchClient} type="submit" text="Trouver" className="mt-6"></Button>
 */}
    <div className="mt-10" >
        <Table onClick={handleTableRowClick} selectedRowIndex={selectedRowIndex} headers={headers}  data={data}></Table>
    </div>
    <div className="flex justify-start mt-6">
        <button   className="flex flex-row "onClick={handleSendImpression}><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Imprimer l'Attestation de Cessation " className="text-xs"></TitleH3></button>
    </div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[800px] h-[600px] "></Card>
  </div>
 </MainLayout>
)
}

export default ImpressionDuplicataCessation