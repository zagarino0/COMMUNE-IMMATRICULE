import { RiArrowGoBackFill, RiSubtractFill } from "react-icons/ri";
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/checkbox";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import Table from "../../components/table/table";
import { Layout } from "./Layout";
import { AiOutlineSave } from "react-icons/ai";
import { MdOutlineZoomInMap, MdZoomOutMap } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { TitleH1, TitleH3 } from "../../components/title";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Etablissement() {
  const location = useLocation(); 
  let navigate = useNavigate();
  const registrationData = localStorage.getItem("registrationData"); 
  const parsedData = JSON.parse(registrationData as string);
    
  

  const [entries, setEntries] = useState([]); // New state to hold the list of entries

  const [Etablissement , setEtablissment] = useState<{
    id_contribuable: string ,
nom_commercial:string,
activite: string,
titre:string,
date_ouverture:string,
adresse: string,
fokontany: string,
province: string,
region: string,
district: string,
commune:string,
telephone_1:string,
autre_telephone:string,
fax:string,
email:string,
exportateur:boolean,
importateur:boolean,
proprietaire_local: boolean,
id:string

  }>({
    id:"",
    id_contribuable: parsedData.id,
    nom_commercial:"",
    activite: "",
    titre:"",
    date_ouverture:"",
    adresse: "",
    fokontany: "",
    province: "",
    region: "",
    district: "",
    commune:"",
    telephone_1:"",
    autre_telephone:"",
    fax:"",
    email:"",
    exportateur:false,
    importateur:false,
    proprietaire_local: false,
    
  })
    const [add , setAdd] = useState(false);
    
    const [isStorageUpdated, setIsStorageUpdated] = useState(false);

    useEffect(() => {
      // Store Value data in localStorage
      localStorage.setItem("etablissementData", JSON.stringify(entries));
      // Reset the dummy state to trigger rerender
      setIsStorageUpdated(false);
    }, [isStorageUpdated ,entries]);
    
  
      const handleButtonClick = () => {
  
      // Trigger a rerender by updating the dummy state
      setIsStorageUpdated(true);
        const routeToNavigate = "/Dirigeant";
        console.log('Navigating to:', routeToNavigate);
      
        // Use navigate to navigate to the determined route
        navigate(routeToNavigate, { state: { Etablissement } });
       
      };
      // ... (your existing state definitions)
    
      const handleButtonClickSave = () => {
      // Add the current entry to the list of entries
               // Generate a new ID by incrementing the last entry's ID
               const newId = entries.length > 0 ? parseInt(entries[entries.length - 1].id) + 1 : 1;

               // Update the Actionnaire state with the new ID
               setEtablissment((prevEtablissement) => ({
                 ...prevEtablissement,
                 id: newId.toString(),
               }));
           
               // Add the current entry to the list of entries
               setEntries((prevEntries) => [...prevEntries, { ...Etablissement, id: newId.toString() }]);
           
    
        // Reset the Actionnaire state to clear the form
        setEtablissment({
          id_contribuable: parsedData.id,
          nom_commercial:"",
          activite: "",
          titre:"",
          date_ouverture:"",
          adresse: "",
          fokontany: "",
          province: "",
          region: "",
          district: "",
          commune:"",
          telephone_1:"",
          autre_telephone:"",
          fax:"",
          email:"",
          exportateur:false,
          importateur:false,
          proprietaire_local: false,
        });
        setAdd(false); 
      };
    
      const headers = [
        "nom_commercial",
        "activite",
        "titre",
        "date_ouverture",
        "adresse",
        "fokontany",
        "province",
        "region",
        "district",
        "commune",
        "telephone_1",
        "autre_telephone",
        "fax",
        "email",
        "exportateur",
        "importateur",
        "proprietaire_local",
      ];
    
      const data = entries.map((entry) => [
        
        entry.nom_commercial,
        entry.activite,
        entry.titre,
        entry.date_ouverture,
        entry.adresse,
        entry.fokontany,
        entry.province,
        entry.region,
        entry.district,
        entry.commune,
        entry.telephone_1,
        entry.autre_telephone,
        entry.fax,
        entry.email,
        entry.exportateur,
        entry.importateur,
        entry.proprietaire_local
      ]);
    
    
    const content = (
      
      <div className="flex justify-center w-full h-full mt-28 p-8">
        <div className="flex flex-col w-[1000px]">
          <div className="flex flex-row">
            <TitleH3 text="Etape 5:" className="mt-2"></TitleH3>
          <TitleH1 text="Principaux renseignements sur l'établissement / Lieu d'exploitation" className="ml-2"></TitleH1>
          </div>
          <TitleH3 text="Procéder comme suit:" className="mt-2"></TitleH3>
          { add === true && ( 
            <div>
  
  
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom commercial"></Label>
      <Input type="text"
      value={Etablissement.nom_commercial}
      onChange={(e)=>{setEtablissment({...Etablissement , nom_commercial: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Activité"></Label>
      <Input type="text"
       value={Etablissement.activite}
       onChange={(e)=>{setEtablissment({...Etablissement , activite: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Titre "></Label>
      <Input type="text"
       value={Etablissement.titre}
       onChange={(e)=>{setEtablissment({...Etablissement , titre: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Date Ouverture "></Label>
      <Input type="date"
       value={Etablissement.date_ouverture}
       onChange={(e)=>{setEtablissment({...Etablissement , date_ouverture: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Adresse  / Lot "></Label>
      <Input type="text"
       value={Etablissement.adresse}
       onChange={(e)=>{setEtablissment({...Etablissement , adresse: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fokontany "></Label>
      <Input type="text"
       value={Etablissement.fokontany}
       onChange={(e)=>{setEtablissment({...Etablissement , fokontany: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Province "></Label>
      <Input type="text"
       value={Etablissement.province}
       onChange={(e)=>{setEtablissment({...Etablissement , province: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Région  "></Label>
      <Input type="text"
       value={Etablissement.region}
       onChange={(e)=>{setEtablissment({...Etablissement , region: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="District  "></Label>
      <Input type="text"
       value={Etablissement.district}
       onChange={(e)=>{setEtablissment({...Etablissement , district: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Commune "></Label>
      <Input type="text"
       value={Etablissement.commune}
       onChange={(e)=>{setEtablissment({...Etablissement , commune: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Téléphone 1  "></Label>
      <Input type="text"
       value={Etablissement.telephone_1}
       onChange={(e)=>{setEtablissment({...Etablissement , telephone_1: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Autre Téléphone "></Label>
      <Input type="text"
       value={Etablissement.autre_telephone}
       onChange={(e)=>{setEtablissment({...Etablissement , autre_telephone: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fax "></Label>
      <Input type="text"
       value={Etablissement.fax}
       onChange={(e)=>{setEtablissment({...Etablissement , fax: e.target.value})}}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="E-mail "></Label>
      <Input type="text"
       value={Etablissement.email}
       onChange={(e)=>{setEtablissment({...Etablissement , email: e.target.value})}}
      ></Input>
    </div>
   
   
    <div className="flex justify-between mt-6">
            <Label text="Propriétaire du local" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={(checked)=>{setEtablissment({...Etablissement , proprietaire_local: checked})}} checked={Etablissement.proprietaire_local == true}></Checkbox>
    <Checkbox label="Non" onChange={(checked)=>{setEtablissment({...Etablissement , proprietaire_local: !checked})}} checked={Etablissement.proprietaire_local == false}></Checkbox>
    </div>
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
            <Button label="Précédent" onClick={()=>navigate("/Associe")}></Button>
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
export default Etablissement