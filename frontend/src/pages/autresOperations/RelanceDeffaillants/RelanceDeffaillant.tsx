import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
// import { Button } from "../../../components/common";
// import Input from "../../../components/inputs";
// import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";

function RelanceDeffaillant() {

  const [Data ,setData] = useState([]);
useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/etat/contribuable/valide')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
console.log(Data);

  

 const headers= [ "Référence" , "Raison social" , "référence fiscal" , "Type" ] 
const data = Data.map((item)=>[item.id , item.raison_social , item.reference_fiscal , item.type ])
  

  
// Selectionner contribuable 

const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const navigate = useNavigate()

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedContribuableRadieData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);

    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/InfoContribuableRadie";

    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };
  const handleTableRowClick = (rowIndex) => {
    if (selectedRowIndex === rowIndex) {
      // If the clicked row is already selected, unselect it
      setSelectedRowIndex(null);
      setDataSelected([]);
    } else {
      // Otherwise, select the clicked row
      setSelectedRowIndex(rowIndex);
      const selectedRowData = Data[rowIndex];
      setDataSelected(selectedRowData);
    }
  };
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Mise en Contribuable Radié</div>
<div className="mt-6 flex flex-col  ">
{/* 
<div className="flex justify-between mt-6">
  <Label text="Année"></Label>
<Input type="text" placeholder="Année" className=" w-40"></Input>

</div>
<div className=" flex justify-between mt-6">
  <Label text="Nature de prélévement"></Label>
<Input type="text"  className=" w-40"></Input>

</div>

<Button text="Lister" className="mt-6"></Button> */}
</div>
<div className="mt-10">
<Table
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
headers={headers}
data={data}
></Table>
</div>
<div className="mt-4">
<button  onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir l'information général du contribuable  " className="text-xs"></TitleH3></button>
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

export default RelanceDeffaillant