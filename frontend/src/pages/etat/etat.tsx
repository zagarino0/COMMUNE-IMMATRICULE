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
     
      { title: "Liste des RFes délivrés", link: "/ListeNIFDelivre" },
      { title: "Liste des mots de passe délivrés ", link: "/LivreMotPassDelivre" },
     // { title: "Liste des actifs", link: "/ListeActif" },
      { title: "Liste des reprises", link: "/ListeReprise" },
     // { title: "Liste des Contribuables mise en veilleuse", link: "/ListeContribuableVeilleuse" },
      { title: "Liste des Contribuables bloqués", link: "/ListeContribuableSuspendu" },
      { title: "Liste des Contribuables radiés", link: "/ListeContribuableRadie" },
      { title: "Liste des demandes d'immatriculation rejetées", link: "/ListeDemandeImmatriculationRejete" },
      { title: "Liste des demandes de mise à jour rejetées ", link: "/ListeDemandeMJRRejete" },
      { title: "Liste des Contribuables nouvellement immatriculés", link: "/ListeContribuableNouvellementImmatricule" },
      { title: "Liste des Attestations ", link: "/ListeAttestation" },
     // { title: "Liste des Cartes de Régularité", link: "/ListeCarteRegularite" },
     // { title: "Liste Protocolaire", link: "/ListeProtocolaire" },
      { title: "Liste des Utilisateurs", link: "/ListeUtilisateur" },
     // { title: "Etats sur les paiments mobile banking", link: "/EtatpaimentMobile" },
         
    ];
  
      const contentCard =(
        <div className="flex justify-center ">
    <div className="flex flex-col ">
    <div className=" font-semibold text-[#959824]  text-4xl mt-4  border-b-8 border-[#959824]">
           Etat
          </div>
       
    <ul className="flex flex-col  mt-2">
          {links.map((link) => (
            <li
              key={link.title}
              className={`mx-4 font-semibold mt-3 text-gray-500 hover:border-b-4 hover:text-[#2351db] ${
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
      <div className="overflow-y-auto  mt-10">
        <Card contentCard={contentCard} className='w-[600px] h-[500px]   '></Card>
        </div>
    </MainLayout>
  )
}

export default EtatPage