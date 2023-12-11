
import AuthCard from "../../components/card/authCard"
import { Button } from "../../components/common"
import Input from "../../components/inputs"
import "../../components/font/font.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import Select from "../../components/inputs/selectInput"
function LoginPage() {
  const [selectedOption, setSelectedOption] = useState('');

        const handleOptionChange = (value: string) => {
          setSelectedOption(value);
        };

  const options = [
    { value: 'DGE secteur bancaire', label: 'DGE secteur bancaire' },
    { value: 'DGE Autre secteur', label: 'DGE Autre secteur' },
    { value: 'DGE Administration Fiscal', label: 'DGE Administration Fiscal' },
    { value: 'SRE Mahajanga 1', label: 'SRE Mahajanga 1' },
    { value: 'SRE Mahajanga 2', label: 'SRE Mahajanga 2' },
    
  ];

const ImageContent = (
  <div className="bg-image w-[500px] h-[500px] bg-cover ">
    
  </div>
)
 
  const BodyCotentLogin =(
    
    <div 
    className="flex flex-col ">
       <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
  <Input
  type="text"
  placeholder="Votre identifiant"
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
      title="Administration"
      body={BodyCotentLogin}
      ></AuthCard>
    </div>
  )
}

export default LoginPage