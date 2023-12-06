import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function EtatPage() {
    useEffect(() => {
        states.selectedLink = "etat";
      }, []);

      const { selectedLink } = useSnapshot(states);


      //Links navbar
    const links = [
      { title: "Impression duplicata Cessation", link: "/ajoutcompteoperateur" },
      { title: "Liste des NIFs délivrés", link: "/gerercompte" },
      { title: "Liste des mots de passe délivrés ", link: "/debloquercompte" },
      { title: "Statistique des demandes ", link: "/consulteraction" },
      { title: "Récapitulation sur les demandes validées", link: "/modifierlemotdepasse" },
      { title: "Liste des actifs", link: "/telechargerleguide" },
      { title: "Récaputilation sur les Contribuables actifs", link: "/telechargerleguide" },
      { title: "Liste des preNIFs", link: "/telechargerleguide" },
      { title: "Liste des Contribuables en Cessation", link: "/telechargerleguide" },
      { title: "Récapitulation sur les Contribuables en cessation", link: "/telechargerleguide" },
      { title: "Liste des reprises", link: "/telechargerleguide" },
      { title: "Liste des Contribuables mise en veilleuse", link: "/telechargerleguide" },
      { title: "Liste des Contribuables suspendus", link: "/telechargerleguide" },
      { title: "Liste des Contribuables radiés", link: "/telechargerleguide" },
      { title: "Récapitulation sur les Contribuables ayant repris leur activité", link: "/telechargerleguide" },
      { title: "Liste des demandes d'immatriculation rejetées", link: "/telechargerleguide" },
      { title: "Liste des demandes de mise à jour rejetées ", link: "/telechargerleguide" },
      { title: "Liste des Contribuables réimmatriculés", link: "/telechargerleguide" },
      { title: "Statistique des Contribuables réimmatriculés", link: "/telechargerleguide" },
      { title: "Liste des Contribuables nouvellement immatriculés", link: "/telechargerleguide" },
      { title: "Statistique des Contribuables nouvellement immatriculés", link: "/telechargerleguide" },
      { title: "Statistique sur les mises à jour validées", link: "/telechargerleguide" },
      { title: "Liste des transfert", link: "/telechargerleguide" },
      { title: "Liste de vos transferts en attente de deuxième validation", link: "/telechargerleguide" },
      { title: "Liste des Attestations CNAVTTO délivrées", link: "/telechargerleguide" },
      { title: "Liste des Cartes Fiscales délivrées", link: "/telechargerleguide" },
      { title: "Liste Protocolaire", link: "/telechargerleguide" },
      { title: "Compte bancaire des centre fiscaux ", link: "/telechargerleguide" },
      { title: "Statistique sur les IRI et DAT pour les recettes douanières", link: "/telechargerleguide" },
      { title: "Liste des paiments du Droit d'accises ", link: "/telechargerleguide" },
      { title: "Etats sur les recettes fiscales ", link: "/telechargerleguide" },
      { title: "Statistique sur les performances des centres fiscaux", link: "/telechargerleguide" },
      { title: "Etats sur toutes les réalisations confondus ", link: "/telechargerleguide" },
      { title: "Etats sur les recettes centralisées (fichier brut )", link: "/telechargerleguide" },
      { title: "Liste des Utilisateurs", link: "/telechargerleguide" },
      { title: "Etats sur les paiments mobile banking", link: "/telechargerleguide" },
      { title: "Répartition des Contribuables", link: "/telechargerleguide" },     
    ];
  
      const contentCard =(
        <div className="flex justify-center item-center ">
    <div className="flex flex-col ">
    <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
           Etat
          </div>
       
    <ul className="flex flex-col mt-4">
          {links.map((link) => (
            <li
              key={link.title}
              className={`mx-4 font-semibold mt-6 text-gray-500 hover:border-b-2 hover:border-[#959824] ${
                selectedLink === link.title.toLowerCase() 
                
              } `}
            >
              <Link  to={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
    </div>
        </div>
      )
  return (
    <MainLayout>
      <div className=" overflow-y-auto h-[700px] mt-14  ">
        <Card contentCard={contentCard} className='w-[800px] h-[1900px]  '></Card>
        </div>
    </MainLayout>
  )
}

export default EtatPage