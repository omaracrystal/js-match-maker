var submit = getElementsByName(submit);




sumbit.addEventListener("click", logInfo)

// var str1= "rkqodlw"
// var str2= "world"

// function StringScramble(str1, str2) {
//   string1 = str1.split("");
//   string2 = str2.split("");
//   for (var i = 0; i < string1.length; i++) {
//     if (string2[i] == string1[i]) {
//       return true;}
//     } else return false;
//   };
// }

var str1= "rkqodlw"
var str2= "world"

StringScramble(str1,str2);

function StringScrambler(str1, str2)    {
    matches = []

    var string1 = str1.split("").sort();
    console.log(string1);

    var string2 = str1.split("").sort();
    console.log(string2);

    for (var i=0; i<string1.length; i++)    {
        match=false
        for (var j=0; j<string2.length; j++)    {
            if (i === j)    {
              match.push[i] = true;
            }
        }if (match==true) {

        }
    }
    return false;
}
