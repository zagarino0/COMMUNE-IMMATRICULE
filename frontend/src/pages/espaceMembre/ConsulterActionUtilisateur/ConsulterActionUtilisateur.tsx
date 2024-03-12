import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
//import { Button } from "../../../components/common";
//import Input from "../../../components/inputs";
//import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import axios from "axios";
import Checkbox from "../../../components/common/checkbox";

function ConsulterActionUtilisateur() {
  const [Action] = useState([])
  const [DataUser ,setDataUser] = useState([]);
  useEffect(() => {
    // Cette fonction est appelée à chaque fois que le composant est monté ou que `Contribuable` ou `selectedOption` change.
    handleSearch();
  }, [Action]);
    const handleSearch = async () => {
      try{
        const response = await axios.get("http://localhost:3500/consultation/contribuable/valide", {
          
        });
        setDataUser(response.data)
      }catch(error){
        alert("aucune action d'utilisateur")
      }
    };

    const headers = [ "Nom" , "Prenom" , "code" , "Type opérateur" , "Actif" , "Numéro matriculé" , "Date de Création Compte " , "Date historie" , "Motif" ]
    const data = DataUser.map((item:any)=>[item.nom , item.prenom , item.code , item.type_operateur ,
       <Checkbox checked ={item.actif}/> , item.numero_matricule , item.date_creation_compte , item.date_history , item.motif  ])
  //  Action.map((item)=>[item.nom , item.prenom , item.code , item.type_operateur , 
    // <Checkbox checked={item.actif}/> , item.numero_matricule , item.date_creation_compte , item.date_history , item.motif  ]);
      

  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  text-center font-semibold border-b-2 border-[#959824] mt-2">Consultation action utilisateur</div>
<div className="mt-6 flex flex-col  ">
<div className="flex justify-between mt-6">



  {/**
   *   <Label text="Login"></Label>
<Input type="text" 
value={Action.login}
onChange={(e)=>{setACtion({...Action , login : e.target.value})}}
placeholder="Login" className=" w-40"></Input>

   * <div className=" flex justify-between mt-6">
  <Label text="Date debut"></Label>
<Input type="date" 
value={Action.date_debut}
onChange={(e)=>{setACtion({...Action , date_debut : e.target.value})}}
 className=" w-40"></Input>

</div>
   * <div className="flex justify-between mt-6">
  <Label text="Date fin"></Label>
<Input type="date" 
value={Action.date_fin}
onChange={(e)=>{setACtion({...Action , date_fin : e.target.value})}}
className=" w-40"></Input>

</div>
   * 
   * <Button text="Rechercher" className="mt-6" onClick={handleSearch}></Button>
   */}


</div>



</div>
<div className="overflow-y-auto w-[500px] mt-10">
<Table

headers={headers}
data={data}
></Table>
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
  <Card contentCard={contentCard} className="w-[800px] h-[800px] "></Card>
  </div>
 </MainLayout>
)
}

export default ConsulterActionUtilisateur