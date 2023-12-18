import AuthCard from "../../../../components/card/authCard"
import LogoImage from "../../../../assets/logo.png"
import Input from "../../../../components/inputs"
import { Button } from "../../../../components/common"
import { MainLayout } from "../../../../layouts/main"
import { Card } from "../../../../components/card/card"
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

  const Content = (
    <>
        <div className=" flex justify-center items-center bg-neutral-800/70">
<div className="flex flex-row">
    <img src={LogoImage} alt="logo" className="w-[700px] h-[500px]" />
    <AuthCard
    title="Veuillez saisir le motif du rejet"
    body={ContentPage}
    ></AuthCard>
</div>
    </div>
    </>
  )
  return (
    <MainLayout>
    <div className="   mt-14 mb-8 ">
    <Card contentCard={Content} ></Card>
    </div>
        </MainLayout>
  )
}

export default SaisirMotifRejetPage