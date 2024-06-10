import { useLocation, useNavigate } from "react-router-dom";

import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";
import Table from "../../components/table/table";
import { IoAdd } from "react-icons/io5";
import Button from "../../components/common/Button";
import { RiSubtractFill } from "react-icons/ri";
//import { MdOutlineZoomInMap } from "react-icons/md";
//import { MdZoomOutMap } from "react-icons/md";
import { useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import Checkbox from "../../components/common/checkbox";
import { RiArrowGoBackFill } from "react-icons/ri";

 interface Actionnaire {
  id:string,
  type : string ,
  nom_actionnaire: string ,
  fonction_actionnaire : string ,
  resident_actionnaire : boolean , 
  cin_passeport_actionnaire: string,
  adresse_actionnaire : string,
  autre_activite_actionnaire : string,
  id_contribuable: string,
  nif_actionnaire: string,
  email_actionnaire: string,
  numero_actionnaire: string,
  associe_unique_actionnaire: boolean,
  action_ou_actionnaire: string,
  siege: string,
  gerant : string ,
  cin_passport_gerant : string
}
function Associe() {
    const location = useLocation(); 
    
    let navigate = useNavigate();
    const registrationData = localStorage.getItem("registrationData"); 
    const parsedData = JSON.parse(registrationData as string);
      
    

    const [entries, setEntries] = useState([]); // New state to hold the list of entries


    const [Actionnaire , setActionnaire ] = useState<Actionnaire>({
      id:"",
      id_contribuable: parsedData.id,
      type : "" ,
      nom_actionnaire: "" ,
      fonction_actionnaire : "" ,
      resident_actionnaire : true, 
      cin_passeport_actionnaire: "",
      adresse_actionnaire : "" ,
      autre_activite_actionnaire : "",      
      nif_actionnaire: "",
      email_actionnaire: "",
      numero_actionnaire: "",
      associe_unique_actionnaire: false,
      action_ou_actionnaire: "",
      siege : "",
      gerant : "",
      cin_passport_gerant : ""

      
    })
    const [add , setAdd] = useState(false);

    const [isStorageUpdated, setIsStorageUpdated] = useState(false);

    useEffect(() => {
      // Store Value data in localStorage
      localStorage.setItem("associeData", JSON.stringify(entries));
      // Reset the dummy state to trigger rerender
      setIsStorageUpdated(false);
    }, [isStorageUpdated ,entries]);
    
  
      const handleButtonClick = () => {
  
      // Trigger a rerender by updating the dummy state
      setIsStorageUpdated(true);
        const routeToNavigate = "/Etablissement";
        console.log('Navigating to:', routeToNavigate);
      
        // Use navigate to navigate to the determined route
        navigate(routeToNavigate, { state: { Actionnaire } });
       
      };
      // ... (your existing state definitions)
    
   const handleButtonClickSave = () => {
         // Generate a new ID by incrementing the last entry's ID
    const newId = entries.length > 0 ? parseInt(entries[entries.length - 1].id) + 1 : 1;

    // Update the Actionnaire state with the new ID
    setActionnaire((prevActionnaire) => ({
      ...prevActionnaire,
      id: newId.toString(),
    }));

    // Add the current entry to the list of entries
    setEntries((prevEntries) => [...prevEntries, { ...Actionnaire, id: newId.toString() }]);

        // Reset the Actionnaire state to clear the form
        setActionnaire({
          id_contribuable  : parsedData.id ,
          type: "",
          nom_actionnaire: "",
          fonction_actionnaire: "",
          resident_actionnaire: true,
          cin_passeport_actionnaire: "",
          adresse_actionnaire: "",
          autre_activite_actionnaire: "",
          nif_actionnaire: "",
          email_actionnaire: "",
          numero_actionnaire: "",
          associe_unique_actionnaire: false,
          action_ou_actionnaire: "",
          siege: "",
          gerant : "",
          cin_passport_gerant : ""
        });
        setAdd(false); 
      };
    
      // Delete the Data From the Table 
      const handleDeleteButtonClick = (idToDelete: string) => {
        // Filter out the entry with the specified ID
        const updatedEntries = entries.filter((entry) => entry.id !== idToDelete);
      
        // Update the entries state with the filtered entries
        setEntries(updatedEntries);
      
        
      };
      


      // select Data in the table
      
      const [EntriesSelected , setEntriesSelected] = useState([])
      const [selectedRowIndexEntries  , setSelectedRowIndexEntries] = useState(null) 
      const handleTableRowClickEntries = (rowIndex : any) => { 
        if (rowIndex === selectedRowIndexEntries) {
          // If the clicked row is already selected, unselect it
          setSelectedRowIndexEntries(null);
          setEntriesSelected([]);
        } else {
          // Extract the property values from the data object
          const selectedRowData = entries[rowIndex];
      
          // Select the clicked row
          setSelectedRowIndexEntries(rowIndex);
          setEntriesSelected(selectedRowData);
        }
      
        console.log('Selected entiers Data:', EntriesSelected);
      };
      

      const headers = [
        "Type association",
        "Nom actionnaire",
        "Fonction",
        "Résident",
        "N° CIN ou N° passport",
        "Adresse Actionnaire",
        "Autra activité actionnaire",
        "Référence contribuable",
        "RF actionnaire",
        "Adresse Email",
        "Numéro Tél",
        "Associe unique actionnaire",
        "Action ou actionnaire",
        "Gerant",
        "N° CIN ou N° passport",
        "Siege"
      ];
    
      const data = entries.map((entry : any) => [
        entry.type,
        entry.nom_actionnaire,
        entry.fonction_actionnaire,
        entry.resident_actionnaire,
        entry.cin_passeport_actionnaire,
        entry.adresse_actionnaire,
        entry.autre_activite_actionnaire,
        entry.id_contribuable,
        entry.nif_actionnaire,
        entry.email_actionnaire,
        entry.numero_actionnaire,
        entry.associe_unique_actionnaire,
        entry.action_ou_actionnaire,
        entry.gerant ,
        entry.cin_passport_gerant ,
        entry.siege
      ]);
    
    const content = (
      
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 4:" className="mt-2"></TitleH3>
          <TitleH1 text="Renseignements sur les Associés / Actionnaires" className="ml-2"></TitleH1>
          </div>
          <TitleH3 text="Procéder comme suit:" className="mt-2"></TitleH3>
          { add === true && ( 
            <div>
              <div className='flex justify-between mt-6 '>
    <Label text="Type d'associés / Actionnaires"></Label>
    <div className="flex justify-between w-[700px]">
    <Checkbox label="Personne physique" onChange={()=>{setActionnaire({...Actionnaire , type : "Personne physique" })}}  checked={Actionnaire.type === "Personne physique"  }></Checkbox>
    <Checkbox label="Personne morale" onChange={()=>{setActionnaire({...Actionnaire , type : "Personne morale"})}} checked={Actionnaire.type === "Personne morale"}></Checkbox>
    <Checkbox label="Personne morale etrangère/Etat " onChange={()=>{setActionnaire({...Actionnaire , type :"Personne morale etrangère/Etat"})}} checked={Actionnaire.type=== "Personne morale etrangère/Etat" }></Checkbox>
    </div>
  </div>
  {Actionnaire.type === "Personne physique" && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom"></Label>
      <Input type="text"
      value={Actionnaire.nom_actionnaire}
      onChange={(e)=>{setActionnaire({...Actionnaire , nom_actionnaire : e.target.value })}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fonction"></Label>
      <Input type="text"
       value={Actionnaire.fonction_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , fonction_actionnaire : e.target.value })}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Resident  " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setActionnaire({ ...Actionnaire , resident_actionnaire: true})} checked={Actionnaire.resident_actionnaire === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setActionnaire({...Actionnaire , resident_actionnaire: false})} checked={Actionnaire.resident_actionnaire === false}></Checkbox>
    </div>
    </div>
    { Actionnaire.resident_actionnaire === true && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numero CIN"></Label>
<Input type="text"
 value={Actionnaire.cin_passeport_actionnaire}
 onChange={(e)=>{setActionnaire({...Actionnaire , cin_passeport_actionnaire : e.target.value })}}
></Input>
      </div>
      </>
    )

    }
    { Actionnaire.resident_actionnaire === false && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numéro Passeport ou Carte Résident"></Label>
<Input type="text"
 value={Actionnaire.cin_passeport_actionnaire}
 onChange={(e)=>{setActionnaire({...Actionnaire , cin_passeport_actionnaire : e.target.value })}}
></Input>
      </div>
      </>
    )

    }
    <div className="flex justify-between mt-6">
      <Label text="Adresse"></Label>
      <Input type="text"
       value={Actionnaire.adresse_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , adresse_actionnaire : e.target.value })}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Autre activité " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Avec RF" onChange={()=> setActionnaire({...Actionnaire, autre_activite_actionnaire: "Avec RF" })} checked={Actionnaire.autre_activite_actionnaire ==="Avec RF" } ></Checkbox>
    <Checkbox label="Salarié" onChange={()=>setActionnaire({...Actionnaire , autre_activite_actionnaire: "Salarié"})} checked={Actionnaire.autre_activite_actionnaire === "Salarié"}></Checkbox>
    <Checkbox label="Aucune" onChange={()=> setActionnaire({...Actionnaire , autre_activite_actionnaire: "Aucune"})} checked={Actionnaire.autre_activite_actionnaire ==="Aucune"}></Checkbox>
    </div>
    </div>
    { Actionnaire.autre_activite_actionnaire === "Avec RF" && (
      <> 
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"
       value={Actionnaire.nif_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , nif_actionnaire : e.target.value })}}
      ></Input>
    </div>  
      </>
    )

    }
    <div className="flex justify-between mt-6">
      <Label text="E-mail"></Label>
      <Input type="text"
       value={Actionnaire.email_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , email_actionnaire : e.target.value })}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Telephone"></Label>
      <Input type="text"
       value={Actionnaire.numero_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , numero_actionnaire : e.target.value })}}
      ></Input>
    </div>
    </>
  )}
  { Actionnaire.type=== "Personne morale etrangère/Etat"  && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom"></Label>
      <Input type="text"
       value={Actionnaire.nom_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , nom_actionnaire : e.target.value })}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Adresse"></Label>
      <Input type="text"
       value={Actionnaire.adresse_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , adresse_actionnaire : e.target.value })}}
      ></Input>
    </div>
    </>
  )

  }
   {Actionnaire.type === "Personne morale" && (
    <>
    <div className="flex justify-between mt-6">
    <div className="flex justify-between mt-6">
      
    </div>
    
         </div>
     <div className="flex justify-between mt-6">
     <Label text="RF"></Label>
      <Input type="text"
       value={Actionnaire.nif_actionnaire}
       onChange={(e)=>{setActionnaire({...Actionnaire , nif_actionnaire : e.target.value })}}
      ></Input>

      </div>    
    <div className="flex justify-between mt-6">
      <Label text="Siege"></Label>
      <Input type="text"
      value={Actionnaire.siege}
      onChange={(e)=>{setActionnaire({...Actionnaire , siege : e.target.value })}}
      ></Input>
    </div>
    
    <div className="flex justify-between mt-6">
      <Label text="Gérant"></Label>
      <Input type="text"
      value={Actionnaire.gerant}
      onChange={(e)=>{setActionnaire({...Actionnaire , gerant : e.target.value })}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="CIN Gérant / Passport"></Label>
      <Input type="text"
      value={Actionnaire.cin_passport_gerant}
      onChange={(e)=>{setActionnaire({...Actionnaire , cin_passport_gerant : e.target.value })}}
      ></Input>
    </div>
    
    </>
  )

  }
              <div className="flex justify-between mt-6">
            <Label text="Associé unique" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>{setActionnaire({...Actionnaire , associe_unique_actionnaire : true })}} checked={Actionnaire.associe_unique_actionnaire === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>{setActionnaire({...Actionnaire, associe_unique_actionnaire : false })}} checked={Actionnaire.associe_unique_actionnaire === false}></Checkbox>
    </div>
          </div>
          { Actionnaire.associe_unique_actionnaire === true && (
            <>
            <div className="flex justify-between mt-6">
            <Label text="% Action ou" />
              <Input type="text" value={Actionnaire.action_ou_actionnaire}
              onChange={(e)=>setActionnaire({...Actionnaire , action_ou_actionnaire: e.target.value})}
              ></Input>
            </div>
            </>
          )

          }
          <div className="flex justify-center mt-6">
          <button onClick={handleButtonClickSave} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
          <button onClick={()=> setAdd(false)}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
          </div>
            </div>
           )}
          
