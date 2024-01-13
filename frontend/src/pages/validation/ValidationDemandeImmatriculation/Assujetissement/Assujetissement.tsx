

import { Card } from "../../../../components/card/card";
import { Button } from "../../../../components/common";
import Checkbox from "../../../../components/common/checkbox";
import Input from "../../../../components/inputs";
import Select from "../../../../components/inputs/selectInput";
import { Label } from "../../../../components/label/label";
import { MainLayout } from "../../../../layouts/main";

import { useEffect, useState } from "react";
import Table from "../../../../components/table/table";
import { AiOutlineSave } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Assujetissement() {

  function generatePassword() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.!@#$%^&*()<>?/";
    const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }
  
    const [selectedOption, setSelectedOption] = useState('');
    const selectedData = localStorage.getItem("selectedValidationData");
    const DataSelected = JSON.parse(selectedData as string);
    const parsedDataSelected = DataSelected.Data
    console.log(parsedDataSelected)
    const [Assujetissement , setAssujetissement] = useState<{
      id_contribuable: string,
      imposition:string,
      date_debut:string,
      periodicite: string,
      annee: string,
      actif: boolean,
      exonere: boolean,
      period_1: string;
      period_2: string,
      etat: string,
      date_exe: string,
      date_assujetissement: string,
    }>({

      id_contribuable: parsedDataSelected.id,
      imposition:"",
      date_debut:"",
      periodicite: "",
      annee: "",
      actif: false,
      exonere: false,
      period_1: "",
      period_2: "",
      etat: "",
      date_exe: "",
      date_assujetissement: "",

    })
    let navigate = useNavigate();
    const handleCheckboxChange  = () => {
          
    };
    

    const [entries, setEntries] = useState([]); // New state to hold the list of entries



    const handleButtonClickSave = () => {
      // Add the current entry to the list of entries
      setEntries((prevEntries) => [...prevEntries, Assujetissement]);
  
      // Reset the Actionnaire state to clear the form
      setAssujetissement({
        id_contribuable: parsedDataSelected.id,
        imposition:"",
        date_debut:"",
        periodicite: "",
        annee: "",
        actif: false,
        exonere: false,
        period_1: "",
        period_2: "",
        etat: "",
        date_exe: "",
        date_assujetissement: "",
  
  
      });
       
    };
  
    const headers = [
      "imposition",
      "date_debut",
      "periodicite",
      "annee",
      "actif",
      "exonere",
      "period_1",
      "period_2",
      "etat",
      "date_exe",
      "date_assujetissement",

    ];
  
    const data = entries.map((entry) => [
        entry.imposition,
        entry.date_debut,
        entry.periodicite,
        entry.annee,
        entry.actif,
        entry.exonere,
        entry.period_1,
        entry.period_2,
        entry.etat,
        entry.date_exe,
        entry.date_assujetissement,
  
    ]);
  
  // New state to hold the list of entries 
  const [Interlocuteur , setInterlocuteur] = useState<{
    id_contribuable: string,
 nom: string,
 titre:string,
 adresse: string,
 telephone: string,
 email: string,

  }>({ 
 id_contribuable: parsedDataSelected.id,
 nom: "",
 titre:"",
 adresse: "",
 telephone: "",
 email: "",
 
  })

  const [Coordonnees , setCoordonnees ] = useState<{
    id_contribuable: string,
    longitude: string,
    laltitude : string
  }>({
   id_contribuable: parsedDataSelected.id,
   longitude : "",
   laltitude : ""
  })


  const HandleClick = async  () =>{


    if (entries){
    
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/assujetissement", entries);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
      alert("Assujetissement ajouté")
      setAssujetissement({
        id_contribuable: parsedDataSelected.id,
        imposition:"",
        date_debut:"",
        periodicite: "",
        annee: "",
        actif: false,
        exonere: false,
        period_1: "",
        period_2: "",
        etat: "",
        date_exe: "",
        date_assujetissement: "",
  
  
      });
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("erreur Assujetissment")
    }
    }
    
    if(Interlocuteur){
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/interlocuteur", Interlocuteur);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
    
     alert("Interlocuteur ajouté");
     setInterlocuteur({ 
      id_contribuable: parsedDataSelected.id,
      nom: "",
      titre:"",
      adresse: "",
      telephone: "",
      email: "",
      
       })
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("Erreur interlocuteur")
    }
    
    }
    
         
    if(Coordonnees){
      try {
        // Make a POST request to your server endpoint
        const response = await axios.post("http://localhost:3500/coordonnees", Coordonnees);
      
        // Check the response status or do something with the response
        console.log("Server Response:", response.data);
      
       alert("Ajout coordonnées");
       setCoordonnees({ 
        id_contribuable: parsedDataSelected.id,
        longitude:"",
        laltitude : ""
         })
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        alert("Erreur interlocuteur")
      }
      
      }
         
      if(parsedDataSelected){
        const mdp = generatePassword() ;
        const reference_fiscal  = {
          "reference_fiscal" : parsedDataSelected.reference_fiscal,
           "mot_de_passe" : mdp ,
        }
        try {
          // Make a POST request to your server endpoint
          const response = await axios.post("http://localhost:3500/contribuable/validation/contribuable", reference_fiscal);
        
          // Check the response status or do something with the response
          console.log("Server Response:", response.data);
        
         alert("Générationde mot de passe en cours");
         alert(`le mot de passe est ${mdp}`)
         
        } catch (error) {
          // Handle errors
          console.error("Error:", error);
          alert("Erreur Code de validation")
        }
        
        }
      

    
    }
 const [DataCode , setDataCode] = useState([])
    useEffect(() => {
      // Récupérer les données depuis le backend
      axios.get('http://localhost:3500/impot')
        .then((response) => setDataCode(response.data))
        .catch((error) => console.error(error));
    }, []);


  
    const contentCard = (
        <div className="m-4 mb-4">
       
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Assujetissement des contribuables ayant le RF : {parsedDataSelected?parsedDataSelected.id:""}</div>
<div className="flex flex-col">
<div className="mt-6 flex flex-row justify-between ">
<Label text="Raison social" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.raison_social :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Nom commercial" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.nom_commercial :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Type" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Personne physique" checked={parsedDataSelected.type === "Personne physique"} onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Personne morale"  checked={parsedDataSelected.type === "Personne morale"} onChange={handleCheckboxChange} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Forme juridique" className="mt-4"></Label>
<Input type="text" value={parsedDataSelected? parsedDataSelected.forme_juridique : ""}></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Régime Fiscal" className="mt-4"></Label>
<Input type="text" value={parsedDataSelected? parsedDataSelected.regimefiscal : ""}></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date d'agrément" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.date_agrement :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Réf. agrément" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.reference_agrement :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période de grace" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.periode_grace :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date de création" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.date_creation :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Capital en Ar" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.capital :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Activités" className="mt-4"></Label>
<Input type="textarea" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.activite :""}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Précision sur les Activités" className="mt-4"></Label>
<Input type="textarea" className="w-96  "
value={ parsedDataSelected ? parsedDataSelected.precision_activite :""}
></Input>
</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[1200px] p-4">
<div className="flex flex-row">

