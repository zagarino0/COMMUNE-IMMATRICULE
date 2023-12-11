import Modal from "../../../components/modals/modals"
import { TitleH1, TitleH2, TitleH3 } from "../../../components/title";
import { IoIosAddCircle } from "react-icons/io";
import "./Modal.css"
import Button from "../../../components/common/Button";

interface ModalProps {
    isOpen?: boolean |  void ;
    onClose?: () => void;
    className?: string;
    quitter?: ()=>void;
    
  }
 
  

export const ModalLogin: React.FC<ModalProps> = ({ isOpen, onClose, className , quitter}) => {

 
  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose} className={`  ${className}`}>
<div className="bg-gray-200 w-[800px]   h-[900px] p-4 rounded">
<div className=" h-[250px] bg-white shadow-2xl flex items-center justify-center rounded ">
<div className="flex flex-col">
<TitleH3 text="LANCEMENT DE L'ESPACE CONTRIBUABLE" className="text-[#959824]"></TitleH3>
<TitleH2 text="E-immatriculation" className="mt-6 text-[#959824] text-center"></TitleH2>


</div>

</div>
<div  className="flex justify-between  w-full mt-8">
<div className="flex flex-col">
<div  className=" w-[350px] flex items-center justify-center flex-col p-4 shadow-2xl bg-white  h-[250px] rounded">

<TitleH1 text="DGE/SRE Mahajanga" className="text-[#959824] text-lg"></TitleH1>
<TitleH3 text="Accéder à l'espace contribuable de la DGE et SRE Mahajanga" className="mt-4 text-gray-400 text-center text-xs"></TitleH3>
<IoIosAddCircle className="text-[#959824] text-2xl mt-4"/>

</div>
<div className="flex flex-col">
<div  className=" w-[350px] flex mt-4 items-center justify-center flex-col p-4 shadow-2xl bg-white  h-[250px] rounded">

<TitleH1 text="Télé-déclaration DGE/SRE  Mahajanga" className="text-[#959824] text-lg"></TitleH1>
<TitleH3 text="Les contribuables de la DGE et du SRE Analamanga disposent depuis l'année 2009 un espace de télé-déclaration et de télé-paiement. Cet espace est accessible en cliquant sur le bouton suivant." className="mt-4 text-gray-400 text-xs text-center"></TitleH3>

<div className="w-40 mt-4">
<Button label="DGE/SRE Mahajanga" onClick={()=>window.location.href = "/loginAdmin"} ></Button>
</div>
</div>

</div>
</div>
<div className="flex flex-col">
  
<div  className="hoverFlipLeft w-[350px]  flex items-center justify-center flex-col p-4 shadow-2xl bg-white  h-[250px] rounded">

<TitleH1 text="Centre Fiscal" className="text-[#959824] text-lg "></TitleH1>
<TitleH3 text="Un nouvel outil accessible des contribuables des Centres Fiscaux" className="mt-4 text-xs text-gray-400 text-center"></TitleH3>

<IoIosAddCircle className="text-[#959824] text-2xl mt-4"/>
</div>

<div  className="hoverFlipLeft w-[350px] mt-4 flex items-center justify-center flex-col p-4 shadow-2xl bg-white  h-[250px] rounded">

<TitleH1 text="Télé-déclaration Centre Fiscal" className="text-[#959824] text-lg "></TitleH1>
<TitleH3 text="Le mois de Juillet 2018 a été consacré pour offrir aux contribuables les meilleurs services. A cet effet, la DGI met à la disposition des contribuables des Centres Fiscaux un nouvel outil de télé-déclaration et de télé-paiement." className="mt-4 text-xs text-gray-400 text-center"></TitleH3>
<div className="w-40 mt-4">
<Button label="Centre Fiscal" onClick={()=>window.location.href = "/LoginClient"} ></Button>
</div>
</div>
</div>
</div>
<div className="flex justify-end mt-4">
<button onClick={quitter} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row">Fermer</button>
</div>
</div>
        </Modal>
    </div>
  )
}

