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

      { title: "Impression duplicata Cessation", link: "/ImpressionDuplicataCessation" },
      { title: "Mise en Contribuable Radié", link: "/RelanceDeffaillant" },
      { title: "Blocage Administratif / Mise en veilleuse d'un contribuable", link: "/BlocageAdministratif" },
      { title: "Déblocage Administratif / réveil d'un contribuable ", link: "/DeblocageAdministratif" },
      { title: "Cessation d'activité", link: "/CessationActivite" },
      { title: "Reprise d'activité", link: "/RepriseActivite" },
      { title: "Mise en Contribuable Décés", link: "/ContribuableDece" },
     
    ];
  
      const contentCard =(
        <div className="flex justify-center ">
    <div className="flex flex-col py-6">
    <div className=" font-semibold text-[#959824] text-center text-4xl mt-6 border-b-8  border-[#959824] justify-center">
           AUTRES OPERATIONS
          </div>
       
    <ul className="flex flex-col mt-8">
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
        <div className="overflow-y-auto h-[600px]">
        <Card contentCard={contentCard} className="w-[900px] h-[430px] mt-28"></Card>
        </div>
    </MainLayout>
  )
}

export default AutresOperationsPage