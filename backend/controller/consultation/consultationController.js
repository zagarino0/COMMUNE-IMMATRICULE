const data = {
    //Real
    validations: require('../../model/validation.json'),
    contribuables: require('../../model/contribuable.json'),
    modifications: require('../../model/modificationContribuable.json'),
    activites: require('../../model/activite.json'),
    dirigeants: require('../../model/dirigeant.json'),
    actionnaires: require('../../model/model_temp/actionnaire.json'),
    coordonnees: require('../../model/coordonnees.json'),
    autres: require('../../model/autre.json'),
    etablissements: require('../../model/etablissement.json'),
    interlocuteurs: require('../../model/interlocuteur.json'),
    siege: require('../../model/siege.json'),
    cessations: require('../../model/cessation_activite.json'),
    assujetissement: require('../../model/assujetissement.json'),

    //Temp
    contribuablesNonValide: require('../../model/model_temp/contribuable.json'),
    activiteTemps: require('../../model/model_temp/activite.json'),
    siegeTemps: require('../../model/model_temp/siege.json'),
    interlocuteurTemps: require('../../model/model_temp/interlocuteur.json'),
    etablissementTemps: require('../../model/model_temp/etablissement.json'),
    autreTemps: require('../../model/model_temp/autre.json'),
    coordonneeTemps: require('../../model/model_temp/coordonnees.json'),
    dirigeantTemps: require('../../model/model_temp/dirigeant.json'),
    actionnaireTemps: require('../../model/model_temp/actionnaire.json'),
    assujetissementTemps: require('../../model/model_temp/assujetissement.json')
}


const getContribuables = (req, res) => {
    const reference_fiscal = req.body.reference_fiscal;

    const contribuable = data.contribuables.find(con => con.reference_fiscal === reference_fiscal);
    if (!contribuable)
        return res.status(400).json({ 'message': 'contribuable introuvable' });

    const validation = data.validations.find(val => val.id_contribuable === contribuable.id);
    if (!validation)
        return res.json({ 'message': 'Le contribuable n\'est pas encore validé' });

    contribuable.actionnaire = data.actionnaires.length === 0 ? null : data.actionnaires.filter(act => act.id_contribuable === contribuable.id);
    contribuable.dirigeant = data.dirigeants.length === 0 ? null : data.dirigeants.filter(dir => dir.id_contribuable === contribuable.id);
    contribuable.activite = data.activites.length === 0 ? null : data.activites.filter(act => act.id_contribuable === contribuable.id);
    contribuable.autre = data.autres.length === 0 ? null : data.autres.filter(aut => aut.id_contribuable === contribuable.id);
    contribuable.coordonnees = data.coordonnees.length === 0 ? null : data.coordonnees.filter(coo => coo.id_contribuable === contribuable.id);
    contribuable.etablissement = data.etablissements.length === 0 ? null : data.etablissements.filter(eta => eta.id_contribuable === contribuable.id);
    contribuable.interlocuteur = data.interlocuteurs.length === 0 ? null : data.interlocuteurs.filter(inter => inter.id_contribuable === contribuable.id);
    contribuable.siege = data.siege.length === 0 ? null : data.siege.filter(sie => sie.id_contribuable === contribuable.id);
    contribuable.assujetissement = data.assujetissement.length === 0 ? null : data.assujetissement.filter(sie => sie.id_contribuable === contribuable.id);
    res.json(contribuable);
}

const getContribuablebloque = (req, res) => {
    const reference = req.body.reference;
    const raison_social = req.body.raison_social;
    const reference_fiscal = req.body.reference_fiscal;
    const cin = req.body.cin;
    const adresse = req.body.adresse;
    const nom_commercial = req.body.nom_commercial;
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    let contribuable = {};


    if (!date_debut) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.length === 0 ? null : data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siege.length === 0 ? null : data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            const adresse = data.siegeTemps.find(sie => sie.adresse_actuel === adresse);
            if (!adresse)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
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
    } else if (date_debut && !date_fin) {
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (date_debut && date_fin) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && !date_debut && !date_fin) {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    } else {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    }

    res.json(contribuable);
}

const getContribuableNonBloque = (req, res) => {
    const reference = req.body.reference;
    const raison_social = req.body.raison_social;
    const reference_fiscal = req.body.reference_fiscal;
    const cin = req.body.cin;
    const adresse = req.body.adresse;
    const nom_commercial = req.body.nom_commercial;
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    let contribuable = {};


    if (!date_debut) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.length === 0 ? null : data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siege.length === 0 ? null : data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            const adresse = data.siegeTemps.find(sie => sie.adresse_actuel === adresse);
            if (!adresse)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
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
    } else if (date_debut && !date_fin) {
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (date_debut && date_fin) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const cessation = data.cessations.find(ces => !ces.cessation)
            if (cessation)
                return res.status(404).json({ 'message': 'Ce contribuable est bloqué' })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && !date_debut && !date_fin) {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    } else {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    }

    res.json(contribuable);
}

