//1. Check If Number Is even Or Odd
// let num=Number(prompt('Enter Your Number'))
// if(num % 2==0){
//     console.log(num + "The Number Is Even")
// }else{
//     console.log(num + "The Number Is Odd")
// }

// // Write print proper Meaning Full Message Based On Provided Age

// let num = Number(prompt("Enter Your Age:"))
// if(num>= 60){
//     console.log("Your Age is Expire Count For death " + num)
// }else{
//     console.log("Enjoy You Are In Younge Right Now So Let Celebrate " + num)
// }

// //Number guess Application
// let num=4
// let num2=Number(prompt("Enter Your Number"))
// if(num2>num){
//     console.log("Your Guess Number Is Too High" + num2)
// }else if(num<num2){
//     console.log("Your Guess Number Is Too Low" + num2)
// }else{
//     console.log("Your Guess Number Is Correct" + num2)
// }


// Secret Agent Application

//condition
/*  1. The First Character of Name Should Be 'd'
    2. The Last Character of Favourite Actor Should Be 'r'
    3.The Lucky Number is 7
    4.The Length of the dish should be >=6
 */

//     let name=prompt("Enter Your Name")
//     let actor=prompt("Enter Your Actor Name")
//     let num=Number(prompt("Enter Your Lucky number"))
//     let dish=prompt("Enter Your Dish")

//     let namecondition=false
//     let actorCondition=false
//     let numCondition=false
//     let dishCondition=false


// if(name[0]=='d'){
//     namecondition = true
// }

// if(actor[actor.length-1]=='r'){
//     actorCondition=true
// }
// if(num==7){
//     numCondition=true
// }
// if(dish.length>=6){
//     dishCondition = true
// }

// alert("Hello" + name + "\nThanks For Your Conformation")
// if(namecondition && actorCondition && dishCondition && numCondition){
//     console.log("Hello Secret Agent Our Next Operation Is:")
//     console.log("You Are Kill Atleast 10 Sleeping student Because They ARe Bureden In Our Countary")
// }

// Function
// function wish(){
//     console.log("Good Morning")
// }
// wish();

// function wish(name){
//     console.log("Hello" + name + "Good Morning")
// }
// let name=prompt("Enter Your Name")
// wish(name)

// Function with return value
// function square(num){
//     return num*num
// }
// let result=square(4)
// console.log("The Square of Num Is:" + result)
// console.log("The Square of the Number is " + square(5))


// function sumoftwoNumber(num1, num2){
//     return num1+num2
// }
// let sum=sumoftwoNumber(10,20)
// console.log("The Sum Of Two Number Is: " + sum)
// console.log("The Sum Of Two Number Is: " + sumoftwoNumber(30,80))


// function capaitilize(str){
//     return str[0].toUpperCase()+str.slice(1)
// }
// console.log(capaitilize("sunny"))

// function singAsong(){
//     console.log("Teri Jhalak Sarfilli")
//     console.log("Naina Re Tu Hi Pura Tujhse Bura Na koi")
// }





// Local And Global Scope
//1.Global Scope

// let x=10//global scope
// function f1(){
//   let x=20//local scope
//     console.log(x)
// }
// function f2(){
//   console.log(x)
// }
// // f1()
// // f2()

// f2()
// f1()

// Monkey Trouble Problem
// function monkeytrouble(aSmile,bSmile){
//   return (aSmile && bSmile) || (!aSmile && !bSmile)
// }
// console.log("Is Person In Trouble:" + monkeytrouble(true,true))


// String Times
function string_Times(str,n){
  result=""
  var count=1
  while(count<=n){
    result += str
    count++
  }
  return result
}
console.log(string_Times("Durga",3))
console.log(string_Times("Nafish",1))