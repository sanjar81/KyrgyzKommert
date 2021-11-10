// function transliterate(word) {
//     var answer = ""
//         , a = {};
//
//     a["Ё"] = "YO";
//     a["Й"] = "I";
//     a["Ц"] = "S";
//     a["У"] = "U";
//     a["К"] = "K";
//     a["Е"] = "E";
//     a["Н"] = "N";
//     a["Г"] = "G";
//     a["Ш"] = "SH";
//     a["Щ"] = "SH";
//     a["З"] = "Z";
//     a["Х"] = "H";
//     a["Ъ"] = "'";
//     a["ё"] = "yo";
//     a["й"] = "y";
//     a["ц"] = "ts";
//     a["у"] = "u";
//     a["к"] = "k";
//     a["е"] = "e";
//     a["н"] = "n";
//     a["г"] = "g";
//     a["ш"] = "sh";
//     a["щ"] = "sh";
//     a["з"] = "z";
//     a["х"] = "h";
//     a["ъ"] = "'";
//     a["Ф"] = "F";
//     // a["Ы"] = "I";
//     a["В"] = "V";
//     a["А"] = "a";
//     a["П"] = "P";
//     a["Р"] = "R";
//     a["О"] = "O";
//     a["Л"] = "L";
//     a["Д"] = "D";
//     a["Ж"] = "J";
//     a["Э"] = "E";
//     a["ф"] = "f";
//     // a["ы"] = "i";
//     a["в"] = "v";
//     a["а"] = "a";
//     a["п"] = "p";
//     a["р"] = "r";
//     a["о"] = "o";
//     a["л"] = "l";
//     a["д"] = "d";
//     a["ж"] = "j";
//     a["э"] = "e";
//     a["Я"] = "Ya";
//     a["Ч"] = "CH";
//     a["С"] = "S";
//     a["М"] = "M";
//     a["И"] = "I";
//     a["Т"] = "T";
//     a["Ь"] = "'";
//     a["Б"] = "B";
//     a["Ю"] = "YU";
//     a["я"] = "ya";
//     a["ч"] = "ch";
//     a["с"] = "s";
//     a["м"] = "m";
//     a["и"] = "i";
//     a["т"] = "t";
//     // a["ь"] = "'";
//     a["б"] = "b";
//     a["ю"] = "yu";
//
//     for (i in word) {
//         if (word.hasOwnProperty(i)) {
//             if (a[word[i]] === undefined) {
//                 answer += word[i];
//             } else {
//                 answer += a[word[i]];
//             }
//         }
//     }
//
//
//
//
//     return answer;
// }
//
//
// console.log(transliterate('Цирк'));


//
// const myfunc =(a,b)=>{
//     while (a!==b) {
//         if (a>b) {
//             a = a-b;
//         }
//         else {
//             b=b-a
//         }
//     }


//     return b
// }
//
// console.log(myfunc(10,85))


// function odd() {
//     let a = [11, 22, 31, 41];
//     let b = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 1) {
//             b.push(a[i]);
//             b.sort()
//         }
//     }
//     console.log(b[b.length - 1])
// }
//
// odd();

//
// function even() {
//     let a = [11, 22, 31, 41,32,23,];
//     let b = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) {
//             b.push(a[i]);
//             b.sort()
//         }
//     }
//     console.log(b[0])
// }

// even();
console.log(screen.width)


