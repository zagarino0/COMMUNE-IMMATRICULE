
import AuthCard from "../../components/card/authCard"
import { Button } from "../../components/common"
import Input from "../../components/inputs"
import "../../components/font/font.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Select from "../../components/inputs/selectInput"
import axios from "axios"
function LoginPage() {
  const [type_operateur, setType_operateur] = useState('');
  const [code, setUsername] = useState("");
  const [pwd, setPassword] = useState("");
  let navigate = useNavigate()

  const handleOptionChange = (value: string) => {
    setType_operateur(value);
  };
  const options = [
    { value: 'Maire', label: 'Maire' },
    { value: 'Directeur financier', label: 'Directeur financier' },
    { value: 'Chef de service recette', label: 'Chef de service recette' },
    { value: 'Directeur de gestion', label: 'Directeur de gestion' },
    { value: 'Directeur de contrôle', label: 'Directeur de contrôle' },
    { value: 'Directeur de Recuvrement', label: 'Directeur de Recouvrement' },
    { value: 'Chef de division', label: 'Chef de division' },
    { value: 'Regisseur', label: 'Regisseur' },
    { value: 'Percepteur', label: 'Percepteur' },
    
    // Ajoutez vos options ici
  ];
  const handleLogin = async () => {
    try {
      // Replace 'YOUR_BACKEND_LOGIN_URL' with your actual backend API endpoint for login
      const response = await axios.post('http://localhost:3500/user/auth', {
        type_operateur,
        code ,
        pwd,
        
      });

      // Handle the response from the server as needed
      console.log("Login successful:", response.data);

      // Reset the form after successful login
      setUsername("");
      setPassword("");
      setType_operateur("");
      navigate("/validation")
    } catch (error) {
      // Handle errors from the server
      console.error("Login failed:", error.message);
      alert("Authentific ation échoué.Veillez-ressayer encore .");
    }
  };
const ImageContent = (
  <div className="bg-image w-[500px] h-[500px] bg-cover ">
    
  </div>
)
 
  const BodyCotentLogin =(
    
    <div 
    className="flex flex-col ">
       <Select options={options} value={type_operateur} onChange={handleOptionChange} className="w-96 "/>
  <Input
  type="text"
  placeholder="Votre identifiant"
  value={code}
  onChange={(e) => setUsername(e.target.value)}
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
  value={pwd}
  onChange={(e) => setPassword(e.target.value)}
  className=" mt-6 "
  ></Input>
  </div>

  <Button 
  type="submit"
  text="se connecter"
  onClick={handleLogin}
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