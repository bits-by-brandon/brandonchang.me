"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const skills = new Program_1.default(['skills', 'skill'], Program_1.commandTypes.PRINT_OUTPUT, {
    helpText: 'lists skill set',
    responses: [
        "LANGUAGES ============================================",
        "   javascript:  [ * * * ]",
        "   php:         [ * * * ]",
        "   python:      [ * *   ]",
        "   swift:       [ *     ]",
        " ",
        "FRAMEWORKS ===========================================",
        "   frontend:    [ react, vue, BEM, jQuery, bootstrap ]",
        "   backend:     [ wordpress, drupal, laravel, symphony,",
        "                  jekyll ]",
        "   cloud:       [ serverless ]",
        " ",
        "TOOLING ==============================================",
        "   general:     [ git, npm, cli, docker, vagrant ]",
        "   frontend:    [ gulp, webpack, grunt, scss, canvas ]",
        "   backend:     [ node, sql, pm2, graphQL ]",
        "   design:      [ sketch, illustrator, after-effects,",
        "                  photoshop ]",
    ],
});
exports.default = skills;
//# sourceMappingURL=skills.js.map