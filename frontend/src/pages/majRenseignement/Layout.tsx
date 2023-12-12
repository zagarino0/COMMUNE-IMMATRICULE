import { Link } from "react-router-dom";
import { Card } from "../../components/card/card";
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { RiNewspaperFill } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

import {  TitleH2 } from "../../components/title";
import Button from "../../components/common/Button";
interface LayoutProps {
  children: React.ReactElement;
  currentPath: string;
}
const Layout : React.FC<LayoutProps>  = ({currentPath , children})=> {
    // Links Layout
const links = [
  { title: "Immatricultation", link: "/majRenseignement" },
  { title: "Declaration", link: "/Activite"  },
  { title: "Paiment", link: "/Siege" },
  { title: "Annexe TVA", link: "/Associe" },
  
];

  // Navbar content
  const content = (
    <nav className="flex items-center justify-center ">
      <ul className="flex flex-col">
        <div>
         <TitleH2 text="Liste des fonctionnalités" className="text-lg m-1"></TitleH2> 
        </div>
        {links.map((link) => (
          <li
            key={link.title}
            className={`mx-4 
            text-center
            py-3
            px-6 
            
            font-semibold
            ${currentPath === link.link ? 'bg-[#959824] text-white rounded-md font-bold hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out ' : ''}
          `}
          >
            <Link to={link.link} > {link.title}</Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );

  const ContentCardProfil = (
    <div
    className="
    p-2
    "
    >
    <div
    className="
    flex
    flex-row
    font-semibold
    "
    >
    <BsCalendarDate
    className="
    mx-1
    text-xl
    font-semibold
    "
    ></BsCalendarDate>
    Date
    </div>
    <div
    className="
    flex
    flex-row
    py-2
    font-semibold
    "
    >
    <AiOutlineStar
    className="
    mx-1
    text-xl
    font-semibold
    "
    >
    </AiOutlineStar>
    NIF: number
    </div>
    
    <div
    className="
    flex
    flex-row
    py-2
    font-semibold
    "
    >
    <RxAvatar
    className="
    mx-1
    text-xl
    font-semibold
    "
    >
    </RxAvatar>
    Raison social: name
    </div>
    <div
    className="
    flex
    flex-row
    py-2
    font-semibold
    "
    >
    <AiOutlineHome
    className="
    mx-1
    text-xl
    font-semibold
    "
    >
    </AiOutlineHome>
    Centre fiscal: name
    </div>
    <div
    className="
    py-2
    "
    >
    <Button
    onClick={()=> window}
    label="Deconnexion"
    ></Button>
    
    </div>
    </div>
    )
    
    
    const ContentCardDownload = (
      <div className="p-2">
        <h1 className="text-sm font-semibold">Téléchargement fichier et Manuel d'utilisation</h1>
        <div className="flex flex-col">
          <div className="flex flex-row border-[2px] shadow-xl border-[1px] font-semibold cursor-pointer  mt-1 py-2">
          <TbSquareRoundedNumber1Filled className="text-xl mx-2"></TbSquareRoundedNumber1Filled>
          LFi 2018
          </div>
          <div className="flex flex-row border-[2px] shadow-xl border-[1px] font-semibold cursor-pointer  mt-1 py-2">
          <TbSquareRoundedNumber2Filled className="text-xl mx-2"></TbSquareRoundedNumber2Filled>
          Tutoriel vidéo
          </div>
          <div className="flex flex-row border-[2px] shadow-xl border-[1px] font-semibold cursor-pointer  mt-1 py-2">
          <TbSquareRoundedNumber3Filled className="text-xl mx-2"></TbSquareRoundedNumber3Filled>
          Brochure
          </div>
          <div className="flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer   py-2">
          <RiNewspaperFill className="text-xl mx-2"></RiNewspaperFill>
          Manuel d'utilisation
          </div>
          <div className="py-2 mx-2 px-4  shadow-xl border-[1px] font-semibold cursor-pointer ">
      Manuel complémentaire (Mlg)
      </div>
      <div className="py-2 mx-2 px-4  shadow-xl border-[1px] font-semibold cursor-pointer ">
      Manuel complémentaire (Fr)
      </div>
        </div>
      </div>
    )
    
     return (
    <div
    className="
    bg-neutral-800/70
    w-screen 
    h-screen
    flex
    items-center
    justify-center
    "
    >
<div 
className="
p-1
flex
flex-col
"
>
<Card
className="
w-60
h-60
my-1
mx-1
"
contentCard={ContentCardProfil}
></Card>
<Card
className="
w-60
h-60
my-1
mx-1
"
contentCard={content}
></Card>
<Card
className="
w-60
h-96
my-1
mx-1
"
contentCard={ContentCardDownload}
></Card>
</div>
<div 
className="
flex
p-2
"
>
<Card
className="
h-[880px]
w-[1000px]
bg-[#f1f5f9]
flex items-center justify-center
"
contentCard={children}
></Card>
</div>
</div>

  )
}

export default Layout