const getListeDemandeAValide = (req, res) => {
    const contribuablesNonValides = [];
    data.contribuablesNonValide.map(con => {
        con.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === con.id);
        con.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === con.id);
        con.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.find(act => act.id_contribuable === con.id);
        con.autre = data.autreTemps.length === 0 ? null : data.autreTemps.find(aut => aut.id_contribuable === con.id);
        con.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.find(coo => coo.id_contribuable === con.id);
        con.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === con.id);
        con.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.find(inter => inter.id_contribuable === con.id);
        con.siege = data.siegeTemps.length === 0 ? null : data.siegeTemps.find(sie => sie.id_contribuable === con.id);
        contribuablesNonValides.push({ ...con });
    })
    res.json(contribuablesNonValides);
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


    if (!date_debut) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.length === 0 ? null : data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siege.length === 0 ? null : data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            const adresse = data.siegeTemps.find(sie => sie.adresse_actuel === adresse);
            if (!adresse)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
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
    } else if (date_debut && !date_fin) {
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (date_debut && date_fin) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && !date_debut && !date_fin) {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    } else {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    }

    res.json(contribuable);
}

const getListeMiseAJourAValide = (req, res) => {
    const reference = req.body.reference;
    const raison_social = req.body.raison_social;
    const reference_fiscal = req.body.reference_fiscal;
    const cin = req.body.cin;
    const adresse = req.body.adresse;
    const nom_commercial = req.body.nom_commercial;
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    let contribuable = {};


    if (!date_debut) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.length === 0 ? null : data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siege.length === 0 ? null : data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            const adresse = data.siegeTemps.find(sie => sie.adresse_actuel === adresse);
            if (!adresse)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
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
    } else if (date_debut && !date_fin) {
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (date_debut && date_fin) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && !date_debut && !date_fin) {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    } else {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    }

    res.json(contribuable);
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


    if (!date_debut) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.length === 0 ? null : data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.length === 0 ? null : data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.length === 0 ? null : data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.length === 0 ? null : data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.length === 0 ? null : data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.length === 0 ? null : data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.length === 0 ? null : data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siege.length === 0 ? null : data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            const adresse = data.siegeTemps.find(sie => sie.adresse_actuel === adresse);
            if (!adresse)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
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
    } else if (date_debut && !date_fin) {
        const date = (new Date(date_debut)).setDate((new Date(date_debut)).getDate() + 7);
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            const modification = data.modifications.find(mod => mod.id_contribuable === contribuable.id);
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (date_debut && date_fin) {
        if (reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.id === reference && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin) {
            contribuable = data.contribuablesNonValide.find(con => con.raison_social === raison_social);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && reference_fiscal && !cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.reference_fiscal === reference_fiscal && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && cin && !adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.cin === cin && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
        else if (!reference && !raison_social && !reference_fiscal && !cin && adresse && !nom_commercial) {
            contribuable = data.contribuablesNonValide.find(con => con.adresse === adresse && (new Date(con.date_creation)) >= date_debut && (new Date(con.date_creation)) <= date_fin);
            if (!contribuable)
                return res.status(404).json({ 'message': 'Aucun contribuable' });
            if (modification.nombre_modification === 0)
                return res.status(404).json({ "message": "Contribuable non modifié" })
            contribuable.actionnaire = data.actionnaireTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.dirigeant = data.dirigeantTemps.filter(dir => dir.id_contribuable === contribuable.id);
            contribuable.activite = data.activiteTemps.filter(act => act.id_contribuable === contribuable.id);
            contribuable.autre = data.autreTemps.filter(aut => aut.id_contribuable === contribuable.id);
            contribuable.coordonnees = data.coordonneeTemps.filter(coo => coo.id_contribuable === contribuable.id);
            contribuable.etablissement = data.etablissementTemps.filter(eta => eta.id_contribuable === contribuable.id);
            contribuable.interlocuteur = data.interlocuteurTemps.filter(inter => inter.id_contribuable === contribuable.id);
            contribuable.siege = data.siegeTemps.filter(sie => sie.id_contribuable === contribuable.id);
        }
    } else if (!reference && !raison_social && !reference_fiscal && !cin && !adresse && !nom_commercial && !date_debut && !date_fin) {
        return res.status(404).json({ 'message': 'aucun contribuable' })
    } else {
        return res.status(404).json({ 'message': 'aucun contribuable' })
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