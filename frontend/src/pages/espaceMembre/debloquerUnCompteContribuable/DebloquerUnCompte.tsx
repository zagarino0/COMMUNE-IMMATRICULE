import { useState, useEffect } from "react";
import { MainLayout } from "../../../layouts/main";
import { Card } from "../../../components/card/card";
//import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import axios from "axios";
import Table from "../../../components/table/table";
import Checkbox from "../../../components/common/checkbox";
import { Button } from "../../../components/common";


function DebloquerUnComptePage() {
  const [DataUser, setDataUser] = useState([])
  const [ searchTerm,  setSearchTerm] = useState("")


  useEffect(() => {

    axios.get('http://localhost:3500/user/inactif')
      .then((response) => setDataUser(response.data))
      .catch((error) => console.error(error));
  }, []);


  
      const handleReactivation = async (code: string) => {
        const UserCode = {
          "code" : code,
        };
        try {
          await axios.post(`http://localhost:3500/user/reactivation`, UserCode);
          setDataUser((prevData) => prevData.filter((data : any) => data.code !== code));
    
          alert(`L'utilisateur avec le code : ${code} est activé.`);
        } catch (error) {
          console.error('Error deactivating user:', error);
        }
      };

      const handleDelete = async (code: string) => {
        const UserCode = {
          "code" : code,
        };
        try {
          await axios.post(`http://localhost:3500/user/delete`, UserCode);
          setDataUser((prevData) => prevData.filter((data : any) => data.code !== code));
    
          alert(`L'utilisateur avec le code : ${code} est suprimmé.`);
        } catch (error) {
          console.error('Error deactivating user:', error);
          alert(`erreur  : ${error}`)
        }
      };
  
    console.log(DataUser)
    const headers = ["Nom", "Prenom", "Code", "Type opérateur", "Actif", "Numéro matriculé", "Désactiver",  "Supprimer"];  
    const filteredData = DataUser.filter((item:any) =>
    item.numero_matricule &&   item.numero_matricule.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const data = filteredData.map((item:any) => [
    item.nom,
    item.prenom,
    item.code,
    item.type_operateur,
    <Checkbox onChange={()=>window} checked = {item.actif} />,
    item.numero_matricule,
    <Button text="Activer" className='cursor-pointer text-align-center px-2 h-[40px]' onClick={() => handleReactivation(item.code)}/>,
    <Button text="Supprimer" className='cursor-pointer text-align-center  px-2 h-[40px]' onClick={() => handleDelete(item.code)} />,
  ]);
  
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
{/**  
  const handleSearchButtonClick = () => {
    console.log(filteredData);
  };
 */}

      const contentCard =(
        <div className="flex justify-center items-center">
      <div className="flex flex-col">
      <div className="text-[#959824] text-4xl  text-center font-semibold border-b-2 mt-8">GESTION DE COMPTE CONTRIBUABLE</div>
          {/**card recherche  */} 
            <div className="mt-8 flex  justify-center ">
              <Label text="code" className="mt-2" ></Label>
              <Input type="text" className="w-96 ml-5 " onChange={handleSearch}></Input>
                {/**  <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
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
      
   
      
<div className="overflow-y-auto  mt-6">
   <Table headers={headers}data={data}></Table>
</div>

      </div>
      </div>
      
      )  
      return (
      <MainLayout>
          <div className="overflow-y-auto h-[550px] mt-14 mb-8">
              <Card className="w-[1300px] mt-10" contentCard={contentCard}></Card>
          </div>
      </MainLayout>
      )
      }
      

export default DebloquerUnComptePage