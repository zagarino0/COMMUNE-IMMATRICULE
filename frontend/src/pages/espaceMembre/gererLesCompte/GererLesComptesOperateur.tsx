import { MainLayout } from "../../../layouts/main";
import { Card } from "../../../components/card/card";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { Button } from "../../../components/common";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/table/table";
import Checkbox from "../../../components/common/checkbox";

interface User {
  login_operatreur: string;
  nom: string;
  prenom: string;
  numero_matricule: string;
  code: string;
  type_operateur : string,
  actif : string
}

function GererLesComptesOperateurDeVotreCentrePage() {

  const [Compte, setCompte] = useState<User>({
    login_operatreur: "",
    nom: "",
    prenom: "",
    numero_matricule: "",
    code: "",
    type_operateur:"", 
    actif : ""
  });

  const [DataUser, setDataUser] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState ("")


  useEffect(() => {

    axios.get('http://localhost:3500/user/actif')
      .then((response) => setDataUser(response.data))
      .catch((error) => console.error(error));
  }, [setCompte]);

  const handleDesactivate = async (code: string) => {
    const UserCode = {
      "code" : code,
    };
    try {
      await axios.post(`http://localhost:3500/user/desactivation`, UserCode);
      setDataUser((prevData) => prevData.filter((data) => data.code !== code));

      alert(`L'utilisateur avec le code : ${code} est désactivé.`);
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
      setDataUser((prevData) => prevData.filter((data) => data.code !== code));

      alert(`L'utilisateur avec le code : ${code} est suprimmé.`);
    } catch (error) {
      console.error('Error deactivating user:', error);
    }
  };

  const handleReactivation = async (code: string) => {
    const UserCode = {
      "code" : code,
    };
    try {
      await axios.post(`http://localhost:3500/actif/code`, UserCode);
      setDataUser((prevData) => prevData.filter((data) => data.code !== code));

      alert(`L'utilisateur avec le code : ${code} est activé.`);
    } catch (error) {
      console.error('Error deactivating user:', error);
    }
  };
  const headers = ["Nom", "Prenom", "Code", "Type opérateur", "Actif", "Numéro matriculé", "Désactiver", "Activer", "Supprimer"];
  
  const filteredData = DataUser.filter((item:any) =>
     item.numero_matricule.toLowerCase().includes(searchTerm.toLowerCase())
   );

  const data = filteredData.map((item : any) => [
    item.nom,
    item.prenom,
    item.code,
    item.type_operateur,
    <Checkbox checked = {item.actif} />,
    item.numero_matricule,
    <Button text="Désactiver" key={item.code} className='cursor-pointer' onClick={() => handleDesactivate(item.code)} />,
    <Button text="Activer" className='cursor-pointer' onClick={() => handleReactivation(item.code)}/>,
    <Button text="Supprimer" className='cursor-pointer' onClick={() => handleDelete(item.code)} />,
  ]);

  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    console.log(filteredData);
  };
 
  const handleGetUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/user/`, { params: Compte });
      console.log("Search results:", response.data);
      setDataUser(response.data);
    
    } catch (error) {
      console.error("Search failed:", error.message);
      alert("Search failed. Please try again.");
    }
  };

  const contentCard = (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="text-[#959824] text-3xl text-center font-semibold border-b-2 border-[#959824] mt-8">Gestion compte opérateur</div>
        
        <div className="flex flex-col ">
          {/**card recherche  */} 
            <div className="mt-6 flex  justify-between ">
                <Label text="numéro matricule" className="mt-4" ></Label>
                <Input type="text" className="w-96 ml-5 "placeholder="numéro immatricule EX:1234556" onChange={handleSearch}></Input>
                <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button>
            </div>
          {/**
           * 
              <Input type="text" value={Compte.login_operatreur} onChange={(e) => setCompte({ ...Compte, login_operatreur: e.target.value })} placeholder="Login opérateur" className="mt-6 w-full" />
              <Input type="text" value={Compte.nom} onChange={(e) => setCompte({ ...Compte, nom: e.target.value })} placeholder="Nom" className="mt-6 w-full" />
              <Input type="text" value={Compte.prenom} onChange={(e) => setCompte({ ...Compte, prenom: e.target.value })} placeholder="Prénom" className="mt-6 w-full" />
              <Input type="text" value={Compte.numero_matricule} onChange={(e) => setCompte({ ...Compte, numero_matricule: e.target.value })} placeholder="Numéro matricule" className="mt-6 w-full" />
              <Input type="text" value={Compte.corps} onChange={(e) => setCompte({ ...Compte, corps: e.target.value })} placeholder="Corps" className="mt-6 w-full" />

          <Button text="Rechercher" className="mt-6" onClick={handleSearch}></Button>
           * 
           */}

             
          
        
          <div className="overflow-y-auto w-[700px] mt-6">
            <Table headers={headers} data = {data} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <div className="overflow-y-auto h-[500px] mt-14 mb-8">
        <Card className="w-[900px] h-[1000px]" contentCard={contentCard} />
      </div>
    </MainLayout>
  );
}

export default GererLesComptesOperateurDeVotreCentrePage;

//efa vita 

