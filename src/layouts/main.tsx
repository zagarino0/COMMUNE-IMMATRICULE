import * as React from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Navbar } from "../components/navbar/Nabvar";
import { states } from "../states/states";

interface mainLayoutProps {
children : React.ReactElement | string | []  ;

}

export const MainLayout : React.FC<mainLayoutProps> = ( props ) => {
    const { selectedLink } = useSnapshot(states);
    //Links navbar
    const links = [
        { title: "Validation", link: "/validation" },
        { title: "Vehicule", link: "/vehicule" },
        { title: "Consultation", link: "/consultation" },
        { title: "Autres opérations", link: "/autresoperations" },
        { title: "Etat", link: "/etat" },
        { title: "Espace membre", link: "/espacemembre" },
      ];


    //Navbar content
    const contentNavbar = (
        <nav className="py-2 flex px-4 items-center h-16 justify-between ">
      <a href="#" className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-mmatriculation</p></a>
      <ul className="flex">
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 font-semibold ${
              selectedLink === link.title.toLowerCase() &&
              "border-b-4 border-[#959824]"
            } `}
          >
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
      
    </nav>
    )
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <Navbar content={contentNavbar} />
      <main className="mt-16">{props.children}</main>
    </div>
  );
};