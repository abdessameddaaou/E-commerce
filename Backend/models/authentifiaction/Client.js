const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// c'est la base de données on a spécifier le type
const clientSchema = mongoose.Schema({
  nom: { type: String, required: true, maxlength: 30, minlegth: 2 },
  prenom: { type: String, required: true, maxlength: 30, minlength: 2 },
  adresse: { type: String, required: true },
  codePostale: { type: Number, required: true, maxlength: 5, minlegth: 2 },
  ville: { type: String, required: true },
  pays: { type: String, required: true },
  dateDeNaissance: { type: Date, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: [isEmail],
    trimp: true,
  },
  password: { type: String, required: true, minlegth: 8, required: true },
  telephone: { type: Number, maxlength: 10, minlegth: 10 },
  sexe: { type: Boolean, required: true },
  confirmation: { type: Boolean, default: false },
  articleselectionner: [ // c'est les relation entre les tables
    {
      type: ObjectId,
      ref: "Panier",
    },
  ],
  commande: [
    {
      type: ObjectId,
      ref: "Commande",
    },
  ],
});

module.exports = mongoose.model("Client", clientSchema);
