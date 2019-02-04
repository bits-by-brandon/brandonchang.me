import Command, {commandTypes} from "../models/Command";

const dob = Date.UTC(1993, 4, 7, 1, 23).valueOf();
const now = new Date().valueOf();
const ageMilliseconds = now - dob;
const years = Math.round((ageMilliseconds / 31536000000 * 100)) / 100;

const about = new Command(
    ['about'],
    commandTypes.PRINT_OUTPUT,
    {
        helpText: "opens the 'about' info window",
        responses: [
            "SELECT * FROM users WHERE id = 62093",
            "returned 1 result in 0.01 seconds",
            "---------------------------------------",
            "id:             8931",
            "first:          brandon",
            "last:           chang",
            `age (years):    ${years}`,
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

export default about;