{ add === false  && (
  
  <div >
    <div className="mt-6">
          <Label text={`1.Cliquer sur le bouton "Nouveau" en bas du tableau `}  className="mt-2"/>
          <Label text="2.Remplir le formulaire " className="mt-2" />
          <Label text={`3.Cliquer sur "Ajouter dans la liste"`} className="mt-2" />
          </div>
          
    <div className="w-[1000px] mt-6 overflow-y-auto h-96">
  <Table
onClick={handleTableRowClickEntries}
selectedRowIndex={selectedRowIndexEntries}

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-center mt-6">
<div >
            <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><IoAdd></IoAdd></button>
</div>
<div  className="ml-4">
            <button onClick={()=>handleDeleteButtonClick(EntriesSelected.id)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><RiSubtractFill></RiSubtractFill></button>
</div>

</div>
</div>
)} 
 <div className="flex justify-between mt-6">
         <div className="w-40">
            <Button label="Précédent" onClick={()=>navigate("/Siege")}></Button>
          </div>
          <div className="w-40">
            <Button label="Suivant" onClick={handleButtonClick}></Button>
          </div>
         </div>
</div>


  
   
        
        </div>
      
    );
    
  
  return (
  <div className=" w-full h-full bg-gray-200 ">
      <Layout children={content} currentPath={location.pathname}></Layout>
      </div>
    )
  }
export default Associe