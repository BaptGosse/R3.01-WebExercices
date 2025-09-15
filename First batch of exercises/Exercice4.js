const ht = 114.38;
const ttva = 0.2;

const mtva = ht*ttva;
const ttc = ht + mtva;

const devise = "€"

console.log("Le montant HT est de " + ht + devise + ", avec l'ajout de " + mtva + devise + " de TVA, soit un montant TTC de " + ttc + devise);