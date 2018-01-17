// Created by Jesse Hernandez

var input = prompt('Enter a word to create into a secret code: ');

input.toLowerCase;
var pigOut;


if (input.length > 1) {
    var firstL = input.slice(0,1);
    var secondL = input.slice(1,1);
    
    if (input[0] == 'a' || input[0] == 'e' || input[0] == 'i' || input[0] == 'o' || input[0] == 'u' || input[0] == 'y') 
    {
        pigOut = input + "way";
    } else if ((firstL != 'a' || firstL != 'e' || firstL != 'i' || firstL != 'o' || firstL != 'u' || firstL != 'y') && (secondL == 'a' || secondL == 'e' || secondL == 'i' || secondL == 'o' || secondL == 'u')){
        pigOut = input.substr(1) + input.substr(0, 1) + "ay";
    } else {
        pigOut = input.substr(2) + input.substr(0, 2) + "ay";
    }
} 

