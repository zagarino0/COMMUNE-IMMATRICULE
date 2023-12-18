import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function ConsultationPage() {
    useEffect(() => {
        states.selectedLink = "consultation";
      }, []);

      const { selectedLink } = useSnapshot(states);

      //Links navbar
      const links = [
          { title: "Rechercher les contribuables", link: "/recherchecontribuable" },
          { title: "Consulter les contibuables bloqués", link: "/consultationContribuableBloque" },
          { title: "Consulter les contibuables débloqués", link: "/debloquercompte" },
          { title: "Consulter l'historique d'un contribuable", link: "/consultationhistorique" },
          { title: "Consulter la liste des demandes à valider", link: "/modifierlemotdepasse" },
          { title: "Consulter la liste des mises à jour à valider", link: "/telechargerleguide" },
          { title: "Consulter la liste des transferts en attente de votre première validation", link: "/telechargerleguide" },
          { title: "Consulter la liste des transferts en attente de votre deuxième validation", link: "/telechargerleguide" },
          { title: "Consulter les paiments (paierie général)", link: "/telechargerleguide" },
          { title: "Téléchargement de l'annuaire complet des contribuables sur Nifonline", link: "/telechargerleguide" },
                
        ];

      const contentCard =(
        <div className="flex justify-center item-center ">
    <div className="flex flex-col py-6">
    <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
            Consultation des NIF
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
        <div className="overflow-y-auto h-[500px] mt-14 mb-8">
        <Card  contentCard={contentCard} className='w-[800px] h-[700px] bg-white '></Card>
        </div>
    </MainLayout>
  )
}

export default ConsultationPage