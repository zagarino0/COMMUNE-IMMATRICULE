
import LinkButton, { LinkButtonSecondary } from "../../../../components/common"
import Logo from "./logo"

function Navbar() {
  return (
    <>
      <div
      className="
      shadow-xl
      h-16
      w-screen
      flex
      justify-between
      bg-white
      fixed
      z-50
      "
      >
 
        <Logo></Logo>
        

 <div 
 className="
 flex
 flex-row
 m-2
 ">
  <LinkButtonSecondary
  to="/login"
  text="Se connecter"
  className="m-3"
  ></LinkButtonSecondary>
<LinkButton 
to="/register"
text="S'inscrire"

></LinkButton>
 </div>
      </div>  
    </>
  )
}

export default Navbar