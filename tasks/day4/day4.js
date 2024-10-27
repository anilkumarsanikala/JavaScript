// take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string


var Str1="      anil";
var Str2="vijay        ";
var trim_Str1=Str1.trimStart();
console.log(trim_Str1);
var trim_Str2=Str2.trimEnd();
console.log(trim_Str2);
var concatStr=trim_Str1.concat(trim_Str2);
console.log(concatStr);
var uppercase=concatStr.toUpperCase();
console.log(uppercase);



// .Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase



var Str3="aniLKumar";
var sliceStr3=Str3.slice(3, 5);
console.log(sliceStr3);
var last_index=sliceStr3.lastIndexOf();
console.log(last_index);
var lower_case=sliceStr3.toLowerCase();
console.log(lower_case);




// .take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 



var Str4="v";
var Str5="ijaykumar";
var concat_Str=Str4.concat(Str5);
console.log(concat_Str);
var uppercase=concat_Str.toUpperCase();
console.log(uppercase);
var slice=uppercase.slice(-2,-1);
console.log(slice);




// we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase




var Str6="anilkumar";
var Str7="idrusbasha";
var slice_str6=Str6.slice(0, 3);
console.log(slice_str6);
var slice_str7=Str7.slice(-3);
console.log(slice_str7);
var concatStrs=slice_str6.concat(slice_str7);
console.log(concatStrs);
var uppercase=concatStrs.charAt(0).toUpperCase() + concatStrs.substring(1, concatStrs.length-1) + concatStrs.charAt(concatStrs.length-1).toUpperCase();
console.log(uppercase);


// You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

var Str8="   anilkumar   ";
var trim_Str8=Str8.trim();
console.log(trim_Str8);
var uppercase=trim_Str8.charAt(0).toUpperCase() + trim_Str8.substring(1, trim_Str8.length-1) + trim_Str8.charAt(trim_Str8.length-1).toUpperCase();
console.log(uppercase);
var Str9="vijay";
var concat=uppercase.concat(Str9);
console.log(concat);



// ."hello there , how are you " find the index of are word in the sentence


var Str10="hello there , how are you";
var indexof_Str=Str10.indexOf("are");
console.log(indexof_Str);