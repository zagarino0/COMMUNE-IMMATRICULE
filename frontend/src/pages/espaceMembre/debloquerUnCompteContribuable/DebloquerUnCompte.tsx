import { useState, useEffect } from "react";
import { MainLayout } from "../../../layouts/main";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import axios from "axios";
import Table from "../../../components/table/table";
import Checkbox from "../../../components/common/checkbox";


function DebloquerUnComptePage() {
  const [DataUser, setDataUser] = useState([])
  const [ searchTerm,  setSearchTerm] = useState("")
 
      useEffect(() => {
        handleActive();
      },[DataUser])

    const handleActive = async () => {
      try{
        const response = await axios.get("http://localhost:3500/consultation/contribuable/miseajouravalide", {});
        setDataUser(response.data)
      }
        catch(error){
            alert("aucune action utilisateur")
 
      }
    };
  
    console.log(DataUser)
    const headers = [ "Nom" , "Prenom" , "code" , "Type opérateur" , "Actif" , "Numéro matriculé" ]  
    const filteredData = DataUser.filter((item:any) =>
    item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  
  );
  const data = filteredData.map((item:any) => [
    item.nom , 
    item.prenom , 
    item.code , 
    item.type_operateur , 
    <Checkbox checked={item.actif}/>, 
    item.numero_matricule,
  ]);
  
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSearchButtonClick = () => {
    console.log(filteredData);
  };


      const contentCard =(
        <div className="flex justify-center items-center">
      <div className="flex flex-col">
      <div className="text-[#959824] text-3xl  text-center font-semibold border-b-2 border-[#959824] mt-6">Gestion de compte contribuable</div>
          {/**card recherche  */} 
            <div className="mt-6 flex  justify-between ">
              <Label text="code" className="mt-2" ></Label>
              <Input type="text" className="w-96 ml-5 " onChange={handleSearch}></Input>
                  <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button>
            </div>
      {/**
        <div className="flex justify-between mt-6 p-8 w-full">
        <Label text="Référence Fiscal" className="w-60 mt-2"></Label>
              <Input type="text" 
              onChange={(e)=>{setDebloque({...Debloque , reference_fiscal  : e.target.value})}}
              placeholder="Référence Fiscal" className=" w-full ml-4"></Input>
      
      <Button type="submit" text="Recherche" className=" ml-4"  onClick={handleSearch}  ></Button>
      
      
      
       </div>
       * 
       */}
      
   
      
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