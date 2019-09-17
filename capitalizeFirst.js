function LetterCapitalize(str){

    //lets do it
    /*

        *****Algorithm****
        1. Take string passed 
        2. Split the string to an array
        3. Iterate through every value in array
        4. Capitalize first letter of every word in array
    */

    let strArr = str.split(" ")
    let capitalized = []
    let firstLetters = []

    strArr.forEach(word => {
        for(let i = 0; i < word.length; i++){
            console.log(word[i])
         
        }
    })


    console.log(firstLetters)
    

}

LetterCapitalize('let do this')