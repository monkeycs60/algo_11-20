function fonctionParam(arr, func) {
  let tab = [];
let tri = arr.sort();
for (let index = 0; index < tri.length; index++) {
 if (func(tri[index]) === true) {
   tab.push(tri[index]);
 } 
}
return tab;
}

console.log(fonctionParam([1, 7, 2, 3, 90, 4, 5, 1, 2, 3], function(n) {return n >= 3;}));


// ----------------- ÉNONCÉ -----------------

// Cette fonction reçoit deux paramètres, un tableau et une fonction.
// Triez le premier paramètre(arr).
// Puis retournez un nouveau tableau après avoir utilisé la fonction (second param)
// avec chacun des éléments du premier tableau.
// ----------------- CONSEILS -----------------

// shift();
// Boucle for;