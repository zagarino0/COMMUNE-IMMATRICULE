import * as React from "react";
import "../font/font.css"
interface AuthCardProps{
    title?: string ;
    header?:React.ReactElement;
    body?:React.ReactElement;
    footer?:React.ReactElement;
image?: React.ReactElement;


}
const AuthCard : React.FC<AuthCardProps> = ({
    title,
    header,
    body,
    footer,
    image
}) => {
  return (
<div className="
flex
flex-row
">
  <div >
{image}
  </div>
<div
    className="
    bg-white
    w-[500px]
    h-[500px]
    py-6
    
    "
    >
<div>
    {header}
</div>
        <div 
    className="
    text-5xl
    font-[Cintaly]
    text-center
    py-6
        ">{title}</div>
 <div 
 className="
 flex
 justify-center
 items-center
 py-6
 ">
   {body} 
 </div>
    <div>
        {footer}
    </div> 
    </div>
</div>
  )
}

export default AuthCard