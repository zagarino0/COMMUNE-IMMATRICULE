import { Link } from "react-router-dom";
import "../font/font.css"

interface LinkButtonProps{
  to: string | undefined;
    className?: string , 
    text?: string ,
    href?: string
    
}
interface ButtonProps{
    type?: "button" | "submit"|"reset", 
    className?: string , 
    text?: string ,
    onClick?: () => void | boolean    
  
    
}

interface LinkHrefProps{
  
    className?: string , 
    text?: string ,
    href?: string
    
}

export const Button: React.FC<ButtonProps> = ({
  type , 
  className ,
  text
  }) => {
    return (
      
    <button
    type={type}  
    className={` 
    py-3
    px-6 
    bg-[#959824] 
    text-white 
    font-[Grand Space] 
    rounded-sm 
    font-semibold
    hover:shadow-xl 
   
    ${className}
    `}>
      {text}
    </button>
      
    )
  }
  
  export const ButtonSecondary: React.FC<ButtonProps> = ({
    type , 
    className ,
    text
    }) => {
      return (
        
      <button
      type={type}  
      className={` 
      py-3
      px-6 
      bg-[#959824] 
      text-white 
      font-bold 
      rounded-sm 
     
      ${className}
      `}>
        {text}
      </button>
        
      )
    }

const LinkButton: React.FC<LinkButtonProps> = ({
to , 
className ,
text
}) => {
  return (
    <Link to={to !== undefined ? to : ''}>
  <div  
  className={` 
  py-3
  px-6 
  bg-[#959824] 
  text-white 
  text-bold 
  rounded-sm 
  hover:scale-110
  hover:shadow-xl 
  transition 
  duration-300 
  ease-in-out
  ${className}
  `}>
    {text}
  </div>
    </Link>
  )
}

export default LinkButton ;

export const LinkButtonSecondary: React.FC<LinkButtonProps> = ({
  to , 
  className ,
  text
  }) => {
    return (
      <Link to={to !== undefined ? to : ''}>
    <div  
    className={` 
    
    text-bold 
    rounded-sm 
    text-bold
    hover:scale-110 
    hover:border-[#959824]
    hover:border-b-2
    transition 
    duration-300 
    ease-in-out
    ${className}
    `}>
      {text}
    </div>
      </Link>
    )
  }
  
  export const LinkHref: React.FC<LinkHrefProps> = ({
     
    className ,
    text,
    href
    }) => {
      return (
       
      <div
      className="
      hover:scale-110 
      transition 
      duration-300 
      ease-in-out
      "
      >
        <a  
      href={href}
      className={` 
      m-3
      text-bold 
      rounded-sm 
      text-bold
      
      hover:border-[#959824]
      hover:border-b-2
      
      ${className}
      `}>
        {text}
      </a>
      </div>
       
      )
    }  

    