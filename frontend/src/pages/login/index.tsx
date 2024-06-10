
import AuthCard from "../../components/card/authCard"
import { Button } from "../../components/common"
import Input from "../../components/inputs"
import "../../components/font/font.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import axios from "axios"
import PasswordInput from "../../components/inputs/InputPassword"
function LoginPage() {
  
  const [code, setUsername] = useState("");
  const [pwd, setPassword] = useState("");
  let navigate = useNavigate()

 
  const handleLogin = async () => {
    const Administration = {
     
      code ,
      pwd,
      
    } 
    try {
      // Replace 'YOUR_BACKEND_LOGIN_URL' with your actual backend API endpoint for login
      const response = await axios.post('http://localhost:3500/user/auth', Administration);

      // Handle the response from the server as needed
      console.log("Login successful:", response.data);
      localStorage.setItem('userAdministrationData', JSON.stringify(response.data));
        // Reset the form after successful login
      setUsername("");
      setPassword("");
      
      navigate("/validation")
    } catch (error : any) {
      // Handle errors from the server
      console.error("Login failed:", error.message);
      alert(`Erreur serveur : ${error}`	);
    }
  };
const ImageContent = (
  <div className="bg-image w-[500px] h-[500px] bg-cover ">
    
  </div>
)
 
  const BodyCotentLogin =(
    
    <div 
    className="flex flex-col ">
      
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
    <PasswordInput
 
  placeholder="Entrer votre mot de passe..."
 value={pwd}
 onChange={(e)=>{setPassword( e.target.value)}}
 ></PasswordInput>

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