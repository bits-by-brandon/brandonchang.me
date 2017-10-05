function handleSubmit(currentState) {
    const ytm = 31536000000;
    const motm = 2628002880;
    const dtm = 86400000;
    const mitm = 60000;
    const stm = 100;
    let dob =  Date.UTC(1993, 4, 7, 1, 23).valueOf();
    let now = new Date().valueOf();
    let ageMilliseconds = now - dob;
    let years = Math.round((ageMilliseconds / ytm * 100))/100;
    let months = Math.round((ageMilliseconds / 2628002880 * 100))/100;
    console.log(years);
    console.log(months);

    let command = currentState.userInput;
    let tabSpace = 8;
    let commands = {
        "hello, world": {
            responses: ["hello, curious human"],
            action: appendCommand
        },
        "hello world": {
            responses: ["hello, curious human"],
            action: appendCommand
        },
        "exit": {
            helpText: "exits console mode",
            action: exitConsole
        },
        "clear": {
            helpText: "clears the console history",
            action: clearConsole
        },
        "help": {
            action: help
        },
        "about": {
            helpText: "opens the 'about' info window",
            responses: [
                "---------------------------------------",
                "id:             8419",
                "first:          brandon",
                "last:           chang",
                `age:            `,
                "sex:            M",
                "state:          florida",
                "races:          [\"asian\",\"puerto rican\"]",
                "born:           jamaica",
                "ssn:            ***-**-****",
                "phone:          407-881-****",
                "email:          brandondc741@gmail.com",
                "tabs:           true",
                "skills:",
                "   frontend:    [==========]",
                "   backend:     [======    ]",
                "   design:      [========  ]",
                "---------------------------------------",
            ],
            action: appendCommand
        },
        "rm -rf": {
            responses: ["deleting all files.....", "ha, jk"],
            action: appendCommand
        },
    };

    function appendCommand(currentCommand) {
        let responseObjects = currentCommand.responses.map((response) => {
            return {
                type: ['response'],
                payload: response,
            }
        });
        return {
            userInput: '',
            console: [
                ...currentState.console,
                {
                    type: ['input'],
                    payload: '>' + currentState.userInput,
                }
            ].concat(responseObjects)
        }
    }

    //Returns error string with name of command entered
    function error(command) {
        return {
            userInput: '',
            console: [
                ...currentState.console,
                {
                    type: ['input'],
                    payload: '>' + currentState.userInput,
                },
                {
                    type: ['error'],
                    payload: "command not found: " + command
                },
                {
                    type: ['error'],
                    payload: "type 'help' for list of available commands"
                }
            ]
        }
    }

    //Lists out all commands with the "helpText" property assigned
    function help() {
        let commandList = Object.keys(commands);
        return {
            userInput: '',
            console: [
                ...currentState.console,
                {
                    type: ['input'],
                    payload: '>' + currentState.userInput,
                },
                {
                    type: ['response'],
                    payload: '==== listing out available commands ===='
                },
                ...commandList
                    .filter((commandName) => {
                        return (commands[commandName].helpText);
                    })
                    .map((commandName) => {
                        let helpText = commands[commandName].helpText;
                        let tabString = [];
                        for (let i = 0; i < (tabSpace - commandName.length); i++) {
                            tabString.push("\u00A0");
                        }
                        return {
                            type: ['response'],
                            payload: commandName + tabString.join('') + helpText
                        }
                    })
            ]
        }
    }

    function exitConsole() {
        return {
            userInput: '',
            console: []
        }
    }

    function clearConsole() {
        return {
            userInput: '',
            console: [
                {
                    type: 'input',
                    payload: ''
                }
            ]
        }
    }

    let currentCommand = commands[command];

    if (currentCommand) {
        return currentCommand.action(currentCommand);
    } else {
        return error(command);
    }

}

export {handleSubmit};