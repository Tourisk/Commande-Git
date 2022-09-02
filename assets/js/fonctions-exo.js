/**
 *
 * créer 2 fonctions
 *    -> une sans paramètre qui va afficher il fait beau
 *
 *    -> une avec paramètre (number) qui comportera une condition
 *      en fonction de cette condition elle affichera il fait beau ou il fait froid
 *
 *          condition: si + 15 -> il fait beau
 *                     sinon -> il fait froid
 *
 */

// function tempsQuiFait() {
//   let tempErature = prompt("Quelle température fait-il?")
//     if (tempErature > 15) {
//         console.log(tempErature + "° :Il fait beau!");
//       } else {
//         console.log(tempErature + "° :Il fait froid!");
//       }
// }

function tempsQuiFaitCondition(tempErature) {
  if (tempErature > 15) {
    console.log(tempErature + "° :Il fait beau!");
    } else {
      console.log(tempErature + "° :Il fait froid!");
    }
}
// tempsQuiFait()
tempsQuiFaitCondition(16)


/**
 *
 * 1. créer une fonction qui log en console "bonjour"
 * 2. créer une fonction qui log en console un message passé en "argument"
 * 3. créer une fonction qui attend 2 paramètre et qui affiche le resultat de l'addition des deux
 * 4. créer une fonction qui attend 2 paramètre et qui affiche le resultat de la soustraction des deux
 * 5. créer une fonction qui attend 2 paramètre et qui affiche le resultat de la division des deux
 * 6. créer une fonction qui attend 2 paramètre et qui affiche le resultat de la multiplication des deux
 *
 *
 */


 function welCome() {
  console.log("bonjour");
}
function meSsage(argument = "Argument") {
  console.log(argument);
}
function addItion(numb1 = 50, numb2 = 50) {
  console.log(numb1 + numb2);
}
function sousTraction(numb3 = 50, numb4 = 50) {
  console.log(numb3 - numb4);
}
function diVision(numb5 = 50, numb6 = 50) {
  console.log(numb5 / numb6);
}
function mulTiplication(numb7 = 50, numb8 = 50) {
  console.log(numb7 * numb8);
}


welCome();
meSsage();
addItion();
sousTraction();
diVision();
mulTiplication();

// autre façon

function welCome() {
  console.log("bonjour");
}
function meSsage(argument = "Argument") {
  console.log(argument);
}
function addItion(numb1, numb2) {
  console.log(numb1 + numb2);
}
function sousTraction(numb3, numb4) {
  console.log(numb3 - numb4);
}
function diVision(numb5, numb6) {
  console.log(numb5 / numb6);
}
function mulTiplication(numb7, numb8) {
  console.log(numb7 * numb8);
}


welCome("Argument");
meSsage(50 ,50);
addItion(25, 25);
sousTraction(50, 50);
diVision(25, 25);
mulTiplication(5, 5);


/**
 *
 * 1. créer une variable pays qui sera un objet
 * 2. créer 3 propriété pour ce pays par exemple: nom, population, s'il est beaucoup ensoleillé
 *  - 1 propriété crée a l'initialisation/création
 *  - 1 propriété crée avec la syntaxe du " . "
 *  - 1 propriété crée avec la syntaxe des " [''] "
 *
 */



