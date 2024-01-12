const data = {
    //Real
    validations: require('../../model/validation.json'),
    contribuables: require('../../model/contribuable.json'),
    modifications: require('../../model/modificationContribuable.json'),
    activites: require('../../model/activite.json'),
    dirigeants: require('../../model/dirigeant.json'),
    actionnaires: require('../../model/model_temp/actionnaire.json'),
    coordonnees: require('../../model/coordonees.json'),
    autres: require('../../model/autre.json'),
    etablissements: require('../../model/etablissement.json'),
    interlocuteurs: require('../../model/interlocuteur.json'),
    siege: require('../../model/siege.json'),

    //Temp
    contribuablesNonValide: require('../../model/model_temp/contribuable.json'),
    activiteTemps: require('../../model/model_temp/activite.json'),
    siegeTemps: require('../../model/model_temp/siege.json'),
    interlocuteurTemps: require('../../model/model_temp/interlocuteur.json'),
    etablissementTemps: require('../../model/model_temp/etablissement.json'),
    autreTemps: require('../../model/model_temp/autre.json'),
    coordonneeTemps: require('../../model/model_temp/coordonees.json'),
    dirigeantTemps: require('../../model/model_temp/dirigeant.json'),
    actionnaireTemps: require('../../model/model_temp/actionnaire.json')
}


const getContribuables = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if(!contribuable)
        return res.status(400).json({'message': 'contribuable introuvable'});

    const validation = data.validations.find(val => val.id_contribuable === contribuable.id);
    if(!validation)
        return res.json({'message': 'Le contribuable n\'est pas encore validé'});

    res.json(contribuable);
}

const getContribuablebloque = (req, res) => {
    let contribuables = [];

    data.contribuables.map(con => {
        data.validations.map(val => {
            data.modifications.map(mod => {
                if(mod.blockage && val.id_contribuable === con.id && mod.id_contribuable === val.id_contribuable)
                    contribuables.push({...val, ...mod, ...con});
            })
        })
    })

    res.json(contribuables);
    contribuables = [];
}

const getContribuableNonBloque = (req, res) => {
    let contribuables = [];

    data.contribuables.map(con => {
        data.validations.map(val => {
            data.modifications.map(mod => {
                if(!mod.blockage && val.id_contribuable === con.id && mod.id_contribuable === val.id_contribuable)
                    contribuables.push({...val, ...mod, ...con});
            })
        })
    })

    res.json(contribuables);
    contribuables = [];
}

const getListeDemandeAValide = (req, res) => {
    res.json(data.contribuablesNonValide);
}

const getListeDemandeAValideByAll = (req, res) => {
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
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
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
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else {
        return res.status(400).json({'message': 'aucun contribuable'})
    }

    res.json(contribuable);
}

const getListeMiseAJourAValide = (req, res) => {
    let contribuables = [];

    res.json(contribuables);
    contribuables = [];
}

const getListeMiseAJourAValideByAll = (req, res) => {
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
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.nom_commercial === nom_commercial)
        }
    } else if(date_debut && !date_fin){
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if(reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date){
            contribuable = data.contribuablesNonValide.find(con => con.nom_commercial === nom_commercial)
        }
    } else if(date_debut && date_fin){
        if(reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial){
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin){
            contribuable = data.contribuablesNonValide.find(con => con.nom_commercial === nom_commercial)
        }
    } else {
        return res.status(400).json({'message': 'aucun contribuable'})
    }

    res.json(contribuable);
}

module.exports = {
    getContribuables,
    getContribuablebloque,
    getContribuableNonBloque,
    getListeDemandeAValide,
    getListeMiseAJourAValide,
    getListeDemandeAValideByAll,
    getListeMiseAJourAValideByAll
}