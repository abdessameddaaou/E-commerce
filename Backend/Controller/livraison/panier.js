const Client = require("../../models/authentifiaction/Client");
const Panier = require("../../models/product/Panier");

module.exports.ajouterPanier = async (req, res) => {
   console.log(req.body)
  try {
    const article = await Client.findOne({ _id: req.body.idcli }); // recuperer les information du l'article
    console.log(article)
    if (article.articleselectionner.length != 0) {
      for (let i = 0; i < article.articleselectionner.length; i++) {
        let element = article.articleselectionner[i];

        let chercheriddanspanier = await Panier.findOne({ _id: element._id });

        let trouveid = chercheriddanspanier.produitselectionner;
        console.log("id "+trouveid)
        if (trouveid == req.params.id) {
          await Panier.findOneAndUpdate(
            { _id: chercheriddanspanier },
            { $inc: { quantiteselectionne: req.body.quantiteselectionne } }
          );
        }
        else
        {
          try {

            const panier = await Panier.create({
              produitselectionner: req.params.id,
              quantiteselectionne: req.body.quantiteselectionne,
              idcli: req.body.idcli,
            });
            await Client.updateOne(
              { _id: req.body.idcli },
              { $push: { articleselectionner: panier } }
            );
            res.status(200).json(panier);
            
          } catch (err) {

            res.status(400).json({ err: err.message });
            
          }
        }
      }
      res.status(201).json("l'article a bien été modifier");
    } 
    else {
      const panier = await Panier.create({
        produitselectionner: req.params.id,
        quantiteselectionne: req.body.quantiteselectionne,
        idcli: req.body.idcli,
      });
      await Client.updateOne(
        { _id: req.body.idcli },
        { $push: { articleselectionner: panier } }
      );

      res.status(200).json(panier);
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports.voirpanier = async (req, res) => {
  try {
    const panier = await Panier.findOne(
      { _id: req.params.id },
      { ...req.body }
    ).populate("produitselectionner");
    res.status(200).json(panier);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports.modifierPanier = async (req, res) => {
  try {
    const article = await Client.findOne({ _id: res.locals.client.id }); // recuperer les information du l'article

    try {
      if (article.articleselectionner.length != 0) {
        for (let i = 0; i < article.articleselectionner.length; i++) {
          let element = article.articleselectionner[i];

          let chercheriddanspanier = await Panier.findOne({ _id: element._id });

          let trouveid = chercheriddanspanier.produitselectionner;

          if (trouveid == req.params.id) {
            await Panier.findOneAndUpdate(
              { _id: chercheriddanspanier },
              { quantiteselectionne: req.body.quantiteselectionne }
            );
          }
        }
        res.status(201).json("l'article a bien été modifier");
      }
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports.supprimerPanier = async (req, res) => {
  try 
  {
    const article = await Client.findOne({ _id: res.locals.client.id }); // recuperer les information du l'article

    try {
      if (article.articleselectionner.length != 0) {
        for (let i = 0; i < article.articleselectionner.length; i++) {
          let element = article.articleselectionner[i];

          let idpanier = JSON.stringify(element);


          if(element == req.params.id)
          {
            await Panier.findOneAndDelete
            ({ _id: element })
          }
          console.log('====================================');
          console.log(idpanier);
          console.log('====================================');
          // let chercheriddanspanier = await Panier.findOne({ _id: element._id });

          // let trouveid = chercheriddanspanier.produitselectionner;

          // if (trouveid == req.params.id) 
          // {
          //   await Panier.findOneAndDelete
          //   ({ _id: chercheriddanspanier })
          // }
        }
        res.status(201).json("l'article a bien été supprimer");
      }
      else
      {
        res.status(201).json("pas d'article asupprimer");
      }
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  } 
  catch (err) 
  {
    res.status(400).json(err);
  }
};
