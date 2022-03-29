function difTab(arr1, arr2) {
    let tabResult = [];
for (let index = 0; index < arr1.length; index++) {
    // console.log(arr1.indexOf(arr2[index]));
    console.log(arr2.indexOf(arr1[index]));
    if (arr1.indexOf(arr2[index]) == -1) {
        tabResult.push(arr2[index]);
       
        
    }
    if (arr2.indexOf(arr1[index]) == -1) {
        tabResult.push(arr1[index]);
       
       
    }  
    }
    const lastResult = tabResult.filter(el => el !== undefined)
    return lastResult;
}

    





console.log(difTab([1, 2, 3, 5, 7, 6, 4, 9], [1, 2, 6, 7, 8, 3, 4, 5]));

// console.log(difTab([1, 2], [1, 3, 2]));

// const thirdTab = arr1.concat(arr2);
// console.log(thirdTab);

// ----------------- ÉNONCÉ -----------------
//             (9) [1, 2, 3, 5, 1, 2, 3, 4, 5]

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prends deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();