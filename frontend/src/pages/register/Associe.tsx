import { useLocation, useNavigate } from "react-router-dom";

import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";
import Table from "../../components/table/table";
import { IoAdd } from "react-icons/io5";
import Button from "../../components/common/Button";
import { RiSubtractFill } from "react-icons/ri";
import { MdOutlineZoomInMap } from "react-icons/md";
import { MdZoomOutMap } from "react-icons/md";
import { useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import Checkbox from "../../components/common/checkbox";
import { RiArrowGoBackFill } from "react-icons/ri";

 interface Actionnaire {
  id:string,
  type : string ,
  nom_actionnaire: string ,
  fonction_actionnaire : string ,
  resident_actionnaire : string , 
  cin_passeport_actionnaire: string,
  adresse_actionnaire : string,
  autre_activite_actionnaire : string,
  id_contribuable: string,
  nif_actionnaire: string,
  email_actionnaire: string,
  numero_actionnaire: string,
  associe_unique_actionnaire: string,
  action_ou_actionnaire: string,

}
function Associe() {
    const location = useLocation(); 
    
    let navigate = useNavigate();
    const registrationData = localStorage.getItem("registrationData"); 
    const parsedData = JSON.parse(registrationData as string);
      
    

    const [entries, setEntries] = useState([]); // New state to hold the list of entries

    const [Associe , setAssocie] = useState<{
      personne_physique:boolean,
      personne_morale:boolean,
      personne_etrangere:boolean,
      associe_unique:boolean,
      resident:boolean,
      avec_rf: boolean,
      salarie : boolean,
      aucune : boolean,      
   

    }>({
      personne_physique:false,
      personne_morale:false,
      personne_etrangere:false,
      associe_unique:false,
      resident: true ,
      avec_rf: false,
      salarie: false,
      aucune : false,
      

    })

    const [Actionnaire , setActionnaire ] = useState<Actionnaire>({
      id:"",
      id_contribuable: parsedData.id,
      type : "" ,
      nom_actionnaire: "" ,
      fonction_actionnaire : "" ,
      resident_actionnaire : "" , 
      cin_passeport_actionnaire: "",
      adresse_actionnaire : "" ,
      autre_activite_actionnaire : "",      
      nif_actionnaire: "",
      email_actionnaire: "",
      numero_actionnaire: "",
      associe_unique_actionnaire: "",
      action_ou_actionnaire: "",
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
        setActionnaire<Actionnaire>({
          id_contribuable: parsedData.id,
          type: "",
          nom_actionnaire: "",
          fonction_actionnaire: "",
          resident_actionnaire: "",
          cin_passeport_actionnaire: "",
          adresse_actionnaire: "",
          autre_activite_actionnaire: "",
          nif_actionnaire: "",
          email_actionnaire: "",
          numero_actionnaire: "",
          associe_unique_actionnaire: "",
          action_ou_actionnaire: "",
        });
        setAdd(false); 
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
      ];
    
      const data = entries.map((entry) => [
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
        entry.action_ou_actionnaire
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
    <Checkbox label="Personne morale etrangère/Etat" onChange={()=>{setActionnaire({...Actionnaire , type :"Personne morale etrangère/Etat"})}} checked={Actionnaire.type=== "Personne morale etrangère/Etat" }></Checkbox>
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
    <Checkbox label="Oui" onChange={()=>setAssocie({ ...Associe , resident: true})} checked={Associe.resident == true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setAssocie({...Associe , resident: false})} checked={Associe.resident == false}></Checkbox>
    </div>
    </div>
    { Associe.resident == true && (
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
    { Associe.resident == false && (
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
    <Checkbox label="Avec RF" onChange={(checked:boolean)=> setAssocie({...Associe , avec_rf : checked})} checked={Associe.avec_rf} ></Checkbox>
    <Checkbox label="Salarié" onChange={(checked:boolean)=>setAssocie({...Associe , salarie: checked})} checked={Associe.salarie}></Checkbox>
    <Checkbox label="Aucune " onChange={(checked: boolean)=> setAssocie({...Associe , aucune: checked})} checked={Associe.aucune}></Checkbox>
    </div>
    </div>
    { Associe.avec_rf === true && (
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
            <Label text="Associé unique" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>{setAssocie({...Associe , associe_unique : true })}} checked={Associe.associe_unique == true}></Checkbox>
    <Checkbox label="Non" onChange={()=>{setAssocie({...Associe , associe_unique : false })}} checked={Associe.associe_unique == false}></Checkbox>
    </div>
          </div>
          { Associe.associe_unique === true && (
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

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-center mt-6">
<div >
            <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><IoAdd></IoAdd></button>
</div>
<div  className="ml-4">
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><RiSubtractFill></RiSubtractFill></button>
</div>
<div className="ml-4">
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><MdOutlineZoomInMap></MdOutlineZoomInMap></button>
</div>
<div className="ml-4">
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><MdZoomOutMap></MdZoomOutMap> </button>
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