
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
"
>
<BsCalendarDate
className="
mx-1
text-xl
"
></BsCalendarDate>
Date
</div>
<div
className="
flex
flex-row
py-2
"
>
<AiOutlineStar
className="
mx-1
text-xl
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
"
>
<RxAvatar
className="
mx-1
text-xl
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
"
>
<AiOutlineHome
className="
mx-1
text-xl
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
   <div className="py-2 px-3 hover:cursor-pointer border-[1px] shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out ">Immatricultation</div>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px] shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out">Declaration</div>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px] shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out">Paiment</div>
   <div className="py-2 px-3 hover:cursor-pointer border-[1px] shadow-xl hover:bg-[#959824] hover:text-white hover:scale-110 max-w-xs transition duration-300  ease-in-out" >Annexe TVA</div>
  </div>
)
const ContentCardDownload = (
  <div className="p-2">
    <h1 className="text-sm font-semibold">Téléchargement fichier et Manuel d'utilisation</h1>

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
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <HiOutlineInformationCircle className="text-xl mx-2 font-semibold"></HiOutlineInformationCircle>
  Principaux renseignements
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <ImStatsDots className="text-xl mx-2"></ImStatsDots>
  Activités
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Siège
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <BiBody className="text-xl mx-2"></BiBody>
  Associé
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Etablissement
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <MdPermIdentity className="text-xl mx-2"></MdPermIdentity>
  Dirigant
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <AiFillCar className="text-xl mx-2"></AiFillCar>
  Vehicule
  </div>
  <div className="py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer hover:scale-110 max-w-xs transition duration-300  ease-in-out">
  <IoIosPerson className="text-xl mx-2"></IoIosPerson>
  Interlocuteur
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
h-60
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
h-[620px]
w-[1020px]
"
contentCard={ContentCardInformation}
></Card>
</div>
</div>
   
  )
}

export default MAJRenseignementPage