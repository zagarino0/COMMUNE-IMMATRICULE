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
        
        { title: "Valider des démandes d'immatriculation ", link: "/ValidationDemandeImmatriculation" },
        { title: "Valider des mise à jour sur les renseignements des contribuables", link: "/demandeDeNIFValider" },        
       // { title: "Rectification des principaux renseignements des contribuables", link: "/rectificationprincipauxrenseignementcontribuable" },
       
        
       
      
      ];

  
    const contentCard =(
      <div className="flex justify-center item-center ">
  <div className="flex flex-col py-6">
  <div className=" font-semibold text-[#959824]  text-4xl mt-6 border-b-8  border-[#959824] ">
          ZONE POUR LA VALIDATION DES DEMANDES DES CONTRIBUABLES 
        </div>
        <div className="font-semibold mt-6 text-sm ">
          cette fonction vous donne la possibilité de :  
        </div>
  <ul className="flex flex-col mt-4">
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 font-semibold mt-6 text-gray-500 hover:border-b-2  hover:text-[#1956e3] ${
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
<div className=" overflow-y-auto h-[500px] mt-28 mb-8  ">
<Card contentCard={contentCard} className="w-[1300px] h-[400px] "></Card>
</div>
    </MainLayout>
  )
}

export default ValidationPage