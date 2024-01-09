import { useState } from "react"
import { Card } from "../../../components/card/card"
import  Button  from "../../../components/common/Button"
import Checkbox from "../../../components/common/checkbox"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import { MainLayout } from "../../../layouts/main"

function TelechargementFichierExport() {
 const [RFprepare , setRFPrepare] = useState<{
  reference_fiscal : string,
  date_debut: string , 
  date_fin : string,
  contribuable_centre: boolean

 }>({
  reference_fiscal : "",
  date_debut: "" , 
  date_fin : "",
  contribuable_centre: false

 })
  const contentCard = (
    <div className="m-4">
       
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Préparation des données RFonline à télécharger</div>
        <div className="mt-6 flex flex-row justify-between ">
<Label text="Numéro RFonline" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={RFprepare.reference_fiscal}
onChange={(e)=>{ setRFPrepare({...RFprepare , reference_fiscal : e.target.value })}}
></Input>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date début" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={RFprepare.date_debut}
onChange={(e)=>{ setRFPrepare({...RFprepare , date_debut : e.target.value})}}
></Input>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date fin " className="mt-4"></Label>
<Input type="date" className="w-96  "
value={RFprepare.date_fin}
onChange={(e)=>{ setRFPrepare({...RFprepare , date_fin : e.target.value})}}
></Input>


</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Tous les Contribuable du centre" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked={RFprepare.contribuable_centre == true} onChange={(checked)=>{ setRFPrepare({...RFprepare , contribuable_centre : checked})}}></Checkbox>
<Checkbox label="Non" checked={RFprepare.contribuable_centre == false} onChange={(checked)=>{ setRFPrepare({...RFprepare , contribuable_centre : !checked})}} className="ml-4"></Checkbox>
</div>
</div>
<div className="flex justify-center w-full mt-12">
<div className="w-96">
<Button label="Préparer" onClick={()=> window}></Button>
</div> 
</div>
    </div>
)
  return (
    <MainLayout>
    <div className=" mt-14 mb-8">
    <Card contentCard={contentCard} className="w-[800px] h-[500px]"></Card>
    </div>
        </MainLayout>
  )
}

export default TelechargementFichierExport