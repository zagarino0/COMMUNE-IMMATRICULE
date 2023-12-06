import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function ValidationPage() {
    useEffect(() => {
        states.selectedLink = "validation";
      }, []);
      const { selectedLink } = useSnapshot(states);

    
      //Links navbar
      const links = [
        {title:"Ajout Référence fiscal" , link:"/AjoutReferenceFiscal"},
        { title: "Validation des démandes d'immatriculation ", link: "/demandeDeNIFValider" },
        { title: "Validation des mise à jour sur les renseignements des contribuables", link: "/demandeDeNIFValider" },
        { title: "Transfert sans changement d'adresse des contribuables ", link: "/debloquercompte" },
        { title: "Saisi du droit d'accises sur Nifonline", link: "/consulteraction" },
        { title: "Attribution preNIF ", link: "/" },
        { title: "Rectification des principaux renseignements des contribuables", link: "/rectificationprincipauxrenseignementcontribuable" },
        { title: "Mise à jour des codes activités", link: "/telechargerleguide" },
        { title: "Ajout de société étrangère", link: "/telechargerleguide" },
        { title: "Annulation de transfert", link: "/telechargerleguide" },
        { title: "Téléchargement du fichier export Nifonline", link: "/TelechargementFichierExport" },
        { title: "Téléchargement du fichier export Nifonline (Nouvelle version)", link: "/telechargerleguide" },
        { title: "Envoi d'état des cartes fiscales", link: "/telechargerleguide" },
        { title: "Envoi de fichier pour mise à jour des NIF spéciaux", link: "/telechargerleguide" },
        { title: "Consultation des IR intermittents pour les recettes courrières", link: "/telechargerleguide" },
        { title: "Consultation des ordres de virment", link: "/telechargerleguide" },
      ];

  
    const contentCard =(
      <div className="flex justify-center item-center ">
  <div className="flex flex-col py-6">
  <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
          Zone pour la validation des demandes des contribuables 
        </div>
        <div className="font-semibold mt-6 text-sm ">
          cette fonction vous de la possibilité de :  
        </div>
  <ul className="flex flex-col mt-4">
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 font-semibold mt-6 text-gray-500 hover:border-b-2 hover:border-[#959824] ${
              selectedLink === link.title.toLowerCase() 
              
            } `}
          >
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
  </div>
      </div>
    )
  return (
    <MainLayout>
<div className=" overflow-y-auto h-[700px] mt-14 mb-8  ">
<Card contentCard={contentCard} className="w-[1000px] h-[1000px] "></Card>
</div>
    </MainLayout>
  )
}

export default ValidationPage