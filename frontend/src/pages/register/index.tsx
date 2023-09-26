import { Link } from "react-router-dom"
import AuthCard from "../../components/card/authCard"
import {IoIosArrowBack} from "react-icons/io"
import { Button } from "../../components/common"
import Input from "../../components/inputs"

function ResgisterPage() {
  
  const HearderContent =(
    <Link
    to='/'
    >
    <div className="
    px-4
    py-3
    mx-12
    max-w-[400px]
    rounded-md
    shadow-xl
    cursor-pointer
    hover:scale-110 
    transition 
    duration-300 
    ease-in-out
    ">
    <IoIosArrowBack
    className="
    text-2xl
    "
    ></IoIosArrowBack>
    </div>
    </Link>
     )
     

  const BodyContentRegister =(
    <div
    className="
    flex 
    justify-center
    items-center
    "
    >
 <div
 className="
 flex
 flex-col
 "
 >
 <Input
 type="text"
 placeholder="Votre nom complet"
 ></Input>
  <Input
 type="password"
 placeholder="Votre mot de passe"
 className="mt-4"
 ></Input>
<Button
type="submit"
text="s'inscrire"
className="
mt-4
w-80
"
></Button>
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
    justify-center
    items-center 

    ">
      <AuthCard
      header={HearderContent}
      title="Formulaire"
      body={BodyContentRegister}
      ></AuthCard>
    </div>
  )
}

export default ResgisterPage