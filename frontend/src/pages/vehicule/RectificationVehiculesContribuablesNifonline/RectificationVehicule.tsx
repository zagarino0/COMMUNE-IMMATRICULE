import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
//import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH3} from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import Modal from "../../../components/modals/modals";
import axios from "axios";

function RectificationVehicule() {
  
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState<any>([]);
  const [EntriesSelected , setEntriesSelected] = useState([])
  const [selectedRowIndexEntries  , setSelectedRowIndexEntries] = useState(null)
  const [isModal , setIsModal] = useState(false);
  const ContribuableLocaleStorage = localStorage.getItem("selectedContribuableRectificationAddVehicule");
  
  const [Contribuable] = useState(
    JSON.parse(ContribuableLocaleStorage as string)
  );

  const {activite} = Contribuable ;
  console.log("contribuable",Contribuable)

const [VehiculeData , setVehiculeData] = useState([])
 useEffect(() => {
  // Récupérer les données depuis le backend
  axios.get('http://localhost:3500/vehicle')
    .then((response) => setVehiculeData(response.data))
    .catch((error) => console.error(error));
}, []);

console.log(VehiculeData)
  

  const headerVehiculeTable = ["Numéro immatriculation" ,"Type", "Genre","Marque", "Puissance"]
  const dataVehiculeTable  = VehiculeData.map((item:any)=>[
    item.numero_immatriculation,
    item.type,
    item.genre,
    item.marque,
    item.puissance
  ])




  const handleTableRowClick = (rowIndex:any) => {
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
        type : DataSelected.type,
        genre: DataSelected.genre,
        puissance: DataSelected.puissance,
        id_vehicule : DataSelected.id_vehicule,
        marque: DataSelected.marque
   

        // Add other properties as needed
      };
    // Update the entries state with the new entry
  setEntries((prevEntries : any) => [...prevEntries, newEntry]);

  // Reset the selected row index and data

  setSelectedRowIndex(null); 

  setDataSelected([]);

  // Close the modal
  setIsModal(false);
    };

  
    
   const headers = ["Numéro Immatriculation","Type", "genre","Marque", "Puissance"];
   const data = entries.map((item:any)=>[
    item.numero_immatriculation ,
    item.type,
    item.genre ,
    item.marque,
    item.puissance
  ])
  

   const handleTableRowClickEntries = (rowIndex:any) => {
    setSelectedRowIndexEntries(rowIndex);
    
    // Extract the property values from the data object
    const selectedRowData = entries[rowIndex]
    
    
    setEntriesSelected(selectedRowData);
    console.log('Selected entiers Data:', EntriesSelected);
    };
      
    // Enregistrement véhicule Avec Tableau 
    const HandleSaveVehiculeTable = async () => {
      if (entries){
        const DataVehicule = {
          "vehicles" : entries ,
          "id_contribuable" : Contribuable 
        }
      try {
       const response = await axios.post("http://localhost:3500/vehicle/all" , DataVehicule);
       console.log("Vehicule : " , response.data),
       alert("vehicule Ajouter")
      } catch(error){
       console.error("error:" , error)
       alert("erreur ajout vehicule")
      }
      }
    }
  
      // Delete the Data From the Table 
      const handleDeleteButtonClick = (idToDelete: string) => {
        // Filter out the entry with the specified ID
        const updatedEntries = EntriesSelected.filter((entry:any) => entry.id_vehicule !== idToDelete);
      
        // Update the entries state with the filtered entries
        setEntriesSelected(updatedEntries);
      
        
      };


  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">

<div className="text-[#959824] text-2xl  text-center font-semibold border-b-2  mt-2">RECTIFICATION DES VEHICULES DES CONTRIBUABLES AYANT LA REFERANCE FISCAL: {Contribuable.reference_fiscal}</div>
<TitleH3 text="Principaux renseignements sur ce CONTRIBUABLE" className="mt-6 px-8"></TitleH3>
        <div className="bg-[#c0c0c0] p-6 w-[1050px] item-center  px-6">
        <div className="mt-4 flex  justify-between ">
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
        <Label text="Forme juridique" className="mt-4"></Label>
        <Input type="text" className="w-96  "
        value={Contribuable ? Contribuable.forme_juridique : ""}
        ></Input>
        </div>
        <div className="mt-6 flex  justify-between ">
        <Label text="Date autorisation" className="mt-4"></Label>
        <Input type="date" className="w-96  "
        value={Contribuable ? Contribuable.date_agrement : ""}
        ></Input>
        </div>
        <div className="mt-6 flex  justify-between ">
        <Label text="Date création" className="mt-4"></Label>
        <Input type="date" className="w-96"
        value={Contribuable ? Contribuable.date_creation : ""}
        ></Input>
        </div>
        </div>


{/* <div className="mt-6">
<Button text="Rechercher"></Button>
</div> */}
<div className="mt-8 flex justify-center">
<Table  className=" border-x-2  items-center mt-4 w-[950px]"
onClick={handleTableRowClickEntries}
selectedRowIndex={selectedRowIndexEntries}

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-6">
<Button text="Ajouter un vehicule" onClick={()=> setIsModal(true)}></Button>
<Button text="Enregistrer" onClick={HandleSaveVehiculeTable}></Button>
<Button onClick={()=>handleDeleteButtonClick(EntriesSelected.id_vehicule)} text="Supprimer un vehicule"></Button>
</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-12 ">
  <Card contentCard={contentCard} className="w-[1100px] h-[1000px] "></Card>
  </div>


  <Modal isOpen={isModal} onClose={()=> setIsModal(false)} className="w-[1100px]  h-[560px] p-4">

 <div className="text-[#959824] text-4xl  font-semibold border-b-2 px-4 mt-2">Listes des véhicules</div>
 <div className=" p-4">
<div className="flex flex-row">
  <Label text="Numéro Immatriculation"></Label>
  <Input type="text" className="ml-8" ></Input>
</div>
 </div>
      <div className=" mt-4 overflow-y-auto flex justify-center">
            <Table className="border-x-2  w-[980px]"
                headers={headerVehiculeTable}
                data={dataVehiculeTable}
                onClick={handleTableRowClick}
                selectedRowIndex={selectedRowIndex}>

            </Table>
      </div>

          <div className="flex justify-between px-14 mt-4">
              <Button text="Ajouter" onClick={handleButtonClickSave}></Button>
          </div>


  </Modal>
 </MainLayout>
)
}
export default RectificationVehicule