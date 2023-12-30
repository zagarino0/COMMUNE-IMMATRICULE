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
      { title: "Impression duplicata Cessation", link: "/ImpressionDuplicataCessation" },
      { title: "Liste des RFes délivrés", link: "/ListeNIFDelivre" },
      { title: "Liste des mots de passe délivrés ", link: "/LivreMotPassDelivre" },
      { title: "Liste des actifs", link: "/ListeActif" },
      { title: "Liste des reprises", link: "/ListeReprise" },
      { title: "Liste des Contribuables mise en veilleuse", link: "/ListeContribuableVeilleuse" },
      { title: "Liste des Contribuables suspendus", link: "#" },
      { title: "Liste des Contribuables radiés", link: "#" },
      { title: "Liste des demandes d'immatriculation rejetées", link: "#" },
      { title: "Liste des demandes de mise à jour rejetées ", link: "#" },
      { title: "Liste des Contribuables nouvellement immatriculés", link: "#" },
      { title: "Liste des Attestations ", link: "#" },
      { title: "Liste des Cartes de Régularité", link: "#" },
      { title: "Liste Protocolaire", link: "/ListeProtocolaire" },
      { title: "Etats sur toutes les réalisations confondus ", link: "#" },
      { title: "Liste des Utilisateurs", link: "#" },
      { title: "Etats sur les paiments mobile banking", link: "/EtatpaimentMobile" },
         
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
      <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
        <Card contentCard={contentCard} className='w-[800px] h-[1000px]  '></Card>
        </div>
    </MainLayout>
  )
}

export default EtatPage