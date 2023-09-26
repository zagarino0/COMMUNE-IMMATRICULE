import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";

function AutresOperationsPage() {
    useEffect(() => {
        states.selectedLink = "autresoperations";
      }, []);

      const { selectedLink } = useSnapshot(states);


      //Links navbar
    const links = [
      { title: "Relance des défaillants(IR , IS)", link: "/ajoutcompteoperateur" },
      { title: "Blocage Administratif / Mise en veilleuse d'un contribuable", link: "/gerercompte" },
      { title: "Déblocage Administratif / réveil d'un contribuable ", link: "/debloquercompte" },
      { title: "Cessation d'activité", link: "/consulteraction" },
      { title: "Reprise d'activité", link: "/modifierlemotdepasse" },
      { title: "Gestion des annexes TVA", link: "/telechargerleguide" },
     
    ];
  
      const contentCard =(
        <div className="flex justify-center item-center ">
    <div className="flex flex-col py-6">
    <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
           Autres opérations
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
        <div className="h-screen">
        <Card contentCard={contentCard} className='w-[600px] h-[480px] bg-white mt-24'></Card>
        </div>
    </MainLayout>
  )
}

export default AutresOperationsPage