import { MainLayout } from "../../../layouts/main";
import { Card } from "../../../components/card/card";
import Input from "../../../components/inputs";
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
  useEffect(() => {
    // Fetch data from the backend on component mount
    axios.post<User[]>('http://localhost:3500/all')
      .then((response) => setDataUser(response.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(DataUser);

  const handleDesactivate = async (code: string) => {
    const UserCode = {
      "code" : code,
    };
    try {
      // Make a POST request to deactivate the user
      await axios.post(`http://localhost:3500/desactivation`, UserCode);

      // Update the list of data after successful deactivation
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
      // Make a POST request to deactivate the user
      await axios.post(`http://localhost:3500/user/delete`, UserCode);

      // Update the list of data after successful deactivation
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
      // Make a POST request to deactivate the user
      await axios.post(`http://localhost:3500/actif/code`, UserCode);

      // Update the list of data after successful deactivation
      setDataUser((prevData) => prevData.filter((data) => data.code !== code));

      alert(`L'utilisateur avec le code : ${code} est activé.`);
    } catch (error) {
      console.error('Error deactivating user:', error);
    }
  };
  const headers = ["Nom", "Prenom", "Code", "Type opérateur", "Actif", "Numéro matriculé", "Désactiver", "Activer", "Supprimer"];
  const data = DataUser.map((item) => [
    item.nom,
    item.prenom,
    item.code,
    item.type_operateur,
    <Checkbox checked={item.actif} />,
    item.numero_matricule,
    <Button text="Désactiver" key={item.code} className='cursor-pointer' onClick={() => handleDesactivate(item.code)} />,
    <Button text="Activer" className='cursor-pointer' onClick={() => handleReactivation(item.code)}/>,
    <Button text="Supprimer" className='cursor-pointer' onClick={() => handleDelete(item.code)} />,
  ]);

  const handleSearch = async () => {
    try {
      // Make a GET request to search for users based on the provided parameters
      const response = await axios.post<User[]>(`http://localhost:3500/user`, { params: Compte });

      // Handle the response from the server as needed
      console.log("Search results:", response.data);

      // Set the search results to state
      setDataUser(response.data);
    } catch (error) {
      // Handle errors from the server
      console.error("Search failed:", error.message);
      alert("Search failed. Please try again.");
    }
  };

  const contentCard = (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <div className="text-[#959824] text-3xl text-center font-semibold border-b-2 border-[#959824] mt-8">Gestion compte opérateur</div>

        <div className="flex flex-col mt-6 p-12">
          <Input type="text" value={Compte.login_operatreur} onChange={(e) => setCompte({ ...Compte, login_operatreur: e.target.value })} placeholder="Login opérateur" className="mt-6 w-full" />
          <Input type="text" value={Compte.nom} onChange={(e) => setCompte({ ...Compte, nom: e.target.value })} placeholder="Nom" className="mt-6 w-full" />
          <Input type="text" value={Compte.prenom} onChange={(e) => setCompte({ ...Compte, prenom: e.target.value })} placeholder="Prénom" className="mt-6 w-full" />
          <Input type="text" value={Compte.numero_matricule} onChange={(e) => setCompte({ ...Compte, numero_matricule: e.target.value })} placeholder="Numéro matricule" className="mt-6 w-full" />
          <Input type="text" value={Compte.corps} onChange={(e) => setCompte({ ...Compte, corps: e.target.value })} placeholder="Corps" className="mt-6 w-full" />

         
              <Button text="Rechercher" className="mt-6" onClick={handleSearch}></Button>
          
        
          <div className="overflow-y-auto w-[700px] mt-6">
            <Table headers={headers} data={data} />
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

