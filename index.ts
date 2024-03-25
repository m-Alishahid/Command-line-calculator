#! /usr/bin/env node
import inquirer from "inquirer";
const question = await inquirer.prompt([
    { message:'Enter first number', type: 'number', name: 'firstNumber'},
    { message:'Enter second number',type:'number',name:'secondNumber'},
    {
        message:'Please select one option to calculate',
        type:'list',
        name:'operation',
        choices:["Addition","Subtraction","Multiplication","Division","Other"],
    }
]);
if(question.operation==="Addition"){
    console.log(question.firstNumber+question.secondNumber);
}
else if(question.operation==="Subtraction"){
    console.log(question.firstNumber-question.secondNumber);
}
else if(question.operation==="Multiplication"){
    console.log(question.firstNumber*question.secondNumber);
}
else if(question.operation==="Division"){
    console.log(question.firstNumber/question.secondNumber);
}
else{
    console.log("This is not be acceptable!");
}