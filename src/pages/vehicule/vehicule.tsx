import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function VehiculePage() {
    useEffect(() => {
        states.selectedLink = "vehicule";
      }, []);

      const { selectedLink } = useSnapshot(states);


      //Links navbar
    const links = [
      { title: "Ajouter de véhicule sur Nifonline", link: "/ajoutvehicule" },
      { title: "Rectification des véhicules des contribuables sur Nifonline", link: "/rectificationvehicule" },
      { title: "Téléchargement des véhicules sur Nifonline", link: "/debloquercompte" },
      { title: "Téléchargement des vehicules vers SAFIRA", link: "/consulteraction" },
      { title: "Mise à jour des caractéristiques des vehicules sur Nifonline", link: "/modifierlemotdepasse" },
      { title: "Consultation des vehicules sur Nifonline", link: "/telechargerleguide" },
      { title: "Attestation de non affectation", link: "/telechargerleguide" },
    ];
  
    const contentCard =(
      <div className="flex justify-center item-center ">
  <div className="flex flex-col py-6">
  <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
          Véhicules des contribuables
        </div>
        <div className="font-semibold mt-6 text-sm ">
          Quelle tâche voulez-vous réaliser ?  
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
        <div className="">
        <Card contentCard={contentCard} className='w-[800px] h-[580px] bg-white mt-24'></Card>
        </div>
    </MainLayout>
  )
}

export default VehiculePage