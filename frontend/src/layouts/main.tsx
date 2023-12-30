import * as React from "react";
import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Button } from "../components/common";
import { Navbar } from "../components/navbar/Nabvar";
import { states } from "../states/states";

interface mainLayoutProps {
children : React.ReactElement | string |React.ReactNode| []  ;

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
        <nav className=" flex items-center justify-between  ">
      <a href="#" className="font-semibold flex flex-row "><p className="text-3xl text-[#959824]  ">E</p><p className="text-3xl">-immatriculation</p></a>
      <ul className="flex">
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 font-semibold hover:border-b-2 hover:border-[#959824] ${
              selectedLink === link.title.toLowerCase() 
              
            } `}
          >
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <Button text="Deconnexion" className="mr-4"></Button>
    </nav>
    )
  return (
    <div className="bg-gray-200 h-screen  w-screen">
      <Navbar content={contentNavbar} />
      <main className=" flex justify-center h-screen p-8 items-center bg-neutral-800/70 ">{props.children}</main>
    </div>
  );
};