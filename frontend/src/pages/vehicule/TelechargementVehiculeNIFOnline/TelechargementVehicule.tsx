import { useState } from "react";
import { Card } from "../../../components/card/card";
import Button from "../../../components/common/Button";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { MainLayout } from "../../../layouts/main";
import axios from "axios";
import * as XLSX from 'xlsx';
interface Date {
 reference_fiscal:string,
 date_debut : string , 
 date_fin : string,
 numero_immatriculation: string
} 
function TelechargementVehicule() {
 const [Date , setDate ] = useState<Date>({
  reference_fiscal:"",
  date_debut: "",
  date_fin : "" ,
  numero_immatriculation:"",
 }) 

const [ Data , setData ] = useState([])

 const HandleDataDonwnload = () =>{

    // Récupérer les données depuis le backend
    axios.post(`http://localhost:3500/vehicle/deuxdates` , Date)
    .then((response) => setData(response.data))
    .catch((error) => console.error(error)); 

    const allData = Data.map((item:any) => ({
      "numimmatriculation": item.numero_immatriculation,
      "marque": item.marque ,
      "type" : item.type,
      "genre": item.genre ,
      "puissance": item.puissance,
      "nbplacecartegrise": item.nombre_place_carte_grise,
      "chargeutile": item.charge_utile,
      "datemisecirculation" : item.date_mise_circulation,
      "poidsavide": item.poids_a_vide ,
      "hikaramana": item.hikaramana,
      "date debut": item.date_debut,
      "Reference Fiscal propriétaire": item.nif_proprietaire,
      "Centre Gestion": item.centre_gestionnaire ,
      "Ancien RF proprietaire": item.anc_nif_proprietaire ,
      "exploitation": item.exploitation,
      "Date validation licence": item.date_validite_licence,
      "catégorie ": item.categorie,
      "sous catégorie ": item.sous_categorie ,
      "zone": item.zone ,
      "age": item.age,
    }));
    console.log(allData)
  
    const ws = XLSX.utils.json_to_sheet(allData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'all_data.xlsx');
 } 
  const contentCard = (
    <div className="m-4">
       
        <div className="text-[#959824] text-3xl text-center font-semibold border-b-2  mt-2 "> PREPARATION DES DONNEES VEHICULES SUR RFonline A TELECHARGER</div>
        {/* <div className="mt-6 flex flex-row justify-between ">
<Label text="Numéro RFonline" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>

</div> */}

  <div className="mt-4 px-20">
    <p className="font-[Courier]">Veuillez remplir le champ ci-dessous: </p>

  </div>

    <div className=" p-8 mt-4 bg-[#c0c0c0]">
   

      <div className="mt-4 flex flex-row justify-between ">
          <Label text="Date début" className="mt-4"></Label>
          <Input type="date" className="w-96  "
                value={Date.date_debut}
                onChange={(e)=>setDate({...Date , date_debut : e.target.value})}>
          </Input>
      </div>

      <div className="mt-4 flex flex-row justify-between item-center ">
          <Label text="Date fin " className="mt-4"></Label>
          <Input type="date" className="w-96  "
                value={Date.date_fin}
                onChange={(e)=>setDate({...Date , date_fin : e.target.value})}>   
          </Input>
      </div>
      
     

    </div>
{/* <div className="mt-6 flex flex-row justify-between ">
<Label text="Numéro Véhicules" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>

</div> */}
<div className="flex justify-center w-full mt-8">
<div className="w-96">
<Button label="Préparer" onClick={HandleDataDonwnload}></Button>
</div> 
</div>
    </div>
)
  return (
    <MainLayout>
    <div className=" mt-14">
    <Card contentCard={contentCard} className="w-[1100px] h-[400px]"></Card>
    </div>
        </MainLayout>
  )
}
export default TelechargementVehicule