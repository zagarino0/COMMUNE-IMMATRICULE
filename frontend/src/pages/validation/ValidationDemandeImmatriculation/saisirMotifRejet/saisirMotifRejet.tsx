import AuthCard from "../../../../components/card/authCard"
import LogoImage from "../../../../assets/logo.png"
import Input from "../../../../components/inputs"
import { Button } from "../../../../components/common"
import { MainLayout } from "../../../../layouts/main"
import { Card } from "../../../../components/card/card"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Label } from "../../../../components/label/label"
function SaisirMotifRejetPage() {

  const [Motif , setMotif] = useState<{
    reference_fiscal : string,
    Motif_rejet : string ,
    commentaire : string,
    id_user : string , 
  }>({

  Motif_rejet : "",
  commentaire : "",
  reference_fiscal : "",
  id_user : ""
  
})


  const handleMotif = async () => {
    const MotifRejet ={
     "reference_fiscal" : Motif.reference_fiscal,
     "motif": Motif.Motif_rejet,
     "commentaire":Motif.commentaire,
     "id_user": Motif.id_user    
    }
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/contribuable/rejetcontribuable", MotifRejet);
      // Check the response status or do something with the response
      console.log("Server Response:", response );
      alert('Motif envoyé ')
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert('il y a une erreur')
    }
  };
  const ContentPage = (
<div className="flex justify-center items-center">
<div className="flex flex-col">
<div className="mt-4 font-semibold text-sm">
Demande de mise à jour rejétée :
</div>
<Input
value={Motif.Motif_rejet}
onChange={(e)=>setMotif({...Motif , Motif_rejet : e.target.value })}
placeholder="Motif de rejet" className="mt-4"></Input>
<Input placeholder="Commentaires"
value={Motif.commentaire}
onChange={(e)=>setMotif({...Motif , commentaire : e.target.value })}
className="mt-4"></Input>
<Button onClick={handleMotif} type="submit" text="Enregistrer" className="mt-4"></Button>
<div className="mt-6">
  <Link to={`/validation`}><Label className="" text="Retourner dans la validation"></Label></Link>
</div>
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