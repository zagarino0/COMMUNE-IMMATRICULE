import { Card } from "../../../components/card/card";
import Button from "../../../components/common/Button";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { MainLayout } from "../../../layouts/main";

function TelechargementVehicule() {
 
  const contentCard = (
    <div className="m-4">
       
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Préparation des données véhicules sur RFonline à télécharger</div>
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
<Label text="Numéro Véhicules" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>

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
export default TelechargementVehicule