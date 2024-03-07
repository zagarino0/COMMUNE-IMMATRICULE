import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card"
import { MainLayout } from "../../../layouts/main"
import { TiDocumentText } from "react-icons/ti";
import Table from "../../../components/table/table";
// import { Button } from "../../../components/common";
// import Select from "../../../components/inputs/selectInput";
// import { Label } from "../../../components/label/label";
// import Input from "../../../components/inputs";
import { TitleH3 } from "../../../components/title";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useState } from "react";

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
    useEffect(() => {
        // Récupérer les données depuis le backend
        axios.get('http://localhost:3500/consultation/contribuable/bloque')
          .then((response) => setDataHistorique(response.data))
          .catch((error) => console.error(error));
      }, []);
    
    console.log(DataHistorique)
    

  const headers = ["Ref démandé", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
  ["none", "none", "none", "none"],
  
  ];
    const contentCard = (
      <div className="p-8 flex flex-col">
  <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
    Consultation de l'historique des contribuables
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
  <div className="flex justify-center items-center mt-12" >
  
  <Table
  headers={headers}
  data={data}
  ></Table>
  </div>
  <div className="flex justify-start mt-6">
 
  <Link to="/ConsultationHistoriqueRF"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>
  </div>
      </div>
    )
    return (
      <MainLayout>
     <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
     <Card contentCard={contentCard} className="w-[1000px] h-[700px] "></Card> 
     </div>
     </MainLayout>
    )
  }
export default HIstoriqueContribuable