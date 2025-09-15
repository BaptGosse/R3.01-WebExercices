const min_montant = 3;

let montant = 0;

console.log(verifierSiCommandeGratuite());

montant = 4;

console.log(verifierSiCommandeGratuite());

function verifierSiCommandeGratuite(){
    if(montant >= min_montant){
        return "Livraison gratuite !";
    }
    return "Frais de livraison : X euros";
}