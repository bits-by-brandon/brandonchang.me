import Command, {actionTypes} from '../models/Command';

const ytm = 31536000000;
let dob =  Date.UTC(1993, 4, 7, 1, 23).valueOf();
let now = new Date().valueOf();
let ageMilliseconds = now - dob;
let years = Math.round((ageMilliseconds / ytm * 100))/100;

export const exit = new Command(
    ['exit'],
    actionTypes.EXIT_CONSOLE,
    null,
    'exits console mode'
);

export const clear = new Command(
    ['clear'],
    actionTypes.CLEAR_CONSOLE,
    null,
    'clears the console history'
);

export const help = new Command(
    ['help', 'man'],
    actionTypes.HELP,
);

export const about = new Command(
    ['about'],
    actionTypes.PRINT_OUTPUT,
    [
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
    "opens the 'about' info window"
);

export const skills = new Command(
    ['skills', 'skill'],
    actionTypes.PRINT_OUTPUT,
    [
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
    'lists skill set'
);

export const work = new Command(
    ['work'],
    actionTypes.PRINT_OUTPUT,
    ['portfolio coming soon...'],
    'lists available work samples'
);

export const contact = new Command(
    ['contact'],
    actionTypes.PRINT_OUTPUT,
    [
        'email:  brandon@brandonchang.me',
        'github: github.com/brandondc741',
    ],
    'lists contact information'
);

export const rm = new Command(
    ['rm -rf', 'rm -f', 'rm -rf /', 'rm -f /', 'rm /', 'rm -r /'],
    actionTypes.PRINT_OUTPUT,
    ['deleting all files...', 'removed 0 files']
);

export const helloWorld = new Command(
    ['hello, world', 'hello world', 'hello world!', 'hello, world!'],
    actionTypes.PRINT_OUTPUT,
    ["hello, curious human"],
);
