import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card"
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
import { Link } from "react-router-dom";
import { SiMicrosoftexcel } from "react-icons/si";
import { TitleH3 } from "../../../components/title";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import axios from "axios";
import { Button } from "../../../components/common";

function RechercheContribuablePage() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2nd, setIsChecked2nd] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
      };
      const handleCheckboxChangeSecond = (checked: boolean) => {
          setIsChecked2nd(checked);
        };
        const handleCheckboxChange3 = (checked: boolean) => {
            setIsChecked3(checked);
          };
          const handleCheckboxChange4 = (checked: boolean) => {
            setIsChecked4(checked);
          };
          const handleCheckboxChange5 = (checked: boolean) => {
            setIsChecked5(checked);
          };
          const handleCheckboxChange6 = (checked: boolean) => {
            setIsChecked6(checked);
          };
   

    const [Contribuable , setContribuable ]  =  useState<{
      domaine_recherche : string ,
      reference : string ,
      cin:string,
      raison_social : string,
      adresse : string,
      nom_commercial: string,
      date_debut : string ,
      date_fin : string,
      reference_fiscal : string
      regimfiscal : string , 
      type: string      
      }>({
        domaine_recherche : "" ,
        reference : "" ,
        cin:"",
        raison_social:"",
        adresse:"",
        nom_commercial:"",
        date_debut : "" ,
        date_fin : "",
        reference_fiscal: "",
        regimfiscal : "",
        type: ""
      })
  


const [DataContribuable ,setDataContribuble] = useState([]);
useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/etat/contribuable/valide')
      .then((response) => setDataContribuble(response.data))
      .catch((error) => console.error(error));
  }, []);


 
    

  const handleSearchClient = async () => {
    const DataSearch ={
    
  "reference_fiscal": Contribuable.reference_fiscal,
    
    }
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/etat/contribuable/valide", DataSearch);
      setDataContribuble(response.data);
      // Check the response status or do something with the response
      console.log("Server Response:", DataContribuable );
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };
    

  const headers = [ "Référence" , "Raison social" , "référence fiscal" , "Type" , "CIN" , "Passport" , "Sexe"]
  const data = DataContribuable.map((item)=>[item.id , item.raison_social , item.reference_fiscal , item.type , item.cin , item.numero_passeport , item.sexe])
    
      const options = [
        { value: 'référence', label: 'référence' },
        { value: 'Raison sociale', label: 'Raison sociale' },
        { value: 'Référence fiscal', label: 'Référence fiscal' },
        { value: 'CIN', label: 'CIN' },
        { value: 'Adresse', label: 'Adresse' },
        { value: 'Nom commercial', label: 'Nom commercial' },
      ];
    
    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4">Consultation des Référence Fiscal</div>
           <div className="flex flex-col m-4">
<div className="mt-6 flex flex-row justify-between">
    <Label text="Domaine de Recherche :" className="mt-4"></Label>
    <Select options={options} value={Contribuable.domaine_recherche} onChange={(option)=>setContribuable({...Contribuable , domaine_recherche : option})} className="w-96  "/>
</div>
{Contribuable.domaine_recherche === "Raison sociale" &&(

<div className="mt-4 flex justify-between">
<Label text="Raison Social :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.raison_social}
onChange={(e)=> {setContribuable({...Contribuable , raison_social: e.target.value})}}
></Input>
</div>
) 
}

{Contribuable.domaine_recherche === "référence" &&(

<div className="mt-4 flex justify-between">
<Label text="Réference :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.reference}
onChange={(e)=> {setContribuable({...Contribuable , reference: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "Référence fiscal" &&(

<div className="mt-4 flex justify-between">
<Label text="Référence fiscal :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.reference_fiscal}
onChange={(e)=> {setContribuable({...Contribuable , reference_fiscal: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "CIN" &&(

<div className="mt-4 flex justify-between">
<Label text="CIN :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.cin}
onChange={(e)=> {setContribuable({...Contribuable , cin: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "Adresse" &&(

<div className="mt-4 flex justify-between">
<Label text="Adresse :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.adresse}
onChange={(e)=> {setContribuable({...Contribuable , adresse: e.target.value})}}
></Input>
</div>
) 
}
{Contribuable.domaine_recherche === "Nom commercial" &&(

<div className="mt-4 flex justify-between">
<Label text="Nom Commercial :"></Label>
<Input type="text" className="w-96  "
value={Contribuable.nom_commercial}
onChange={(e)=> {setContribuable({...Contribuable , nom_commercial: e.target.value})}}
></Input>
</div>
) 
}
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Régime fiscal :" className="mt-4"></Label>
 <Input
 value={Contribuable.regimfiscal}
 onChange={(e)=> setContribuable({...Contribuable , regimfiscal : e.target.value })}
 type="text" placeholder="Régime fiscal" className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Date de validation Du :" className="mt-4"></Label>
 <Input 
 value={Contribuable.date_debut}
 onChange={(e)=>setContribuable({...Contribuable , date_debut : e.target.value})}
 type="date"  className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Au :" className="mt-4"></Label>
 <Input type="date" 
 value={Contribuable.date_fin}
 onChange={(e)=>setContribuable({...Contribuable , date_fin : e.target.value})}
 className="w-96 "></Input>
 </div>

  <div className="mt-6 flex flex-row justify-between" >
<div>
<Label text="Type :" className="mt-4"></Label>
</div>
<div>
<Checkbox label="Physique" checked={Contribuable.type ==="Personne physique"} onChange={()=>setContribuable({...Contribuable , type : "Personne physique"})}></Checkbox>
<Checkbox label="Morale" checked={Contribuable.type === "Personne moral"} onChange={()=>setContribuable({...Contribuable , type : "Personne moral"})}></Checkbox>
</div>
  </div>
           </div>

<div className="mt-6">
<Button text="Lister" onClick={handleSearchClient}></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-12">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
<Link to="/VoirContribuableDetail"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>

</div>
        </div>
    )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
   <Card contentCard={contentCard} className="w-[800px] h-[1200px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default RechercheContribuablePage