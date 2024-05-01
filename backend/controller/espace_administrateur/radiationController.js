const data = {
    validations: require('../../model/validation.json'),
    setValidation : function (data) {this.validations = data},
    contribuables: require('../../model/contribuable.json'),
    setContribuable: function (data) {this.contribuables = data},
    modifications: require('../../model/modificationContribuable.json'),
    setModification: function (data) {this.modifications = data},
    activites: require('../../model/activite.json'),
    setActivites: function (data) {this.activites = data},
    dirigeants: require('../../model/dirigeant.json'),
    setDirigeants: function (data) {this.dirigeants = data},
    actionnaires: require('../../model/model_temp/actionnaire.json'),
    setActionnaires: function (data) {this.actionnaires = data},
    coordonnees: require('../../model/coordonnees.json'),
    setCoordonnees: function (data) {this.coordonnees = data},
    autres: require('../../model/autre.json'),
    setAutres: function (data) {this.autres = data},
    etablissements: require('../../model/etablissement.json'),
    setEtablissement: function (data) {this.etablissements = data},
    interlocuteurs: require('../../model/interlocuteur.json'),
    setInterlocuteur: function (data) { this.interlocuteurs = data },
    siege: require('../../model/siege.json'),
    setSiege: function (data) {this.siege = data},
    assujetissement: require('../../model/assujetissement.json'),
    setAssujetissement: function (data) { this.assujetissement = data },

    //radiation
    contribuablesNonValide: require('../../model/model_radie/contribuable.json'),
    setContribuableNonValide: function (data) { this.contribuablesNonValide = data },
    activiteTemps: require('../../model/model_radie/activite.json'),
    setActiviteTemps: function (data) { this.actionnaireTemps = data },
    siegeTemps: require('../../model/model_radie/siege.json'),
    setSiegeTemps: function (data) { this.siegeTemps = data },
    interlocuteurTemps: require('../../model/model_radie/interlocuteur.json'),
    setInterlocuteurTemps: function (data) { this.interlocuteurTemps = data },
    etablissementTemps: require('../../model/model_radie/etablissement.json'),
    setEtablissementTemps: function (data) { this.etablissementTemps = data },
    autreTemps: require('../../model/model_radie/autre.json'),
    setAutreTemps: function (data) { this.autreTemps = data },
    coordonneeTemps: require('../../model/model_radie/coordonnees.json'),
    setCoordonneesTemps: function (data) { this.coordonneeTemps = data },
    dirigeantTemps: require('../../model/model_radie/dirigeant.json'),
    setDirigeantTemps: function (data) { this.dirigeantTemps = data },
    actionnaireTemps: require('../../model/model_radie/actionnaire.json'),
    setActionnaireTemps: function (data) { this.actionnaireTemps = data },
    assujetissementTemps: require('../../model/model_radie/assujetissement.json'),
    setAssujetissementTemps: function (data) {this.assujetissementTemps = data},

    history: require('../../model/history.json'),
    setHistory: function (data) {this.history = data}
}


