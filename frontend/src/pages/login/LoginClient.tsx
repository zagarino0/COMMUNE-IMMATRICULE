import { Link } from "react-router-dom";
import AuthCard from "../../components/card/authCard";
import { Button } from "../../components/common";
import Input from "../../components/inputs";


function LoginClient() {

const ImageContent = (
  <div className="bg-image w-[500px] h-[500px] bg-cover ">
    
  </div>
)
 
  const BodyCotentLogin =(
    
    <div 
    className="flex flex-col ">
        <Input
  type="text"
  placeholder="Référence Fiscal"
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
  <p className="text-lg mt-6 flex flex-row">Si vous voulez retourner . Cliquer<Link to="/" className="ml-2 border-b-2 border-blue-500 text-blue-500 hover:border-red-500 hover:text-red-500">Ici</Link></p>
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
      title="Centre Fiscal"
      body={BodyCotentLogin}
      ></AuthCard>
    </div>
  )
}

export default LoginClient