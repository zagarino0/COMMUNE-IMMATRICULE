import { Link } from "react-router-dom";
import { useSnapshot } from "valtio";
import { Button } from "../../components/common";
import { Navbar } from "../../components/navbar/Nabvar"
import { states } from "../../states/states";

function DemandeDeMiseAJourPage() {
    const { selectedLink } = useSnapshot(states);
    //Links navbar
    const links = [
        { title: "Validation", link: "/validation" },
        { title: "Vehicule", link: "/about" },
        { title: "Consultation", link: "/contact" },
        { title: "Autres opérations", link: "/contact" },
        { title: "Etat", link: "/contact" },
        { title: "Espace membre", link: "/contact" },
      ];


    //Navbar content
    const contentNavbar = (
        <nav className="py-2 flex px-4 items-center justify-between">
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
      <Button text="Get Started"></Button>
    </nav>
    )
  return (
    <div className="h-screen w-auto bg-gray-200">
        <Navbar className="w-full h-16" content={contentNavbar}></Navbar>
    </div>
  )
}

export default DemandeDeMiseAJourPage