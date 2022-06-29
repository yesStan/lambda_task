// const inquirer = require('inquirer');

import inquirer from 'inquirer';

// import * as readline from "readline";
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

const store = [];

let addUser = async () => {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter user`s name. To cancel press ENTER',
    });

    if (name === '') {
        const findByName = await inquirer.prompt({
            type: 'confirm',
            name: 'searchUser',
            message: 'Would you like to find user by name?',
        });

        if (findByName.searchUser === true) {
            const findUserName = await inquirer.prompt({
                type: 'input',
                name: 'searchName',
                message: 'Please enter the name:'
            })

                .then((answer) => {
                    console.log(answer.searchName);
                    function userName() {
                        console.log(store.find((item) => item.name === answer.searchName));
                    }
                    userName();
                })

            return console.log('Name found');
            // return addUser()

        } else {
            return console.log('See you later');
        }
    }

    const { gender } = await inquirer.prompt({
        name: 'gender',
        message: 'What is your gender',
        type: 'list',
        choices: ['male', 'female'],
    });

    const { age } = await inquirer.prompt({
        type: 'input',
        name: 'age',
        message: 'What is your age?',
        validate: (age) => {
            if (isNaN(age)) {
                return 'Only numbers is required';
            }
            return true;
        },
    });

    store.push({
        name,
        gender,
        age,
    });

    console.log('DB contain next users:', store);
    addUser();
};
addUser();