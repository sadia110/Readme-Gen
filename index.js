
const fs = require ("fs");
const axios= require('axios');
const inquirer = require("inquirer"); 
const generateMarkdown = require("generateMarkdown.js"); 
 
const questions = [ 
            {
                type: "input",
                name: "Title",
                message: "What is your project title?",
            },
            {
                type: "input",
                name: "Description",
                message: "Description of your project"
            },  
            {
                type: "input",
                name: "Install",
                message: "Instruction for Installation"
            },   
            {
                type: "input",
                name: "Usage",
                message: "How to use the app?"
            },   
            {
                type: "input",
                name: "Licence",
                message: "Select the licence used for the project?",
                choices: [
                    "Mit Licence", 
                    "Apache Licence",
                    "No Licence",
                    "Other" 
                ]
            }, 
            {
                type: "input",
                name: "Contributors",
                message: "Enter the contributors for the project"
            }, 
            {
                type: "input",
                name: "Questions",
                message: "Enter Contact infromation"
            }, 
            {
                type: "input",
                name: "Github",
                message: "Enter Github username"
            }, 
            {
                type: "input",
                name: "Email",
                message: "Enter email"
            },
    
        ];
     


  function writeToFile(fileName, data){
     fs.writeFile(fileName, data, (err) => {
         if (err) {
             throw err; 
         } 
         console.log("Readme succusfully created") 
       });
      }    

 function init() { 
     inquirer.prompt(questions). then((answers) => { 
         const response = generateMarkdown(answers); 
         console.log(answers); 

         writeToFile("README.md" , response); 

     })
 } 
