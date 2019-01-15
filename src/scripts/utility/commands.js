import Command, {commandTypes} from '../models/Command';

const ytm = 31536000000;
let dob = Date.UTC(1993, 4, 7, 1, 23).valueOf();
let now = new Date().valueOf();
let ageMilliseconds = now - dob;
let years = Math.round((ageMilliseconds / ytm * 100)) / 100;

export const exit = new Command(
    ['exit'],
    commandTypes.EXIT_CONSOLE,
    {helpText: 'exits console mode'}
);

export const clear = new Command(
    ['clear'],
    commandTypes.CLEAR_CONSOLE,
    {helpText: 'clears the console history'}
);

export const help = new Command(
    ['help', 'man'],
    commandTypes.HELP,
);

export const about = new Command(
    ['about'],
    commandTypes.PRINT_OUTPUT,
    {
        helpText: "opens the 'about' info window",
        responses: [
            "running sql (SELECT * from users where id = 8931)",
            "---------------------------------------",
            "id:             8931",
            "first:          brandon",
            "last:           chang",
            `age:            ${years} years`,
            "sex:            M",
            "races:          [ chinese, puerto rican ]",
            "origin:         jamaica",
            "ssn:            ***-**-****",
            "email:          brandon@brandonchang.me",
            "skills:",
            "   frontend:    [ * * * ]",
            "   backend:     [ * *   ]",
            "   design:      [ * *   ]",
            "   ( type 'skills' for a complete list )",
            "---------------------------------------",
        ],
    }
);

export const skills = new Command(
    ['skills', 'skill'],
    commandTypes.PRINT_OUTPUT,
    {
        helpText: 'lists skill set',
        responses: [
            "--------------- SKILLS ----------------",
            "LANGUAGES:",
            "   javascript:  [ * * * ]",
            "   php:         [ * * * ]",
            "   python:      [ * *   ]",
            "   swift:       [ *     ]",
            "---------------------------------------",
            "FRAMEWORKS:",
            "   frontend:    [ react, vue, BEM, jQuery, bootstrap ]",
            "   backend:     [ wordpress, drupal, laravel, symphony,",
            "                  jekyll ]",
            "   cloud:       [ serverless ]",
            "---------------------------------------",
            "TOOLING:",
            "   general:     [ git, npm, cli, docker, vagrant ]",
            "   frontend:    [ gulp, webpack, grunt, scss, canvas ]",
            "   backend:     [ node, sql, pm2, graphQL ]",
            "   design:      [ sketch, illustrator, after-effects,",
            "                  photoshop ]",
            "---------------------------------------",
        ],
    }
);

export const work = new Command(
    ['work'],
    commandTypes.PRINT_OUTPUT,
    {
        responses: ['portfolio coming soon...'],
        helpText: 'lists available work samples'
    }
);

export const contact = new Command(
    ['contact'],
    commandTypes.PRINT_OUTPUT,
    {
        helpText: 'lists contact information',
        responses: [
            'email:  brandon@brandonchang.me',
            'github: github.com/brandondc741',
        ],
    }
);

// export const changePrompt = new Program(['ps1'], args => ([{
//     type: 'response',
//     payload: 'changing prompt to' + args[0]
// }]), {
//     helpText: 'Change the prompt for each message'
// });

export const rm = new Command(
    ['rm -rf', 'rm -f', 'rm -rf /', 'rm -f /', 'rm /', 'rm -r /'],
    commandTypes.PRINT_OUTPUT,
    {responses: ['deleting all files...', 'removed 0 files']}
);

export const helloWorld = new Command(
    ['hello, world', 'hello world', 'hello world!', 'hello, world!'],
    commandTypes.PRINT_OUTPUT,
    {responses: ["hello, curious human"]}
);
