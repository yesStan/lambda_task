const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let userInput = null;

const selectedMethods = [
    '1.Sort by alphabet A - Z \n',
    '2.Show digits from the smallest \n',
    '3.Show digits from the biggest \n',
    '4.Display words in ascending order by the number of letters in a word \n',
    '5.Display only unique words \n',
    '6.Show only unique values from the entire set of words and numbers entered by the user. \n',
].reduce((accumulator, currentValue) => accumulator + currentValue);

rl.question('Hi, please enter 10 word and digits dividing them in a space \n', (answer) => {
    userInput = answer.trim().split(' ').filter((item) => item !== ' ');
    console.log(userInput)


    rl.question(selectedMethods, (answer) => {
        switch (answer) {
            case '1':
                console.log('You select 1: Sort by alphabet A - Z')
                console.log(userInput.sort())
                break;
            case '2':
                console.log('You select 2: Show digits from the smallest')
                console.log(userInput.sort((a, b) => a - b))
                break;
            case '3':
                console.log('You select 3: Show digits from the biggest')
                console.log(userInput.sort((a, b) => b - a))
                break;
            case '4':
                console.log('You select 4: Display words in ascending order by the number of letters in a word')
                console.log(userInput.sort((a, b) => a.length - b.length))
                break;
            case '5':
                console.log('You select 5: Display only unique words')
                console.log(userInput.filter((value, index, a) => typeof value === 'string' ? a.indexOf(value) === index : false))
                // console.log([...new Set(userInput)])
                break;
            case '6':
                console.log('You select 6: Show only unique values from the entire set of words and numbers entered by the user')
                console.log([...new Set(userInput)])
                break;
            default:
                console.log('Choose type of sort from 1 - 6');
                break;
        }
    })
})