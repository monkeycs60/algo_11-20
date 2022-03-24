var findDigit = function(num, nth){
    
    console.log();
    let resultat = Array.from(String(num), num => Number(num));
    index = (resultat.length - nth);
    console.log(index);
   
    
    
    
   
        if (num == 0) {
            return 0;

        }
        else if (nth <= 0) {
return -1;
        }
        else if( index <= -0.5 ) {
            return 0;  
        }
        else if (index <= -1) {
            return -1;
        }
    else {
        
        let finalResult = resultat[index]
        return finalResult;
    }
    
   
}

console.log(findDigit(5673, 4));


// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1