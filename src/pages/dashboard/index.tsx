
import { Card } from "../../components/card/card"

function DashboardPage() {
  return (
    <div
    className="
    bg-neutral-800/70
    w-screen 
    h-screen
    flex
    flex-row
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
w-60
h-60
my-1
mx-1
"
></Card>
<Card
className="
w-60
h-60
my-1
mx-1
"
></Card>
<Card
className="
w-60
h-60
my-1
mx-1
"
></Card>
</div>
</div>
   
  )
}

export default DashboardPage