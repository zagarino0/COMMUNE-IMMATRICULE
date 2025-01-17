import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { SiMicrosoftexcel } from "react-icons/si";
import { TitleH1, TitleH3 } from "../../../components/title";
import Table from "../../../components/table/table";
//import { Button } from "../../../components/common";
//import Select from "../../../components/inputs/selectInput";
//import { Label } from "../../../components/label/label";
//import Input from "../../../components/inputs";
import { useEffect, useState } from "react";
import axios from "axios";

function ListeContribuableVeilleuse() {

  const [contribuable] = useState<{
    reference: string,
    raison_social:string,
    reference_fiscal:string,
    type: string,
    cin:string ,
    numero_passeport:string,
    sexe: string,
  }>({
    reference:"",
    raison_social:"",
    reference_fiscal:"",
    type:"",
    cin:"",
    numero_passeport:"",
    sexe:"",
  });
  
    const [dataUser ,setContribuable] = useState([]);
    useEffect(() => {
      // Cette fonction est appelée à chaque fois que le composant est monté ou que `Contribuable` ou `selectedOption` change.
      handleActive();
    }, [contribuable]);
    const handleActive = async () => {
      try{
        const response = await axios.get('http://localhost:3500/consultation/contribuable/veille',{});
          setContribuable(response.data);
      }
      catch(error)
      {
           console.log('An  error occurred during the request');
        }
    };

  



  //const [selectedOption, setSelectedOption] = useState('');

  const headers = [ "Référence" , "Raison social" , "référence fiscal" , "Type" , "CIN" , "Passport" , "Sexe"]
  const data = dataUser.map((item : any )=>[item.id , item.raison_social , item.reference_fiscal , item.type , item.cin , item.numero_passeport , item.sexe])

{/**

  //option select input
  const options = [
    { value: 'référence', label: 'référence' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'NIF', label: 'NIF' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];

  // onChange in the select input 
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };




*/}


  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl text-center font-semibold border-b-2 border-[#959824] mt-2" text="CONSULTATION DES CONTRIBUABLES MISE EN VEUILLEUSES"></TitleH1></div>
<div className="mt-6 flex flex-col  ">
{/**
 * <div className="flex justify-between mt-6">
  <Label text="Date  Du"></Label>
<Input type="date"  className=" w-40"></Input>
</div>
<div className="flex justify-between mt-6">
  <Label text="Au"></Label>
<Input type="date"  className=" w-40"></Input>
</div>

<div className="flex justify-between mt-6">
  <Label text="Région"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>
<div className="flex justify-between mt-6">
  <Label text="CF Gestionnaire"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>

<Button text="Lister" className="mt-6" type="submit"  ></Button>
 */}


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
<Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>

</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[800px] h-[1000px] "></Card>
  </div>
 </MainLayout>
)
}

export default ListeContribuableVeilleuse