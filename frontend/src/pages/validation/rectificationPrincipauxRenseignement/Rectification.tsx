import { useState } from "react"
import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common"
import Checkbox from "../../../components/common/checkbox"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import { MainLayout } from "../../../layouts/main"
import Select from "../../../components/inputs/selectInput"
import { GrSubtractCircle } from "react-icons/gr";
import { MdOutlineAddCircleOutline } from "react-icons/md"

function Rectification() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange  = () => {
        
  };
  const options = [
    { value: 'référence', label: 'Choisissez dans la liste' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'NIF', label: 'NIF' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const contentCard = (
    <div className="m-4 mb-4">
       
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Rectification des principaux renseignement des contribuables ayant le RF : référence fiscal</div>
<div className="flex flex-col">
<div className="mt-6 flex flex-row justify-between ">
<Label text="Raison social" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Nom commercial" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Type" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Personne physique" checked onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Personne morale" checked onChange={handleCheckboxChange} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Forme juridique" className="mt-4"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Régime Fiscal" className="mt-4"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date d'agrément" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Réf. agrément" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période de grae" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date de création" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Capital en Ar" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Activités" className="mt-4"></Label>
<Input type="textarea" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Précision sur les Activités" className="mt-4"></Label>
<Input type="textarea" className="w-96  "></Input>
</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[990px] p-4">
<div className="flex flex-row">
<MdOutlineAddCircleOutline className="  hover:cursor-pointer" />
<GrSubtractCircle className=" hover:cursor-pointer ml-4"/>
<Label text={`régime d'imposition :`} className="ml-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Imposition" className="mt-4"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date début" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date fin" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Périodicité" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Année" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Actif" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked onChange={handleCheckboxChange} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Exonoré" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked onChange={handleCheckboxChange} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période 1" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période 2" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Etat" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Création" checked onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Rénouvellement" checked onChange={handleCheckboxChange} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date exe" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date assujestissement" className="mt-4"></Label>
<Input type="date" className="w-96  "></Input>
</div>
</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[400px] p-4">
<Label text={`Interlocuteur :`} className="ml-4"></Label>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Nom" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Titre" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Adresse" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Tel" className="mt-4"></Label>
<Input type="E-mail" className="w-96  "></Input>
</div>
</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[220px] p-4">
<Label text={`Coordonnées géographique :`} className="ml-4"></Label>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Longitude" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Laltitude" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>

</div>
<div className="flex flex-col bg-gray-200 mt-4 rounded h-[220px] p-4">
<div className="mt-6 flex flex-row justify-between ">
<Label text="Publié dans l'annuaire" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked onChange={handleCheckboxChange} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="CF Gestionnaire :" className="mt-4"></Label>
<Label text="CF Gestionnaire" className="mt-4"></Label>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="CF Validateur :" className="mt-4"></Label>
<Label text="CF Validateur" className="mt-4"></Label>
</div>
</div>
<div className="flex justify-between mt-4">
<Button text="Valider"></Button>
<Button text="Ajouter num serie"></Button>
<Button text="Valider assujetissement "></Button>
</div>
</div>

    </div>
)
return (
<MainLayout>
<div className="  overflow-y-auto h-[500px] mt-14 mb-8 ">
<Card contentCard={contentCard} className="w-[800px] h-[3000px]"></Card>
</div>
    </MainLayout>
)
}

export default Rectification