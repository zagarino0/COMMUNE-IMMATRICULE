import { Card } from "../../components/card/card";
import { BsCalendarDate } from "react-icons/bs";
import {  AiOutlineStar } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Button from "../../components/common/Button";
interface LayoutProps {
  children: React.ReactElement;
  currentPath: string;
}
const Layout : React.FC<LayoutProps>  = ({ children})=> {
    // Links Layout


const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};

const currentDate = new Date();
const formattedDate = formatDate(currentDate);


  

  const ContentCardProfil = (
    <div
    className="
    p-2
    "
    >
    <div
    className="
    flex
    flex-row
    font-semibold
    "
    >
    <BsCalendarDate
    className="
    mx-1
    text-xl
    font-semibold
    "
    ></BsCalendarDate>
     {formattedDate}
    </div>
    <div
    className="
    flex
    flex-row
    py-2
    font-semibold
    "
    >
    <AiOutlineStar
    className="
    mx-1
    text-xl
    font-semibold
    "
    >
    </AiOutlineStar>
    Référence Fiscal: number
    </div>
    
    <div
    className="
    flex
    flex-row
    py-2
    font-semibold
    "
    >
    <RxAvatar
    className="
    mx-1
    text-xl
    font-semibold
    "
    >
    </RxAvatar>
    Raison social: name
    </div>
   
    <div
    className="
    py-2
    "
    >
    <Button
    onClick={()=> window}
    label="Deconnexion"
    ></Button>
    
    </div>
    </div>
    )
    
    
    
     return (
    <div
    className="
   
    w-screen 
    h-screen
    flex
    items-center
    justify-center
    "
    >
<div 
className="
p-1
flex
flex-col
"
>
<Card
className="
h-[570px]
w-full
my-1
mx-1
flex justify-center
"
contentCard={ContentCardProfil}
></Card>

</div>
<div 
className="
flex
p-8
"
>
<Card
className="
h-full
w-full
p-14
flex items-center justify-center
"
contentCard={children}
></Card>
</div>
</div>

  )
}

export default Layout