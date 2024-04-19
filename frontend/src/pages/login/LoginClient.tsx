import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../../components/card/authCard";
import { Button } from "../../components/common";
import Input from "../../components/inputs";
import { useState } from "react";
import axios from "axios";
import PasswordInput from "../../components/inputs/InputPassword";


function LoginClient() {
 let navigate = useNavigate()
 
const ImageContent = (
  <div className="bg-image w-[500px] h-[500px] bg-cover ">
    
  </div>
)
 

const [code, setCode] = useState('');
const [mdp, setMdp] = useState('');


const handleLogin = () => {
  // Replace with your API endpoint for user authentication
  const apiUrl = 'http://localhost:3500/contribuable/login';

  // Create a request body with user input
  const requestBody = {
    "id": code,
    "mot_de_passe": mdp,
  };

  axios
    .post(apiUrl, requestBody)
    .then((response) => {
      const userData = response.data;
      console.log(response)
      // Check if the user is authenticated and has immatriculation_prise_charge set to true
      if (userData) {
         // Store userData in localStorage
         localStorage.setItem('userContribuableData', JSON.stringify(userData));
        // Redirect to the desired page if the condition is met
        navigate('/majRenseignement');
      } else {
     alert("Votre code ou votre mot de passe est incorrect")
      }
    })
    .catch((error) => {
      console.error('Login error:', error);
      alert('Erreur serveur');    
  
    });
};
  const BodyCotentLogin =(
    
    <div 
    className="flex flex-col ">
        <Input
  type="text"
  placeholder="code"
  className="mt-6"
  value={code}
  onChange={(e)=>{setCode( e.target.value)}}
  ></Input>
  <div 
  className="
  flex 
  flex-col
  ">
  <PasswordInput
 
 placeholder="Entrer votre mot de passe..."
  value={mdp}
  onChange={(e)=>{setMdp( e.target.value)}}
  ></PasswordInput>

  </div>

  <Button 
  type="submit"
  text="se connecter"
  className="mt-6"
  onClick={handleLogin}
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
      title="Contribuable"
      body={BodyCotentLogin}
      ></AuthCard>
    </div>
  )
}

export default LoginClient