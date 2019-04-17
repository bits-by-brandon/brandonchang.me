"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
const dob = Date.UTC(1993, 4, 7, 1, 23).valueOf();
const now = new Date().valueOf();
const ageMilliseconds = now - dob;
const years = Math.round((ageMilliseconds / 31536000000 * 100)) / 100;
exports.default = new Program_1.default('about', {
    type: IProgram_1.ProgramType.PRINT_OUTPUT,
    helpText: "opens the 'about' info window",
    responses: [
        " ",
        ">>> SELECT * FROM users WHERE id = 60918",
        "<<< returned 1 result in 0.02 seconds",
        ' ',
        "=======================================",
        "first:          brandon",
        "last:           chang",
        `age (years):    ${years}`,
        "sex:            M",
        "races:          [ chinese, puerto rican ]",
        "origin:         jamaica",
        "ssn:            ***-**-****",
        "email:          brandon@brandonchang.me",
        "employer:       <a target='_blank' href='https://asana.com'>asana</a>",
        "skills:",
        "   frontend:    [ + + + ]",
        "   backend:     [ + +   ]",
        "   design:      [ + +   ]",
        "   motion:      [ + + + ]",
        "   ( type 'skills' for a complete list )",
    ],
});
//# sourceMappingURL=about.js.map