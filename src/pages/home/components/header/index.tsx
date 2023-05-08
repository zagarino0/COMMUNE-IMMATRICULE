import LinkButton from "../../../../components/common"

function Header() {
  return (
    <div 
    className="
    flex
    
    p-14
    h-[635px]
    w-screen
    bg-image
    bg-cover
    z-10
    
    
    ">
<div>
<div 
className="

mt-16
text-semibold
text-white
text-5xl
mt-40

">
E-mmatriculation de  Mahajanga  
</div>
<div
className="
text-white
mt-4
w-[450px]
text-justify

"
>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis itaque recusandae consequatur consequuntur nulla, hic laboriosam perspiciatis, consectetur pariatur incidunt saepe sunt ad quibusdam architecto ea optio ullam voluptas 
</div>
<LinkButton
to="/login"
text="Commencer"
className="w-32  mt-4"
></LinkButton>
</div>    
<div>

</div>
    </div>
  )
}

export default Header