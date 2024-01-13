import { useEffect, useState } from "react"
import { Card } from "../../../components/card/card"
import  Button  from "../../../components/common/Button"
import Checkbox from "../../../components/common/checkbox"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import { TitleH1 } from "../../../components/title"
import { MainLayout } from "../../../layouts/main"

function DemandeValidationNif() {
    
    const [selectedOption, setSelectedOption] = useState('');
    const selectedData = localStorage.getItem("selectedValidationData");
    const parsedDataSelected = JSON.parse(selectedData as string);
    const [DataSelected , setDataSelected] = useState([]);
    useEffect(() => {
      setDataSelected(parsedDataSelected)
    }, []);
    
    const generateId = () => {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
      let randomString = "";
      for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return randomString;
    };
  
    const [Value , setValue] = useState<{
      id:string,
      raisonsocial:string,  
      type: string | boolean,
      situationmatrimoinial:string,
      cin:string,
      sexe:string,
      etranger:boolean,
      numero_passeport:string,
      datedelivrancepasseport:string,
      datedelivrancecin:string,
      lieudelivrancecin:string,
      datenaissance:string,
      lieunaissance:string,
      formejuridique:string,
      regimefiscal:string,
      dateagrement: string,
      referenceagrement: string,
      periodegrace:string,
      datecreation: string,
      capital: string,
      rib: string,
      numero_compte_bancaire:string,
      activite : string,
      precision_activite: string,
      date_demande_modif : string ,
      date_attribution_nif : string ,
      registre_commerce : string , 
      date_registre_commerce : string ,
      numero_statistique : string ,
      delivre_le : string,
      nom_commercial : string, 
      }>({
    id: generateId(),
    raisonsocial:"",  
    type:"",
    situationmatrimoinial:"",
    cin:"",
    sexe:"",
    etranger:false,
    numero_passeport:"",
    datedelivrancepasseport:"",
    datedelivrancecin:"",
    lieudelivrancecin:"",
    datenaissance:"",
    lieunaissance:"",
    formejuridique:"",
    regimefiscal:"",
    dateagrement: "",
    referenceagrement: "",
    periodegrace:"",
    datecreation: "",
    capital: "",
    rib: "",
    numero_compte_bancaire:"",
    activite : "",
    precision_activite: "",
    date_demande_modif : "" ,
    date_attribution_nif : "" ,
    registre_commerce : "" , 
    date_registre_commerce : "" ,
    numero_statistique : "" ,
    delivre_le : "",
    nom_commercial :""
    })
    
    const ContentSearch =(
        <div>     
           <div className="  p-4">
       <div className=" p-4">
       <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">
           DEMANDES DE MISE A JOUR DES RENSEIGNEMENTS SUR LES CONTRIBUABLES A VALIDER
         </div>
             <div className="text-xl   text-center p-4 ">
               N° : {parsedDataSelected?parsedDataSelected.id : ""}
             </div>
       </div>
        </div>
        <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          
        <TitleH1 text="Principaux renseignements sur le contribuable" className="ml-2"></TitleH1>
        </div>
        
        <div className="flex justify-between mt-6">
          <Label text=" Raison Social" />
          <Input type="text"
        value={Value.raisonsocial || parsedDataSelected.raisonsocial}
        onChange={(e) => {
          setValue({ ...Value, raisonsocial: e.target.value });
      
        }}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Nom Commercial" />
          <Input type="text" 
           value={Value.nom_commercial || parsedDataSelected.nom_commercial}
           onChange={(e) => {
             setValue({ ...Value, raisonsocial: e.target.value });
             
             
           }}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Type" />
          <div className="flex justify-between">
          <label className="">
    <input
      type="radio"
      value="Total"
      className='mr-2'
      checked={parsedDataSelected.type === "Personne physique" && Value.type ==="Personne physique" }
      onChange={()=>setValue({...Value , type :"Personne physique" })}
    />
    Personne physique
  </label>
  <label className=' ml-4'>
    <input
      type="radio"
      value="ParRF"
      className='mr-2'
      checked={parsedDataSelected.type === "Personne morale"}
      onChange={() => setValue({...Value , type : "Personne morale"})}
    />
    Personne morale
  </label>
          </div>
        </div>
        {parsedDataSelected.type === "Personne physique" && (
  <div>
    <div className='flex justify-between mt-6 '>
    <Label text="Situation matrimoniale "></Label>
    <Input
      type="text"
      value={parsedDataSelected?parsedDataSelected.situationmatrimoinial : "" === Value.situationmatrimoinial}   
      onChange={(e)=>{setValue({...Value , situationmatrimoinial : e.target.value})}}  
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Sexe "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Masculin" onChange={()=>setValue({...Value , type : "Masculin" })} checked={parsedDataSelected.sexe ==="Masculin" && Value.type ==="Masculin"}></Checkbox>
    <Checkbox label="Feminin" onChange={()=> setValue({...Value , type : "Feminin" })} checked={parsedDataSelected.sex ==="Feminin" && Value.type ==="Feminin"}></Checkbox>
    </div>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Etranger "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={(checked)=>setValue({...Value , etranger : checked})} checked={parsedDataSelected.etranger === true  && Value.etranger === true }></Checkbox>
    <Checkbox label="Non" onChange={(checked)=>setValue({...Value , etranger : ! checked})} checked={parsedDataSelected.etranger === false && Value.etranger === false }></Checkbox>
    </div>
  </div>
  { parsedDataSelected.etranger === false && (
    <>
     <div className='flex justify-between mt-6 '>
    <Label text="CIN"></Label>
    <Input
      type="text" 
      value={parsedDataSelected?parsedDataSelected.cin : "" === Value.cin}
      onChange={(e)=>setValue({...Value , cin : e.target.value})}    
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={parsedDataSelected?parsedDataSelected.datedelivrancecin : "" === Value.datedelivrancecin}
      onChange={(e)=>setValue({...Value , datedelivrancecin: e.target.value})}    
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu de délivrance"></Label>
    <Input
      type="text"  
      value={parsedDataSelected?parsedDataSelected.lieudelivrancecin : "" === Value.lieudelivrancecin}
      onChange={(e)=> setValue({...Value , lieudelivrancecin : e.target.value})}   
    ></Input>
  </div>
    </>
  )

  }

  { parsedDataSelected.etranger === true && (

    <>
       <div className='flex justify-between mt-6 '>
    <Label text="N° passport"></Label>
    <Input
      type="text" 
      value={parsedDataSelected?parsedDataSelected.numero_passport : ""  === Value.numero_passeport} 
      onChange={(e)=> setValue({...Value , numero_passeport : e.target.value })}   
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={parsedDataSelected?parsedDataSelected.datedelivrancepasseport : "" === Value.datedelivrancepasseport}
      onChange={(e)=>setValue({...Value , datedelivrancepasseport : e.target.value})}    
    ></Input>
  </div>
    </>
  )

  }
  <div className='flex justify-between mt-6 '>
    <Label text="Date naissance"></Label>
    <Input
      type="date"  
      value={parsedDataSelected? parsedDataSelected.datenaissance : "" === Value.datenaissance}
      onChange={(e)=>setValue({...Value , datenaissance : e.target.value })}   
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu naissance "></Label>
    <Input
      type="text" 
      value={parsedDataSelected?parsedDataSelected.lieunaissance : ""  === Value.lieunaissance}
      onChange={(e)=>setValue({...Value , lieunaissance: e.target.value})}    
    ></Input>
  </div>
  </div>
)}
        <div className="flex justify-between mt-6">
          <Label text="Forme juridique" />
          <Input type="text"
          value={parsedDataSelected?parsedDataSelected.forme_juridique : "" === Value.formejuridique}
          onChange={(e)=>setValue({...Value , formejuridique : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Régime Fiscale" />
          <Input type="text" 
          value={parsedDataSelected?parsedDataSelected.regimefiscal : "" === Value.regimefiscal}
          onChange={(e)=>setValue({...Value , regimefiscal : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date d'agrément" />
          <Input type="date" value={parsedDataSelected?parsedDataSelected.date_agrement : "" === Value.dateagrement}
          onChange={(e)=>setValue({...Value , dateagrement : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Réf. Agrément" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.reference_agrement : "" === Value.referenceagrement}
          onChange={(e)=>setValue({...Value , referenceagrement : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Période de grace" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.periode_grace : "" === Value.periodegrace  } 
          onChange={(e)=>setValue({...Value , periodegrace : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Création" />
          <Input type="date" value={parsedDataSelected?parsedDataSelected.date_creation : ""  === Value.datecreation} 
          onChange={(e)=> setValue({...Value , datecreation : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Capital en Ar" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.capital : "" === Value.capital}
          onChange={(e)=>setValue({...Value , capital: e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Activité" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.activite: "" === Value.activite }
          onChange={(e)=>setValue({...Value , activite : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Précision sur les Activités" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.precision_activite:"" === Value.precision_activite}
          onChange={(e)=> setValue({...Value , precision_activite : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date Demande modif " />
          <Input type="date" value={parsedDataSelected?parsedDataSelected.date_demande_modif: "" === Value.date_demande_modif}
          onChange={(e)=>setValue({...Value , date_demande_modif : e.target.value })}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date d'attribution de RF" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.date_attribution_nif : "" === Value.date_attribution_nif} 
          onChange={(e)=>setValue({...Value , date_attribution_nif : e.target.value })}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Registre de commerce" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.registre_commerce : "" === Value.registre_commerce} 
          onChange={(e)=>setValue({...Value , registre_commerce : e.target.value })}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Registre" />
          <Input type="date" value={parsedDataSelected?parsedDataSelected.date_registre_commerce : "" === Value.date_registre_commerce}
          onChange={(e)=>setValue({...Value , date_registre_commerce : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="N° Statistique" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.numero_statistique : "" === Value.numero_statistique}
          onChange={(e)=>setValue({...Value , numero_statistique : e.target.value  })
          } />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Délivré le" />
          <Input type="text" value={parsedDataSelected?parsedDataSelected.delivre_le : ""  === Value.delivre_le} 
          onChange={(e)=> setValue({...Value , delivre_le : e.target.value})}
          />
        </div>
        
        <div className="mt-16 w-full flex justify-center">
        <div className="w-[800px] ">
          <Button label="Enregistrer" onClick={()=>window}></Button>
        </div>
        </div>
      </div>
    </div>
       </div>
      )
    return (
      <MainLayout>
      <div className="overflow-y-auto h-[500px] mt-14 mb-8">
      <Card contentCard={ContentSearch} className="w-[1000px] h-[2500px]"></Card>
      </div>
          </MainLayout>
    )
  }
  
export default DemandeValidationNif