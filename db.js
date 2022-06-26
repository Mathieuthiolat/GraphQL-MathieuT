const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   produit:store.collection('produit'),
   utilisateur:store.collection('utilisateur')
};