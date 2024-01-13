import { MdOutlineZoomInMap, MdZoomOutMap } from "react-icons/md";
import Button from "../../components/common/Button";
import { Layout } from "./Layout";
import { RiArrowGoBackFill, RiSubtractFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import Table from "../../components/table/table";
import { Label } from "../../components/label/label";
import { AiOutlineSave } from "react-icons/ai";
import Checkbox from "../../components/common/checkbox";
import Input from "../../components/inputs";
import { TitleH1, TitleH3 } from "../../components/title";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dirigeant() {
  const location = useLocation(); 
      
  let navigate = useNavigate();
  const registrationData = localStorage.getItem("registrationData"); 
  const parsedData = JSON.parse(registrationData as string);
    
  

  const [entries, setEntries] = useState([]); // New state to hold the list of entries

  const [Dirigeant , setDirigeant] = useState<{
    id: string,
    id_contribuable: string,
    associe_unique:boolean,
    resident:boolean,
    avec_rf: boolean,
    salarie : boolean,
    aucune : boolean,
    nom: string,
    fonction: string,
    cin:string,
    passport:string,
    adresse:string,
    rf:string,
    email:string,
    telephone:string,

  }>({
    id:"",
    id_contribuable: parsedData.id,   
    associe_unique:false,
    resident: true ,
    avec_rf: false,
    salarie: false,
    aucune : false,
    nom: "",
    fonction: "",
    cin:"",
    passport:"",
    adresse:"",
    rf:"",
    email:"",
    telephone:"",
    
  })
  const [add , setAdd] = useState(false);

  
  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("dirigeantData", JSON.stringify(entries));
    // Reset the dummy state to trigger rerender
    setIsStorageUpdated(false);
  }, [isStorageUpdated ,entries]);
  

    const handleButtonClick = () => {

    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);
      const routeToNavigate = "/Interlocuteur";
      console.log('Navigating to:', routeToNavigate);
    
      // Use navigate to navigate to the determined route
      navigate(routeToNavigate, { state: { Dirigeant } });
     
    };
    // ... (your existing state definitions)
  
    const handleButtonClickSave = () => {
      // Add the current entry to the list of entries
               // Generate a new ID by incrementing the last entry's ID
    const newId = entries.length > 0 ? parseInt(entries[entries.length - 1].id) + 1 : 1;

    // Update the Actionnaire state with the new ID
    setDirigeant((prevActionnaire) => ({
      ...prevActionnaire,
      id: newId.toString(),
    }));

    // Add the current entry to the list of entries
    setEntries((prevEntries) => [...prevEntries, { ...Dirigeant, id: newId.toString() }]);

      // Reset the Actionnaire state to clear the form
      setDirigeant({
        id_contribuable: parsedData.id,      
        associe_unique:false,
        resident: true ,
        avec_rf: false,
        salarie: false,
        aucune : false,
        nom: "",
        fonction: "",
        cin:"",
        passport:"",
        adresse:"",
        rf:"",
        email:"",
        telephone:"",
        
      });
      setAdd(false); 
    };
  
    

    const headers = [
      
       
        "nom",
        "fonction",
        "cin",
        "passport",
        "adresse",
        "rf",
        "email",
        "telephone",
    ];
  
    const data = entries.map((entry) => [
      
     
       
        entry.nom,
        entry.fonction,
        entry.cin,
        entry.passport,
        entry.adresse,
        entry.rf,
        entry.email,
        entry.telephone,
    ]);
  
  
  const content = (
    
    <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 6:" className="mt-2"></TitleH3>
        <TitleH1 text="Renseignements sur le ou les dirigeants de la société" className="ml-2"></TitleH1>
        </div>
        <TitleH3 text="Procéder comme suit:" className="mt-2"></TitleH3>
        { add === true && ( 
          <div>


  <>
  <div className="flex justify-between mt-6">
    <Label text="Nom "></Label>
    <Input type="text"
    value={Dirigeant.nom}
    onChange={(e)=>{setDirigeant({...Dirigeant , nom: e.target.value})}}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
    <Label text="Fonction"></Label>
    <Input type="text"
    value={Dirigeant.fonction}
    onChange={(e)=>{setDirigeant({...Dirigeant , fonction : e.target.value})}}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
            <Label text="Etranger " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setDirigeant({ ...Dirigeant , resident: true})} checked={Dirigeant.resident == true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setDirigeant({...Dirigeant , resident: false})} checked={Dirigeant.resident == false}></Checkbox>
    </div>
    </div>
    { Dirigeant.resident == false && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numero CIN"></Label>
<Input type="text"
value={Dirigeant.cin}
onChange={(e)=>{setDirigeant({...Dirigeant , cin : e.target.value})}}
></Input>
      </div>
      </>
    )

    }
    { Dirigeant.resident == true && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numéro Passeport ou Carte Résident"></Label>
<Input type="text"
value={Dirigeant.passport}
onChange={(e)=>{setDirigeant({...Dirigeant , passport : e.target.value })}}
></Input>
      </div>
      </>
    )

    }
  <div className="flex justify-between mt-6">
    <Label text="Adresse  "></Label>
    <Input type="text"
     value={Dirigeant.adresse}
     onChange={(e)=>{setDirigeant({...Dirigeant ,adresse: e.target.value})}}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
            <Label text="Autre activité " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Avec RF" onChange={(checked:boolean)=> setDirigeant({...Dirigeant , avec_rf : checked})} checked={Dirigeant.avec_rf} ></Checkbox>
    <Checkbox label="Salarié" onChange={(checked:boolean)=>setDirigeant({...Dirigeant , salarie: checked})} checked={Dirigeant.salarie}></Checkbox>
    <Checkbox label="Aucune " onChange={(checked: boolean)=> setDirigeant({...Dirigeant , aucune: checked})} checked={Dirigeant.aucune}></Checkbox>
    </div>
    </div>
    { Dirigeant.avec_rf === true && (
      <> 
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"
      value={Dirigeant.rf}
      onChange={(e)=>{setDirigeant({...Dirigeant , rf: e.target.value})}}
      ></Input>
    </div>  
      </>
    )

    }
  <div className="flex justify-between mt-6">
    <Label text="Email "></Label>
    <Input type="text"
     value={Dirigeant.email}
     onChange={(e)=>{setDirigeant({...Dirigeant , email: e.target.value})}}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
    <Label text="Telephone "></Label>
    <Input type="text"
     value={Dirigeant.telephone}
     onChange={(e)=>{setDirigeant({...Dirigeant , telephone: e.target.value})}}
    ></Input>
  </div>
   
  
  </>

  
        
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
          <Button label="Précédent" onClick={()=>navigate("/Etablissement")}></Button>
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

export default Dirigeant