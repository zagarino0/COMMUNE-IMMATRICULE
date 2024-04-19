import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Card } from "../../components/card/card";
import { MainLayout } from "../../layouts/main"
import { states } from "../../states/states";
import * as XLSX from 'xlsx';
import axios from "axios";

function ConsultationPage() {
    useEffect(() => {
        states.selectedLink = "consultation";
      }, []);

      const { selectedLink } = useSnapshot(states);

      
      //Links navbar
      const links = [
          { title: "Rechercher les contribuables", link: "/recherchecontribuable" },
          { title: "Consulter les contibuables bloqués", link: "/consultationContribuableBloque" },
          { title: "Consulter les contibuables débloqués", link: "/ConsulationContribuableDebloque" },
          { title: "Consulter l'historique d'un contribuable", link: "/HIstoriqueContribuable" },
          { title: "Consulter la liste des demandes à valider", link: "/ConsulterListeDemandeValide" },
          { title: "Consulter la liste des mises à jour à valider", link: "/ConsulterListeMJRValider" },
         
          
        ];

 const [Data , setData] = useState([])

const HandleDonwloadAllData = () => {
  axios.get('http://localhost:3500/contribuable/download')
  .then((response) => 
  {
    setData(response.data);
    const ws = XLSX.utils.json_to_sheet(Data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'AllData');
    XLSX.writeFile(wb, 'Tout.xlsx');
  }
  )
  .catch((error) => console.error(error));
}







      const contentCard =(
        <div className="flex justify-center item-center ">
    <div className="flex flex-col py-6">
    <div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
            Consultation des Références Fiscaux
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
        <div onClick={HandleDonwloadAllData} className=" cursor-pointer mx-4 font-semibold mt-6 text-gray-500 hover:border-b-2 hover:border-[#959824]">
        Téléchargement de l'annuaire complet des contribuables sur Réfence Fiscal
        </div>
    </div>
        </div>
      )
  return (
    <MainLayout>
        <div className=" mt-14 mb-8">
        <Card  contentCard={contentCard} className='w-[800px] h-[520px] bg-white '></Card>
        </div>
    </MainLayout>
  )
}

export default ConsultationPage