const setRadiation = async (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;
    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(404).json({'message': 'contribuable introuvable'});
    
    const filteredContribuable = data.contribuables.filter(con => con.id_contribuable !== contribuable.id);
    data.setContribuable([filteredContribuable]);
    data.setContribuableNonValide([...data.contribuablesNonValide, contribuable])


    const activite = data.activites.find(act => act.id_contribuable === contribuable.id);
    if(activite){
        const filteredActivite = data.activites.filter(act => act.id_contribuable !== contribuable.id);
        data.setActiviteTemps([...data.activiteTemps, activite]);
        data.setActivites(filteredActivite);
    }

    
    const coordonnees = data.coordonnees.find(act => act.id_contribuable === contribuable.id);
    if(coordonnees){
        const filteredCoordonnees = data.coordonnees.filter(coo => coo.id_contribuable !== contribuable.id);
        data.setCoordonnees(filteredCoordonnees);
        data.setCoordonneesTemps([...data.coordonneeTemps, filteredCoordonnees]);
    }

    const siege = data.siege.find(act => act.id_contribuable === contribuable.id);
    if(siege){
        const filteredSiege = data.siege.filter(sie => sie.id_contribuable !== contribuable.id);
        data.setSiege(filteredSiege);
        data.setSiegeTemps([...data.siegeTemps, siege]);
    }

    
    const interlocuteur = data.interlocuteurs.find(act => act.id_contribuable === contribuable.id);
    if(interlocuteur){
        const filteredInterlocuteur = data.interlocuteurs.filter(inter => inter.id_contribuable !== contribuable.id);
        data.setInterlocuteurTemps([...data.interlocuteurTemps, interlocuteur]);
        data.setInterlocuteur(filteredInterlocuteur);
    }

    const actionnaire = data.actionnaires.filter(act => act.id_contribuable === contribuable.id);
    if(actionnaire.length !== 0){
        const filteredActionnaire = data.actionnaires.filter(act => act.id_contribuable !== contribuable.id);
        data.setActionnaireTemps([...data.actionnaireTemps, ...actionnaire]);
        data.setActionnaires(filteredActionnaire);
    }

    const dirigeant = data.dirigeants.filter(act => act.id_contribuable === contribuable.id);
    if(dirigeant){
        const filteredDirigeant = data.dirigeants.filter(act => act.id_contribuable !== contribuable.id);
        data.setDirigeantTemps([...data.dirigeantTemps, ...dirigeant]);
        data.setDirigeants(filteredDirigeant);
    }

    const autre = data.autres.find(act => act.id_contribuable === contribuable.id);
    if(autre.length !== 0){
        const filteredAutre = data.autres.filter(act => act.id_contribuable !== contribuable.id);
        data.setAutreTemps([...data.autreTemps, autre]);
        data.setAutres(filteredAutre);
    }

    const etablissement = data.etablissements.filter(act => act.id_contribuable === contribuable.id);
    if(etablissement.length !== 0){
        const filteredEtablissement = data.etablissements.filter(act => act.id_contribuable !== contribuable.id);
        data.setEtablissementTemps([...data.etablissementTemps, etablissement]);
        data.setEtablissement(filteredEtablissement);
    }

    const assujetissement = data.assujetissement.filter(act => act.id_contribuable === contribuable.id);
    if(assujetissement){
        const filteredAssujetissement = data.assujetissement.filter(act => act.id_contribuable !== contribuable.id);
        data.setAssujetissementTemps([...data.assujetissementTemps, assujetissement]);
        data.setAssujetissement(filteredAssujetissement);
    }

    const id_history = data.history.length === 0 ? 1 : data.history[data.history.length - 1].id_history + 1;
    const history = {
        'id_history': id_history,
        'id_contribuable': contribuable.id,
        'id_user': req.body.id_user,
        'motif': req.body.motif,
        'comment': req.body.comment,
        'date_history': new Date()
    }

    data.setHistory([...data.history, history]);
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'history.json'),
        JSON.stringify(data.history)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'contribuable.json'),
        JSON.stringify(data.contribuablesNonValide)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'contribuable.json'),
        JSON.stringify(data.contribuables)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'actionnaire.json'),
        JSON.stringify(data.actionnaireTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'actionnaire.json'),
        JSON.stringify(data.actionnaires)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'activite.json'),
        JSON.stringify(data.actionnaireTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'activite.json'),
        JSON.stringify(data.activites)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'autre.json'),
        JSON.stringify(data.autreTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'autre.json'),
        JSON.stringify(data.autres)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'assujetissement.json'),
        JSON.stringify(data.assujetissementTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'assujetissement.json'),
        JSON.stringify(data.assujetissement)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'coordonnees.json'),
        JSON.stringify(data.coordonneeTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'coordonnees.json'),
        JSON.stringify(data.coordonnees)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'dirigeant.json'),
        JSON.stringify(data.dirigeantTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'dirigeant.json'),
        JSON.stringify(data.dirigeants)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'etablissement.json'),
        JSON.stringify(data.etablissementTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'etablissement.json'),
        JSON.stringify(data.etablissements)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'interlocuteur.json'),
        JSON.stringify(data.interlocuteurs)
    )

    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'model_radie', 'siege.json'),
        JSON.stringify(data.siegeTemps)
    )
    await fsPromises.writeFile(
        path.join(__dirname, '..', '..', 'model', 'siege.json'),
        JSON.stringify(data.siege)
    )

    res.json(contribuable)
}

const getAllRadiation = (req, res) => {
    const radiationsContribuable = data.contribuablesNonValide;
    radiationsContribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
    radiationsContribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
    radiationsContribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
    radiationsContribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
    radiationsContribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
    radiationsContribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
    radiationsContribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
    radiationsContribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
    res.json(radiation);
}

const consultationradiation = (req, res) => {
    const reference = req.body.reference;
    const raison_social = req.body.raison_social;
    const reference_fiscal = req.body.reference_fiscal;
    const cin = req.body.cin;
    const adresse = req.body.adresse;
    const nom_commercial = req.body.nom_commercial;
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    let contribuable = {};


    if(!date_debut){
        if(reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.id === reference);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.length === 0 ? null : data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siege.length === 0 ? null : data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial){
            const adresse = data.siegeTemps.find(sie => sie.adresse_actuel === adresse);
            if(!adresse)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable = data.contribuablesNonValide.filter(con => con.id === adresse.id_contribuable);
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = adresse
            
        }
    } else if(date_debut && !date_fin){
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if(reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if(date_debut && date_fin){
        if(reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if(!contribuable)
                return res.status(404).json({'message': 'Aucun contribuable'});
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if(!reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && !date_debut && !date_fin){
        return res.status(404).json({'message': 'aucun contribuable'})
    }else {
        return res.status(404).json({'message': 'aucun contribuable'})
    }

    res.json(contribuable);
}

const getRadiationById = (req, res) => {
    const id_radiation = req.params.id_radiation; 
    const contribuable = data.contribuablesNonValide.find(con => con.id === id_radiation);
    if(!contribuable)
        return res.status(404).json({'message': 'Contribuable introuvable'})
    res.json(contribuable) 
}


module.exports = {
    setRadiation,
    consultationradiation,
    getRadiationById,
    getAllRadiation
}