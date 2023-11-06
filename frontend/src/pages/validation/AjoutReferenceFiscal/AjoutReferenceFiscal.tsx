import { useState } from "react"
import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import { MainLayout } from "../../../layouts/main"
import axios from "axios"
import Modal from "../../../components/modals/modals"
import Checkbox from "../../../components/common/checkbox"


function AjoutReferenceFiscal() {
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [isModalError, setIsModalError] = useState(false);
    const [formData, setFormData] = useState<{
      nif: string;
      raisonsocial: string;
      nomcomm: string;
      type: string;
      formjuri: string;
      regfisc: string;
      dateagrem: string;
      refagrem: string;
      periodgra: string;
      datecreation: string;
        capital: string;
        activite: string;
        precactivite: string;
        datedemandemodif: string;
        dateattribnif: string;
        regcomm: string;
        datereg: string;
        numstat: string;
        datedelivre: string;
        datedebutexe: string;
        dateclotexe: string;
        resident:string;
        exportateur: boolean;
        importateur: boolean;
        rib: string;
        province: string;
        region:string ,
        district:string;
        commune: string;
        fokontany: string;
        adress: string;
        nbsalarie: string;
        proprietaire: string;
        typedemande: string;
        dateacte: string;
        dateacc: string;
        titre: string
      // Ajoutez les autres propriétés ici
    }>({
        nif: "",   
        raisonsocial: "",
        nomcomm:"",
        type:"",      
        formjuri: "",
        regfisc: "",
        dateagrem: "",
        refagrem: "",
        periodgra: "",
        datecreation: "",
        capital: "",
        activite: "",
        precactivite: "",
        datedemandemodif: "",
        dateattribnif: "",
        regcomm: "",
        datereg: "",
        numstat: "",
        datedelivre: "",
        datedebutexe: "",
        dateclotexe: "",
        resident:"",
        exportateur: false,
        importateur: false,
        rib: "",
        province: "",
        region:"" ,
        district:"",
        commune: "",
        fokontany: "",
        adress: "",
        nbsalarie: "",
        proprietaire: "",
        typedemande: "",
        dateacte: "",
        dateacc: "",
        titre: ""
      });

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          // Envoyer les données du formulaire au serveur via Axios
          const response = await axios.post("http://localhost:3500/client", formData);
          console.log("Données envoyées avec succès", response.data);
          console.log(formData)
          setIsModalSuccess(true);
          // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
          // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
    setFormData({
      nif: "",
      raisonsocial: "",
      nomcomm: "",
      type: "",
      formjuri: "",
      regfisc: "",
      dateagrem: "",
      refagrem: "",
      periodgra: "",
      datecreation: "",
      capital: "",
      activite: "",
      precactivite: "",
      datedemandemodif: "",
      dateattribnif: "",
      regcomm: "",
      datereg: "",
      numstat: "",
      datedelivre: "",
      datedebutexe: "",
      dateclotexe: "",
      resident: "",
      exportateur: false,
      importateur: false,
      rib: "",
      province: "",
      region: "",
      district: "",
      commune: "",
      fokontany: "",
      adress: "",
      nbsalarie: "",
      proprietaire: "",
      typedemande: "",
      dateacte: "",
      dateacc: "",
      titre: ""
    });
        } catch (error) {
          console.error("Erreur lors de l'envoi des données", error);
          setIsModalError(true);
        }
      };
    
      const handleCheckboxChangeEx  = (checked:boolean) => {  
        setFormData({
          ...formData,
          exportateur: checked,
        });
      };
      const handleCheckboxChange  = (checked:boolean) => {
        
        setFormData({
          ...formData,
        importateur: checked,
        });
      };
    

    const ContentSearch =(
      <div>     
      <div className="bg-majunga01 py-32  bg-cover h-96 p-4">
     <div className="bg-white rounded-md shadow-xl">
     <div className="text-center   font-[Cintaly] text-3xl py-4">
        Ajout Référence Fiscal
       </div>
           
     </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="mt-4 p-4  ">
      <div className="flex justify-between">
      <Label text="Référence fiscal"></Label>
      <Input type="text" placeholder="Référence fiscal"
       value={formData.nif}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, nif: e.target.value })}

      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Raison social"></Label>
      <Input type="text" placeholder="Raison social"
             value={formData.raisonsocial}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, raisonsocial: e.target.value })}
       
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Nom commercial"></Label>
      <Input type="text" placeholder="Nom commercial"
         value={formData.nomcomm}
         onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, nomcomm: e.target.value })}
       
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Type"></Label>
      <Input type="text" placeholder="Type"
             value={formData.type}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, type: e.target.value })}
       
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Forme juridique"></Label>
      <Input type="text" placeholder="Forme juridique"
             value={formData.formjuri}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, formjuri: e.target.value })}
       
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Régime Fiscal"></Label>
      <Input type="text" placeholder="Régime Fiscal"
             value={formData.regfisc}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, regfisc: e.target.value })}
       
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date agrement "></Label>
      <Input type="date"
      value={formData.dateagrem}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dateagrem: e.target.value })}

      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Référence agrement"></Label>
      <Input type="text" placeholder="Référence agrement"
      value={formData.refagrem}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, refagrem: e.target.value })}

      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Période grace"></Label>
      <Input type="text" placeholder="Période grace"
      value={formData.periodgra}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, periodgra: e.target.value })}

      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date création"></Label>
      <Input type="date" 
      value={formData.datecreation}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, datecreation: e.target.value })}

      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Capital"></Label>
      <Input type="text" placeholder="Capital"
        value={formData.capital}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, capital: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Activité"></Label>
      <Input type="text" placeholder="Activité"
        value={formData.activite}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, activite: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Précision Activité"></Label>
      <Input type="text" placeholder="Précision Activité"
        value={formData.precactivite}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, precactivite: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date demande modif"></Label>
      <Input type="date" 
        value={formData.datedemandemodif}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, datedemandemodif: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date Attribution RF"></Label>
      <Input type="date"
        value={formData.dateattribnif}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dateattribnif: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Registre commerce"></Label>
      <Input type="text" placeholder="Registre commerce" 
        value={formData.regcomm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, regcomm: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date registre"></Label>
      <Input type="date" 
        value={formData.datereg}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, datereg: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Numéro statistique"></Label>
      <Input type="text" placeholder="Numéro statistique"
        value={formData.numstat}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, numstat: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Delivré le "></Label>
      <Input type="date" 
        value={formData.datedelivre}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, datedelivre: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date début exercice"></Label>
      <Input type="date"
        value={formData.datedebutexe}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, datedebutexe: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date cloture exercice"></Label>
      <Input type="date"  
        value={formData.dateclotexe}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dateclotexe: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Résident"></Label>
      <Input type="text" placeholder="Résident" 
        value={formData.resident}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, resident: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Exportateur"></Label>
      <Checkbox
        checked={formData.exportateur}
        onChange={handleCheckboxChangeEx}
      />
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Importateur"></Label>
      <Checkbox
        checked={formData.importateur}
        onChange={handleCheckboxChange}
      />
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Rib"></Label>
      <Input type="text" placeholder="Rib" 
        value={formData.rib}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, rib: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Province"></Label>
      <Input type="text" placeholder="Province"
        value={formData.province}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, province: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Region"></Label>
      <Input type="text" placeholder="Region"
        value={formData.region}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, region: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="District"></Label>
      <Input type="text" placeholder="District"
        value={formData.district}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, district: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Commune"></Label>
      <Input type="text" placeholder="Commune"
        value={formData.commune}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, commune: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Fokontany"></Label>
      <Input type="text" placeholder="Fokontany"
        value={formData.fokontany}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, fokontany: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Adresse"></Label>
      <Input type="text" placeholder="Adresse"
        value={formData.adress}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, adress: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Nombre salaire"></Label>
      <Input type="text" placeholder="Nombre salaire"
        value={formData.nbsalarie}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, nbsalarie: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Propriétaire"></Label>
      <Input type="text" placeholder="Propriétaire"
        value={formData.proprietaire}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, proprietaire: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Type demande"></Label>
      <Input type="text" placeholder="Type demande"
        value={formData.typedemande}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, typedemande: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date acte"></Label>
      <Input type="date" 
        value={formData.dateacte}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dateacte: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Date  accord"></Label>
      <Input type="date" 
        value={formData.dateacc}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, dateacc: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-between mt-2">
      <Label text="Titre"></Label>
      <Input type="text" placeholder="Titre" 
        value={formData.titre}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, titre: e.target.value })}
  
      ></Input>
      </div>
      <div className="flex justify-center mt-8">
      <Button type="submit" text="Enregistrer" className="w-[800px]"></Button>
      </div>
      
      </div>
      </form>
     </div>
    )
   
  return (
  <div>
      <MainLayout>
    <div className="mt-24 p-6">
    <Card contentCard={ContentSearch} className="w-[1000px] h-[2800px]"></Card>
    </div>
  

        </MainLayout>
         <Modal isOpen={isModalSuccess} onClose={() => setIsModalSuccess(false)} className="w-[300px] h-[150px]">
   <div className="flex justify-center items-center">
 <div className="flex flex-col">
  <Label text="Donnée ajouté avec succés" className="mt-12"></Label>
    <div className="flex justify-center mt-4" >
    <Button text="OK" onClick={() =>setIsModalSuccess(false)}></Button>
    </div>
 </div>
   </div>
   </Modal>
      <Modal isOpen={isModalError} onClose={() => setIsModalError(false)}className="w-[300px] h-[150px]">
     <div className="flex justify-center items-center">
 <div className="flex flex-col">
  <Label text="Il y a une erreur" className="mt-12"></Label>
    <div className="flex justify-center mt-4" >
    <Button text="OK" onClick={() =>setIsModalError(false)}></Button>
    </div>
 </div>
   </div>
   </Modal>
  </div>
  )
}

export default AjoutReferenceFiscal