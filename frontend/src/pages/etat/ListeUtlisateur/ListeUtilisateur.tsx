import { ImFilePdf } from "react-icons/im";
import { Card } from "../../../components/card/card";
import { TitleH1, TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { SiMicrosoftexcel } from "react-icons/si";
import Table from "../../../components/table/table";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import axios from "axios";
import { useState, useEffect } from "react";


function ListeUtilisateur() {
  const [dataTable ,setDataTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 
  useEffect(() => {
    axios.get('http://localhost:3500/user/all')
      .then((response) => setDataTable(response.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(dataTable)
  const headers = ["Code", "Nom", "Prénom", "Numéro matriculé" , "Type opérateur"];
    const filteredData = dataTable.filter((item:any) =>
    item.numero_matricule.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const data = filteredData.map((item :any) => [
    item.code,
    item.nom,
    item.prenom,
    item.numero_matricule,
    item.type_operateur,
  ]);
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchButtonClick = () => {
    console.log(filteredData);
  };
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className=""><TitleH1 text="Liste des Utilisateurs" className="text-[#959824] text-sm border-b-2 border-[#959824] mt-2"></TitleH1></div>
<div className="mt-6 flex flex-col">


    {/**card recherche  */} 
      <div className="mt-6 flex  justify-between ">
        <Label text="numéro matricule" className="mt-3" ></Label>
        <Input type="text" className="w-96 ml-5 mb-3"placeholder="numéro immatricule Ex:1234556" onChange={handleSearch}></Input>
            <Button text="Rechercher" className="ml-6 mb-5 " onClick={handleSearchButtonClick} ></Button>
      </div>

<Table headers={headers}data={data}></Table>
</div>
<div className="flex justify-between mt-12">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf   className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>

</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[800px] h-[600px] "></Card>
  </div>
 </MainLayout>
)
}

export default ListeUtilisateur