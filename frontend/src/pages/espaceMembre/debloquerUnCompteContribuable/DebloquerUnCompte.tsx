import { useEffect, useState } from "react";
import { MainLayout } from "../../../layouts/main";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import axios from "axios";
import Table from "../../../components/table/table";
import Checkbox from "../../../components/common/checkbox";

function DebloquerUnComptePage() {
   
  const [DataUser ,setDataUser] = useState([]);
  useEffect(() => {
      // Récupérer les données depuis le backend
      axios.get('http://localhost:3500/user/inactif')
        .then((response) => setDataUser(response.data))
        .catch((error) => console.error(error));
    }, []);
  
    console.log(DataUser)
    const headers = [ "Nom" , "Prenom" , "code" , "Type opérateur" , "Actif" , "Numéro matriculé" ]
    const data = DataUser.map((item)=>[item.nom , item.prenom , item.code , item.type_operateur , <Checkbox checked={item.actif}/>, item.numero_matricule ])
      

      const contentCard =(
        <div className="flex justify-center items-center">
      <div className="flex flex-col">
      <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Cestion compte Contribuable</div>
      
      <div className="flex justify-between mt-6 p-8 w-full">
        <Label text="Référence Fiscal" className="w-60 mt-2"></Label>
      <Input type="text" placeholder="Référence Fiscal" className=" w-full ml-4"></Input>
      
      <Button type="submit" text="Recherche" className=" ml-4"></Button>
      
      
      
      </div>
      
<div className="mt-6">
<Table

headers={headers}
data={data}
></Table>
</div>

      </div>
      </div>
      
      )  
      return (
      <MainLayout>
          <div className="overflow-y-auto h-[500px] mt-14 mb-8">
          <Card className="w-[800px] h-[800px]" contentCard={contentCard}></Card>
          </div>
      </MainLayout>
      )
      }
      

export default DebloquerUnComptePage