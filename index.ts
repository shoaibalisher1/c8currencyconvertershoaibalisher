import inquirer from "inquirer"
import ListPrompt from "inquirer/lib/prompts/list.js";
let loop = (true)
interface userQuery{
    currencyInput:String;
    amountInput:number;
    currencyOutput:String;
}
while(loop) {
    const userInput:userQuery = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            message: "Enter your input currency",
            choices: ["PKR", "USD", "GBP"]

        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the amount you want to convert",

        },
        {
            type: "list",
            name: "currencyOutput",
            message: "Enter your output currency",
            choices: ["PKR", "USD", "GBP"]
        }
    ]);

    const input = userInput.currencyInput;
    const amount = userInput.amountInput
    const output = userInput.currencyOutput

    if (input === "PKR" && output=== "USD") { console.log (`The ${amount} will be equivalent to USD ${amount*0.0036}`)
        } else if (input === "USD" && output=== "PKR") {
            console.log (`The ${amount} is equivalent to PKR ${amount*280}`)
      } 
      
      else if (input === "GBP" && output=== "USD") { console.log (`The ${amount} will be equivalent to USD ${amount*1.27}`)
    } else if (input === "USD" && output=== "GBP") {
        console.log (`The ${amount} is equivalent to GBP ${amount * 0.79}`)}
        
        else if (input === "PKR" && output=== "GBP") { console.log (`The ${amount} will be equivalent to GBP ${amount*0.0028}`)
        } else if (input === "GBP" && output=== "PKR") {
            console.log (`The ${
                amount} is equivalent to PKR ${amount * 353.52}`)}

const reCalculate = await inquirer.prompt ({
    type:"confirm",
    name:"ReCal",
    message: "Do you want more conversions",
    default: false

})

if (!reCalculate.ReCal) {
    loop = false
}

}
