import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function EspaceMembrePage() {
    useEffect(() => {
        states.selectedLink = "espacemembre";
      }, []);

      const { selectedLink } = useSnapshot(states);

    //Links navbar
    const links = [
      { title: "Ajouter un compte opérateur", link: "/ajoutcompteoperateur" },
      { title: "Gérer les comptes opérateurs de votre centre", link: "/gerercompte" },
      { title: "Débloquer un compte contribuable (Mise à jour de 5 fois dans une journée)", link: "/debloquercompte" },
      { title: "Consulter les actions utilisateur", link: "/ConsulterActionUtilisateur" },
      { title: "Modifier le mot de passe ", link: "/modifierlemotdepasse" },
      { title: "Télécharger le guide utilisateur ", link: "/telechargerleguide" },
    ];
  
    const contentCard =(
      <div className="flex justify-center item-center ">
  <div className="flex flex-col py-6">
  <div className=" font-semibold text-[#959824] mx-4 text-4xl mt-6 border-b-8 border-[#959824]">
          VOTRE PROFIL
        </div>
        <div className="font-semibold mx-4 mt-6 text-sm ">
          cette fonction vous de la possibilité de :  
        </div>
  <ul className="flex flex-col mt-4">
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 font-semibold mt-4 text-gray-500 hover:border-b-4 hover:text-[#2351db] ${
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
       <div className="overflow-y-auto h-[600px]">
       <Card contentCard={contentCard} className='w-[900px] h-[430px] bg-white mt-28'></Card>
       </div>
    </MainLayout>
  )
}

export default EspaceMembrePage