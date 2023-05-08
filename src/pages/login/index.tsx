
import AuthCard from "../../components/card/authCard"
import { Button } from "../../components/common"
import Input from "../../components/inputs"
function LoginPage() {

const ImageContent = (
  <div className="bg-image w-[500px] h-[500px] bg-cover ">
    
  </div>
)
 
  const BodyCotentLogin =(
    <div 
    className="flex flex-col ">
  <Input
  type="text"
  placeholder="Votre identifiant"
  className="mt-6"
  ></Input>
  <div 
  className="
  flex 
  flex-col
  ">
  <Input
  type="password"
  placeholder={`Votre mot de passe `}
  className=" mt-6 "
  ></Input>
  </div>

  <Button 
  type="submit"
  text="se connecter"
  className="mt-6"
  ></Button>
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
     image={ImageContent}
      title="E-immatriculation"
      body={BodyCotentLogin}
      ></AuthCard>
    </div>
  )
}

export default LoginPage