import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card"
import { MainLayout } from "../../../layouts/main"
import { TiDocumentText } from "react-icons/ti";
import Table from "../../../components/table/table";
//import { Button } from "../../../components/common";
// import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
import { TitleH3 } from "../../../components/title";
import { useEffect, useState } from "react";
import axios from "axios";
import DateFormatConverter from "../../../components/date/Date";


function HIstoriqueContribuable() {
    // const [selectedOption, setSelectedOption] = useState('');

    // const handleOptionChange = (value: string) => {
    //   setSelectedOption(value);
    // };
    
    // const options = [
    //   { value: 'référence', label: 'référence' },
    //   { value: 'Raison sociale', label: 'Raison sociale' },
    //   { value: 'NIF', label: 'NIF' },
    //   { value: 'CIN', label: 'CIN' },
    //   { value: 'Adresse', label: 'Adresse' },
    //   { value: 'Nom commercial', label: 'Nom commercial' },
    // ];
  
    const [DataHistorique,setDataHistorique] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        // Récupérer les données depuis le backend
        axios.get('http://localhost:3500/history/contribuable')
          .then((response) => setDataHistorique(response.data))
          .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
      }, []);
    
    console.log(DataHistorique)
    

  const headers = ["numéro ","référence fiscal","Contribuable", "Motif", "Date de modification"];
 
 //const data = DataHistorique.map((item)=>[item.id_history_contribuable , item.motif , item.date_modification])
 const filteredData = DataHistorique.filter ((item:any)=>
 item.date_modification.toLowerCase().includes(searchTerm.toLowerCase())
 );
 
 const data = filteredData.map((item:any)=>
 [
  item.id_history_contribuable,
  item.id_contribuable      ,
  item.nom_contribuable,
  item.motif,
  <DateFormatConverter isoDate={item.date_modification}></DateFormatConverter>
 ]);

 const handleSearch = (e:any) => {
  setSearchTerm(e.target.value);
};

{/**const handleSearchButtonClick = () => {
  console.log(filteredData);
}; */}
 
 const contentCard = (
      <div className="p-8 flex flex-col">
  <div className=" font-semibold text-[#959824] text-center  text-4xl mt-6 border-b-2 ">
    CONSULTATION DE L'HISTORIQUE DES CONTRIBUABLES
  </div>
  <div className="flex flex-col mt-2">
            {/**card recherche  */} 
                    <div className="mt-6 flex  justify-center ">
                        <Label text="Date de modification" className="mt-4" ></Label>
                        <Input type="date" className="w-96 ml-5 "placeholder="Date EX: 2023-01-01" onChange={handleSearch}></Input>
                        {/**<Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
                    </div>
        </div>
  {/* <div className="mt-4 text-xl font-semibold">
    veuillez remplir vos critères ci-dessous : 
  </div>
  <div className="flex justify-between mt-4">
  <Label text="Domaine de recherche :" className="mt-4"></Label>
  <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 mx-6"/>
  </div>
  <div className="flex justify-between mt-4">
  <Label text="Votre recherche :" className="mt-4"></Label>
  <Input type="text" placeholder="Votre recherche" className="w-96 mx-6"></Input>
  </div>
  
  
  <div className="mt-4">
  <Button text="Rechercher" className="rounded w-40"></Button>
  </div> */}
  <div className="flex justify-center w-[1300px] mt-4" >
  
  <Table className="w-[1200px] border"
  headers={headers}
  data={data}
  ></Table>
  </div>
  <div className="flex justify-start mt-6">
 
  {/* <Link to="/ConsultationHistoriqueRF"  className=" text-[#1956e3] flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link> */}
  </div>
      </div>
    )
    return (
      <MainLayout>
     <div className="overflow-y-auto mt-8  ">
     <Card contentCard={contentCard} className="w-[1400px]  "></Card> 
     </div>
     </MainLayout>
    )
  }
export default HIstoriqueContribuable