
import { Card } from "../../components/card/card"
import {BsCalendarDate} from "react-icons/bs"
import {AiOutlineStar , AiOutlineHome , AiFillCar} from "react-icons/ai"
import {RxAvatar} from "react-icons/rx"
import { ButtonSecondary } from "../../components/common"
import {HiOutlineInformationCircle} from "react-icons/hi"
import {ImStatsDots} from "react-icons/im"
import {FaUniversity} from "react-icons/fa"
import {BiBody} from "react-icons/bi"
import {MdPermIdentity} from "react-icons/md"
import {IoIosPerson} from "react-icons/io"
import{TbSquareRoundedNumber1Filled ,  TbSquareRoundedNumber2Filled , TbSquareRoundedNumber3Filled} from "react-icons/tb"
import {RiNewspaperFill } from "react-icons/ri"

function MAJRenseignementPage() {
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
<ButtonSecondary
className="

"
text="Deconnexion"
></ButtonSecondary>

</div>
</div>
)

const ContentCardFonction = (
  <div
  className="
  p-2
  "
  >
    <h1 className="text-sm font-semibold">Liste des fonctionnalités</h1>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px]  font-semibold font-semibold shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out ">Immatricultation</div>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px]  font-semibold shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out">Declaration</div>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px]  font-semibold shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out">Paiment</div>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px]  font-semibold shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out" >Annexe TVA</div>
  </div>
)
const ContentCardDownload = (
  <div className="p-2">
    <h1 className="text-sm font-semibold">Téléchargement fichier et Manuel d'utilisation</h1>
    <div className="flex flex-col">
      <div className="flex flex-row border-[2px] shadow-xl border-[1px] font-semibold cursor-pointer hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs hover:scale-110 max-w-xs transition duration-300  ease-in-out mt-1 py-2">
      <TbSquareRoundedNumber1Filled className="text-xl mx-2"></TbSquareRoundedNumber1Filled>
      LFi 2018
      </div>
      <div className="flex flex-row border-[2px] shadow-xl border-[1px] font-semibold cursor-pointer hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs hover:scale-110 max-w-xs transition duration-300  ease-in-out mt-1 py-2">
      <TbSquareRoundedNumber2Filled className="text-xl mx-2"></TbSquareRoundedNumber2Filled>
      Tutoriel vidéo
      </div>
      <div className="flex flex-row border-[2px] shadow-xl border-[1px] font-semibold cursor-pointer hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs hover:scale-110 max-w-xs transition duration-300  ease-in-out mt-1 py-2">
      <TbSquareRoundedNumber3Filled className="text-xl mx-2"></TbSquareRoundedNumber3Filled>
      Brochure
      </div>
      <div className="flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs hover:scale-110 max-w-xs transition duration-300  ease-in-out  py-2">
      <RiNewspaperFill className="text-xl mx-2"></RiNewspaperFill>
      Manuel d'utilisation
      </div>
      <div className="py-2 mx-2 px-4  shadow-xl border-[1px] font-semibold cursor-pointer hover:bg-[#959824] hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs hover:text-white hover:scale-110 max-w-xs hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  Manuel complémentaire (Mlg)
  </div>
  <div className="py-2 mx-2 px-4  shadow-xl border-[1px] font-semibold cursor-pointer hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  Manuel complémentaire (Fr)
  </div>
    </div>
  </div>
)

const ContentCardInformation =(
<div>
<div className="p-2 mx-4">
<h1 className=" text-2xl font-semibold">Modifications des renseignements permanents</h1>
<div className="py-1">1. CLiquer sur l'entête de chaque groupe</div>
<div className="py-1">2. Effectuer les modifications possibles</div>
<div className="py-1">3. CLiquer sur "Obtenier le code de validation"</div>
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <HiOutlineInformationCircle className="text-xl mx-2 font-semibold"></HiOutlineInformationCircle>
  Principaux renseignements
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <ImStatsDots className="text-xl mx-2"></ImStatsDots>
  Activités
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Siège
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <BiBody className="text-xl mx-2"></BiBody>
  Associé
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Etablissement
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <MdPermIdentity className="text-xl mx-2"></MdPermIdentity>
  Dirigant
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <AiFillCar className="text-xl mx-2"></AiFillCar>
  Vehicule
  </div>
  <div className="hover:bg-[#959824] bg-white hover:text-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <IoIosPerson className="text-xl mx-2"></IoIosPerson>
  Interlocuteur
  </div>
  
</div>
)
  return (
    <div
    className="
    bg-neutral-800/70
    w-auto 
    h-[900px]
    flex
    flex-row
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
contentCard={ContentCardFonction}
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
"
contentCard={ContentCardInformation}
></Card>
</div>
</div>
   
  )
}

export default MAJRenseignementPage