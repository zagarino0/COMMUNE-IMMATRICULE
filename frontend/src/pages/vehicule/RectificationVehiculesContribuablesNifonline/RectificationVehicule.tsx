import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH2, TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import Modal from "../../../components/modals/modals";
import axios from "axios";

function RectificationVehicule() {

  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const [EntriesSelected , setEntriesSelected] = useState([])
  const [selectedRowIndexEntries  , setSelectedRowIndexEntries] = useState(null)
  const [isModal , setIsModal] = useState(false);
  const ContribuableLocaleStorage = localStorage.getItem("selectedContribuableRectificationAddVehicule");
  const [Contribuable] = useState(
    JSON.parse(ContribuableLocaleStorage as string)
  );

  const {activite} = Contribuable ;
  console.log(Contribuable)

const [VehiculeData , setVehiculeData] = useState([])
 useEffect(() => {
  // Récupérer les données depuis le backend
  axios.get('http://localhost:3500/vehicle')
    .then((response) => setVehiculeData(response.data))
    .catch((error) => console.error(error));
}, []);

console.log(VehiculeData)
  
  const headerVehiculeTable = ["Numéro immatriculation" , "genre" , "puissance"]
  const dataVehiculeTable  = VehiculeData.map((item)=>[item.numero_immatriculation ,item.genre ,  item.puissance])

  const handleTableRowClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    
    // Extract the property values from the data object
    const selectedRowData = VehiculeData[rowIndex]
    
    
    setDataSelected(selectedRowData);
    console.log('Selected Row Data:', DataSelected);
    };

    const [entries, setEntries] = useState([]); // New state to hold the list of entries

    const handleButtonClickSave = () => {
      // Generate a new ID by incrementing the last entry's ID
      const newId = entries.length > 0 ? parseInt(entries[entries.length - 1].id) + 1 : 1;
    
      // Create a new entry with the selected data
      const newEntry = {
        id: newId.toString(),
        numero_immatriculation: DataSelected.numero_immatriculation,
        genre: DataSelected.genre,
        puissance: DataSelected.puissance,
        // Add other properties as needed
      };
    // Update the entries state with the new entry
  setEntries((prevEntries) => [...prevEntries, newEntry]);

  // Reset the selected row index and data
  setSelectedRowIndex(null);
  setDataSelected({});

  // Close the modal
  setIsModal(false);
    };

  
    
   const headers = ["Numéro Immatriculation", "genre", "Puissance"];
   const data = entries.map((item)=>[item.numero_immatriculation ,item.genre ,  item.puissance])
 

   const handleTableRowClickEntries = (rowIndex) => {
    setSelectedRowIndexEntries(rowIndex);
    
    // Extract the property values from the data object
    const selectedRowData = entries[rowIndex]
    
    
    setEntriesSelected(selectedRowData);
    console.log('Selected entiers Data:', EntriesSelected);
    };
  
    // Enregistrement vé
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Rectification des véhicules des contribuables ayant la Référence Fiscale: {Contribuable.reference_fiscal}</div>
<TitleH2 text="Principaux renseignements sur ce contribuables" className="mt-6"></TitleH2>
<div className="mt-6 flex  justify-between ">
<Label text="Raison social" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Contribuable? Contribuable.raison_social : ""}
></Input>
</div>
<div className="flex justify-between mt-6">
          <Label text="Type" />
          <div className="flex justify-between">
          <label className="">
    <input
      type="radio"
      value="Personne physique"
      className='mr-2'
      checked={  Contribuable.type === "Personne physique"}
    />
    Personne physique
  </label>
  <label className=' ml-4'>
    <input
      type="radio"
      value="Personne morale"
      className='mr-2'
      checked={Contribuable.type === "Personne morale"}
      
    />
    Personne morale
  </label>
          </div>
   

</div>
<div className="mt-6 flex  justify-between ">
<Label text="Activités" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={activite ? activite.activite : ""}
></Input>
</div>
<div className="mt-6 flex  justify-between ">
<Label text="Précision sur les activités" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={activite ? activite.precision_activite: ""}
></Input>
</div>
<div className="mt-6 flex  justify-between ">
<Label text="Adresse (siège)" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
{/* <div className="mt-6">
<Button text="Rechercher"></Button>
</div> */}
<div className="mt-10">
<Table
onClick={handleTableRowClickEntries}
selectedRowIndex={selectedRowIndexEntries}

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-6">
<Button text="Ajouter un vehicule" onClick={()=> setIsModal(true)}></Button>
<Button text="Enregistrer"></Button>
<Button text="Supprimer un vehicule"></Button>
</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[800px] h-[1100px] "></Card>
  </div>
  <Modal isOpen={isModal} onClose={()=> setIsModal(false)} className="w-[500px] h-[550px] p-4">
 <div>
 <div className="text-[#959824] text-xl  font-semibold border-b-2 border-[#959824] mt-2">Listes des véhicules</div>
 <div className="mt-4">
<Table
headers={headerVehiculeTable}
data={dataVehiculeTable}

onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
></Table>
 </div>
 <div className="flex justify-between mt-4">
<Button text="Ajouter" onClick={handleButtonClickSave}></Button>
 </div>
 </div>

  </Modal>
 </MainLayout>
)
}
export default RectificationVehicule