import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { useSnapshot } from "valtio";
import { states } from "../../../states/states";

function EtatpaimentMobile() {
  
  const { selectedLink } = useSnapshot(states);


  //Links navbar
const links = [
  { title: "Liste des paiements sur mobile", link: "/ListePaimentMobileBanking" },
  { title: "Liste des déclarations sur mobiles ( venant de TELMA)", link: "/RecuperationDeclarationMobileBaking" },
  
];

  const contentCard =(
    <div className="flex justify-center item-center ">
<div className="flex flex-col ">
<div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
       Etat sur les Mobiles Banking
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
  <div className="overflow-y-auto mt-14 mb-8 ">
    <Card contentCard={contentCard} className='w-[600px] h-[250px]  '></Card>
    </div>
</MainLayout>
)
}

export default EtatpaimentMobile