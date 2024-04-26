import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["eating", "drinking", "sleeping"];
async function createTodo() {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "Select an Operation",
            name: "Select",
            choices: ["Add", "Update", "View", "Delete"],
        });
        if (ans.Select === "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "Todo",
            });
            todos.push(addTodo.Todo);
        }
        if (ans.Select === "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Update items in the list",
                name: "Todo",
                choices: todos,
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "Todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.Todo);
            todos = [...newTodo, addTodo.Todo];
        }
        if (ans.Select === "View") {
            console.log(chalk.italic.blueBright("**** To Do List****"));
            console.log(todos);
            console.log(chalk.magenta("           ^^*************^^     "));
        }
        if (ans.Select === "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Delete items in the list",
                name: "Todo",
                choices: todos,
            });
            todos = todos.filter(val => val !== deleteTodo.Todo);
        }
    } while (true);
}
createTodo();
