import LinkButton from "../../components/common"


function Choose() {
  return (
    <div
    className="flex justify-center items-center h-screen bg-hoteldeville">
    <div className="bg-white w-[800px] h-[300px] rounded mt-20 p-4">
     <div className="flex flex-col mt-4 p-4 text-center  ">
<div>
<LinkButton className=" mt-4" to="/loginAdmin"  text="Se connecter en tant que Administrateur"></LinkButton>
</div>
<div>

<LinkButton className="mt-4" to="/LoginClient" text="Se connecter en tant que Contribuable"></LinkButton>
</div>

<div>
<LinkButton className="mt-4" to="/register" text="Nouvelle contribuable "></LinkButton>
</div>
    

     </div>
    </div>
    </div>
  )
}

export default Choose