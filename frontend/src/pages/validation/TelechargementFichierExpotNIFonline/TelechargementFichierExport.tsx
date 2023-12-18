import { Card } from "../../../components/card/card"
import  Button  from "../../../components/common/Button"
import Checkbox from "../../../components/common/checkbox"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import { MainLayout } from "../../../layouts/main"

function TelechargementFichierExport() {
  const handleCheckboxChange  = () => {
        
  };
  const contentCard = (
    <div className="m-4">
       
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Préparation des données RFonline à télécharger</div>
        <div className="mt-6 flex flex-row justify-between ">
<Label text="Numéro RFonline" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date début" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date fin " className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>


</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Tous les Contribuable du centre" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked onChange={handleCheckboxChange} className="ml-4"></Checkbox>
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