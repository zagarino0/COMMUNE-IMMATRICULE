import AuthCard from "../../components/card/authCard"
import LinkButton from "../../components/common"
import LogoImage from "../../assets/logo.png"
function DemandeDeMAJPage() {
  const ContentPage = (
<div>
 <LinkButton
 to="/demandeDeNIFValider"
 text="Validation"
 className="w-96 text-center font-semibold"
 ></LinkButton>

<LinkButton
 to="/"
 text="Vehicule"
 className="w-96 text-center font-semibold mt-2"
 ></LinkButton>

<LinkButton
 to="/"
 text="Consultation"
 className="w-96 text-center font-semibold mt-2"
 ></LinkButton>

<LinkButton
 to="/"
 text="Autres opérations"
 className="w-96 text-center font-semibold mt-2"
 ></LinkButton>

<LinkButton
 to="/"
 text="Etat"
 className="w-96 text-center font-semibold mt-2"
 ></LinkButton>

<LinkButton
 to="/"
 text="Espace membre"
 className="w-96 text-center font-semibold mt-2"
 ></LinkButton>
</div>
  )
  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-neutral-800/70">
<div className="flex flex-row">
    <img src={LogoImage} alt="logo" className="w-[600px] h-[500px]" />
    <AuthCard
    title="Nifonline"
    body={ContentPage}
    ></AuthCard>
</div>
    </div>
  )
}

export default DemandeDeMAJPage