"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const IProgram_1 = require("../interfaces/IProgram");
const skills = new Program_1.default('skills', {
    aliases: ['skill'],
    type: IProgram_1.ProgramType.PRINT_OUTPUT,
    helpText: 'lists skill set',
    responses: [
        " ",
        "languages:",
        "   javascript:  [ + + + ]",
        "   typescript:  [ + +   ]",
        "   php:         [ + + + ]",
        "   python:      [ + +   ]",
        "   swift:       [ +     ]",
        " ",
        "frameworks:",
        "   frontend:    [ react, BEM, jQuery, bootstrap, GSAP ]",
        "   backend:     [ wordpress, drupal, laravel,",
        "                  symphony, jekyll ]",
        "   cloud:       [ aws, serverless ]",
        " ",
        "tooling:",
        "   general:     [ git, npm, cli, docker, vagrant ]",
        "   frontend:    [ gulp, webpack, grunt, scss, canvas ]",
        "   backend:     [ node, sql, pm2, graphQL ]",
        "   design:      [ sketch, illustrator, after-effects,",
        "                  photoshop ]",
    ],
});
exports.default = skills;
//# sourceMappingURL=skills.js.map