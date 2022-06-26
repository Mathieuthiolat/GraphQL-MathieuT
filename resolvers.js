const db = require('./db');

const Query = {
   produit:() => db.produit.list(),  
   utilisateur:() => db.utilisateur.list()
}  

const Mutation = {
  
   returnCreateProduit:(root,args,context,info) => {
      return db.produit.create({
        nom:args.nom,
        description:args.description,
        token:args.token,
        prix:args.prix,
        stock:args.stock,
        reference:args.reference,
        created_at:args.created_at,
        update_at:args.update_at,
      }) 
   },
  updateProduit: (_, { produitId, nom,  description, token, prix, stock, reference, created_at, update_at }) => { 
     const produit = find(produit, { id: produitId }); 
     if (!produit) {
       throw new Error(`Couldn’t find the product with id ${produitId}`);
     }
     produit.nom = nom; 
     produit.description = description; 
     produit.token = token; 
     produit.prix = prix; 
     produit.stock = stock; 
     produit.reference =reference; 
     produit.created_at =created_at; 
     produit.update_at =update_at; 
     return produit;
  },
   returnCreateUtilisateur:(root,args,context,info) => {
      return db.utilisateur.create({
        nom:args.nom,
        prenom:args.prenom,
        token:args.token,
        role:args.role,
        created_at:args.created_at,
        update_at:args.update_at,
      }) 
   },
    updateUtilisateur: (_, { utilisateurId, nom,  prenom, token, role,created_at, update_at }) => { 
     const utilisateur = find(utilisateur, { id: utilisateurId }); 
     if (!utilisateur) {
       throw new Error(`Couldn’t find the user with id ${utilisateurId}`);
     }
     utilisateur.nom = nom; 
     utilisateur.prenom = prenom; 
     utilisateur.token = token; 
     utilisateur.role = role; 
     utilisateur.created_at =created_at; 
     utilisateur.update_at =update_at; 
     return utilisateur;
  },
  returnDeleteProduitById:(root,args,context,info) => {
      const result = db.produit.delete(args.id); 
      return true
   },
   returnDeleteUtilisateurById:(root,args,context,info) => {
      const result = db.utilisateur.delete(args.id); 
      return true
   },
}
module.exports = {Query,Mutation}