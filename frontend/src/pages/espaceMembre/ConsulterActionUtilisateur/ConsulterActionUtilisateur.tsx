import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import axios from "axios";
import DateFormatConverter from "../../../components/date/Date";

function ConsulterActionUtilisateur() {
  const [DataUser ,setDataUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Cette fonction est appelée à chaque fois que le composant est monté ou que `Contribuable` ou `selectedOption` change.
    handleActive();
  }, []);
    const handleActive = async () => {
      try{
        const response = await axios.get("http://localhost:3500/action", {
          
        });
        setDataUser(response.data)
      }catch(error){
        alert("aucune action d'utilisateur")
      }
    };

    console.log(DataUser)
    const headers = [ "Date " , "Contribuable" , "Motif" , "Utilisateur", "Vehicule" ]
  //  Action.map((item)=>[item.nom , item.prenom , item.code , item.type_operateur , 
    // <Checkbox checked={item.actif}/> , item.numero_matricule , item.date_creation_compte , item.date_history , item.motif  ]);

    const filteredData = DataUser.filter((item:any) =>
    item.date_history.toLowerCase().includes(searchTerm.toLowerCase())
  
  )
  const data = filteredData.map((item:any) => [
    <DateFormatConverter isoDate={item.date_history}></DateFormatConverter> , 
    item.id_contribuable ,
    item.motif ,
    item.id_user ,
    item.id_vehicule  
  ]);
  
 const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  }; 
  
 {/** const handleSearchButtonClick = () => {
    // on peut déclencher la recherche ici en utilisant la même logique que handleSearch
    console.log(filteredData);
    // Mettre à jour l'état searchTerm ici en fonction de la logique de recherche
  };
    */}

  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-4xl  text-center font-semibold border-b-2  mt-2">CONSULTATION ACTION UTILISATEUR</div>
<div className="mt-4 flex flex-col  ">
<div className="flex justify-center mt-4">
  
   {/**card recherche  */} 
   <div className="mt-4 flex  justify-center items-center ">
        <Label text="Date :" className="mt-2" ></Label>
        <Input type="date" className="w-96 ml-5 " onChange={handleSearch}></Input>
       {/**     <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
      </div>



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
  <div className="overflow-y-auto w-[1200px] text-align-center mt-10 flex justify-center">
    <Table headers={headers} data={data}></Table>
  </div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[550px] mt-14 ">
  <Card contentCard={contentCard} className="w-[1300px] "></Card>
  </div>
 </MainLayout>
)
}

export default ConsulterActionUtilisateur