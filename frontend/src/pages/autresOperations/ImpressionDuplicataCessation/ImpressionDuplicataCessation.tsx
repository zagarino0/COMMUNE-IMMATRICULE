
//import { useLocalStorage } from "react-use";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import Table from "../../../components/table/table";
// import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
 import { Label } from "../../../components/label/label";
import { TiDocumentText } from "react-icons/ti";
import { TitleH1, TitleH3 } from "../../../components/title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DateFormatConverter from "../../../components/date/Date";


function ImpressionDuplicataCessation() {

  

  // Fonction pour faire un  recherche d'un client avec référence fiscal
const [Data , setData] = useState([])
const [searchTerm, setSearchTerm] = useState("");

//const [reference_fiscal , setReference_fiscal] = useState('');
useEffect(() => {
  axios.get('http://localhost:3500/etat/contribuable/cesse')
    .then((response) => setData(response.data))
    .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
}, []);
console.log(Data);

const headers = [ "Référence" , "Raison social" , "référence fiscal" , "Type"  , "Date d'agrement" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"];
//const data = Data.map((item:any)=>[item.id , item.raison_social , item.type , item.forme_juridique , item.date_creation ])
const filteredData = Data.filter((item:any) =>
item.reference_fiscal.toLowerCase().includes(searchTerm.toLowerCase())
);
const data = filteredData.map((item:any) => [
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

// const handleSearchButtonClick = () => {
//   console.log(filteredData);
// };

const navigate = useNavigate();

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedImpressionCessationData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
// Selectionner la ligne 
const handleTableRowClick = (rowIndex: any) => {
  if (selectedRowIndex === rowIndex) {
    // Deselect the row
    setSelectedRowIndex(null);
    setDataSelected([]);
  } else {
    // Select the row
    setSelectedRowIndex(rowIndex);
    const selectedRowData = Data[rowIndex];
    setDataSelected(selectedRowData);
  }
};

  const handleSendImpression = () =>{
  setIsStorageUpdated(true);
  const routeToNavigate = "/Impression";
  navigate(routeToNavigate, { state: { DataSelected } });
  };
 
  const contentCard=(
      <div >

<div className="flex justify-center items-center" >
<div className="mt-14 flex flex-col mx-6">
<div className="text-[#959824] text-4xl text-center font-semibold "><TitleH1 className="text-[#959824] text-4xl border-b-2 font-semibold" text="IMPRESSION DU DUPLICATA DE LA CESSATION"></TitleH1></div>
<div className="mt-6 flex flex-col  ">


   {/**card recherche  */} 
      <div className="mt-8 flex  justify-center ">
            <Label text="Reference fiscal" className="mt-2" ></Label>
            <Input type="text" className="w-96 ml-5 "placeholder="Reférence fiscal EX: 0000000001" onChange={handleSearch}></Input>
            {/* <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
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
    <div className="mt-8 flex justify-center w-[1300px]" >
        <Table onClick={handleTableRowClick} selectedRowIndex={selectedRowIndex} headers={headers}  data={data}></Table>
    </div>
    <div className="flex justify-start px-8  mt-4">
        <button   className="flex flex-row "onClick={handleSendImpression}><TiDocumentText  className="mr-2 text-2xl text-[#1956e3] font-bold"/><TitleH3 text="Imprimer l'Attestation de Cessation " className="text-xs"></TitleH3></button>
    </div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[550px] mt-16 mb-8">
  <Card contentCard={contentCard} className="w-[1300px]  "></Card>
  </div>
 </MainLayout>
)
}

export default ImpressionDuplicataCessation