<Label text={`régime d'imposition :`} className="ml-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Imposition" className="mt-4"></Label>
<Select 
 options={DataCode.map((item) => ({
  value: item.libelle,
  label: item.libelle,
}))}

 value={Assujetissement.imposition} onChange={(options)=>{setAssujetissement({...Assujetissement , imposition : options })}} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date début" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_debut}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_debut : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date fin" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_exe}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_exe : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Périodicité" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.periodicite}
onChange={(e)=>{setAssujetissement({...Assujetissement , periodicite : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Année" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.annee}
onChange={(e)=>{setAssujetissement({...Assujetissement , annee : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Actif" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked={Assujetissement.actif === true} onChange={(checked)=>{setAssujetissement({...Assujetissement , actif : checked })}}></Checkbox>
<Checkbox label="Non" checked={Assujetissement.actif === false} onChange={(checked)=>{setAssujetissement({...Assujetissement , actif : !checked })}} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Exonoré" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked={Assujetissement.exonere === true} onChange={(checked)=>{setAssujetissement({...Assujetissement , exonere : checked })}}></Checkbox>
<Checkbox label="Non" checked={Assujetissement.exonere === false} onChange={(checked)=>{setAssujetissement({...Assujetissement , exonere : ! checked })}} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période 1" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.period_1}
onChange={(e)=>{setAssujetissement({...Assujetissement , period_1 : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période 2" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.period_2}
onChange={(e)=>{setAssujetissement({...Assujetissement , period_2 : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Etat" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Création" checked={Assujetissement.etat === "Création"} onChange={()=>{setAssujetissement({...Assujetissement , etat : "Création" })}}></Checkbox>
<Checkbox label="Rénouvellement" checked={Assujetissement.etat === "Rénouvellement"} onChange={()=>{setAssujetissement({...Assujetissement , etat : "Rénouvellement" })}} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date exe" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_exe}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_exe : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date assujestissement" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_assujetissement}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_assujetissement: e.target.value})}}
></Input>
</div>
<button onClick={handleButtonClickSave} className=" mt-6 w-40 -border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
<div className="w-[750px] mt-6 overflow-y-auto h-[400px]">
  <Table
headers={headers}
data={data}
></Table>
</div>
</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[400px] p-4">
<Label text={`Interlocuteur :`} className="ml-4"></Label>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Nom" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Interlocuteur.nom}
onChange={(e)=>setInterlocuteur({...Interlocuteur , nom : e.target.value})}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Titre" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Interlocuteur.titre}
onChange={(e)=>setInterlocuteur({...Interlocuteur , titre : e.target.value})}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Adresse" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Interlocuteur.adresse}
onChange={(e)=>setInterlocuteur({...Interlocuteur ,adresse : e.target.value})}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Tel" className="mt-4"></Label>
<Input type="E-mail" className="w-96  "
value={Interlocuteur.email}
onChange={(e)=>setInterlocuteur({...Interlocuteur , email : e.target.value})}
></Input>
</div>
</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[220px] p-4">
<Label text={`Coordonnées géographique :`} className="ml-4"></Label>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Longitude" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Coordonnees.longitude}
onChange={(e)=> setCoordonnees({...Coordonnees , longitude : e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Laltitude" className="mt-4"></Label>
<Input type="text" className="w-96  "

value={Coordonnees.laltitude}
onChange={(e)=> setCoordonnees({...Coordonnees , laltitude : e.target.value })}
></Input>
</div>

</div>

<div className="flex justify-between mt-4">
<Button text="Valider" onClick={HandleClick}></Button>
  
  <Button text="Rejeter " onClick={ () => navigate("/saisirmotifrejet")}></Button>
</div>
</div>
  
    </div>


  )
  return (
  <MainLayout>
  <div className="  overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[800px] h-[4000px]"></Card>
  </div>
      </MainLayout>
  )
  }
  
export default Assujetissement