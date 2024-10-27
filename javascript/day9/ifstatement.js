// Your age is 22, if your age is greater than 18, console the “eligible for vote”, otherwise console  “not 

let age=22;
if(age > 18){
    console.log("eligible for vote");
}else{
    console.log("not eligible");
}

// Weather condition is “rainy”,if weather condition is rainy, console the “its pouring outside” otherwise “not raining”

const weather="rainy";
if(weather=="rainy"){
    console.log("its pouring outside");
}else{
    console.log("not raining");
}

// Students marks is 76, console the grade of students based on marks;
//     90+ →  A+
//    81 – 90 —> A
//   71 – 80  —> B+
//  61 — 70 —-> C+
// 51– 60 —-> C
// 40 – 50   —> D
// Below 50 → fail

var studentMarks=76;
if(studentMarks > 90){
    console.log("grade = A+")
}else if(studentMarks > 81 && studentMarks< 90){
    console.log("grade = A");
}else if(studentMarks > 71 && studentMarks < 80){
    console.log("grade = B+");
}else if(studentMarks > 61 && studentMarks < 70){
    console.log("grade = C+");
}else if(studentMarks > 51 && studentMarks < 60){
    console.log("grade = C");
}else if(studentMarks > 40 && studentMarks < 50){
    console.log("grade = D");
}else if(studentMarks < 50){
    console.log("fail");
}else {
    console.log("please write the exam");
}













