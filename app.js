// console.log("hello word")

// function joshuaMwalimu(){
//     console.log('hey joshua! you have a good gilrfriend!')
//     console.log("wooooooooowww!!!!!")
// }
// joshuaMwalimu()

// function adder(a , b , c , d , e){
//     console.log("a + b + c + d + e");
// }
// result(153 , 589 , 790 , 3372 , 7382) 
// console.log(result)

// function addNumbers(a, b, c, d, e, f){  
//     return a - b - c -  d - e - f;
// }
// let result = addNumbers(2637, 367645, 36477, 646567, 636466, 37746);
// console.log(result)

// const number = [34, 56,22, 83,383, 322, 532, 242, 3, 334, 55];
 
// const choseNumbers = choseNumbers(numbers which add to 54);
// console.log(choseNumbers);


// function multiply(a, b){
//     return a * b ;
// }
// let result = multiply(365, 16)
// console.log(result)

// function substract(a, b, c, d, e, f){
//     return a + b + c + d + e + f  ;
// }

// let result = substract(3, 4, 12, 13, 8, 5)
// console.log(result)

// function multiply(a, b, c, d){
//     return a * b * c * d;
// }

// let result = multiply(8687, 7576, 575766,856767);
// console.log(result)

document.addEventListener("DOMContentLoaded", function() {
function addTask() {
    var taskInput = document.getElementById("taskIput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === ""){
        alert("please enter a task!");
        return;
    }

    var Li = document.createElement("Li");
    Li.appendChild(document.createNodeIterator(taskInput.value));
    taskList.appendChild(li);
    taskInput.value = "";
}
});