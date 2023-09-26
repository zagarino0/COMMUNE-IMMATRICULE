import AuthCard from "../../components/card/authCard"
import LogoImage from "../../assets/logo.png"
import Input from "../../components/inputs"
import { Button } from "../../components/common"
function SaisirMotifRejetPage() {
  const ContentPage = (
<div className="flex justify-center items-center">
<div className="flex flex-col">
<div className="mt-4 font-semibold text-sm">
Demande de mise à jour rejétée :
</div>
<Input placeholder="Motif de rejet" className="mt-4"></Input>
<Input placeholder="Commentaires" className="mt-4"></Input>
<Button type="submit" text="Enregistrer" className="mt-4"></Button>

</div>
</div>
  )
  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-neutral-800/70">
<div className="flex flex-row">
    <img src={LogoImage} alt="logo" className="w-[600px] h-[500px]" />
    <AuthCard
    title="Veuillez saisir le motif du rejet"
    body={ContentPage}
    ></AuthCard>
</div>
    </div>
  )
}

export default SaisirMotifRejetPage