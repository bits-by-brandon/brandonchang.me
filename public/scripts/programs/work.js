"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Program_1 = require("../models/Program");
const work = new Program_1.default(['work'], Program_1.commandTypes.PRINT_OUTPUT, {
    responses: [
        '<a href="http://fieldmuseum.org" target="_blank">Field Museum</a>',
        'Lead developer and motion designer for the redesigned',
        'Field Museum website. Created re-usable, configurable',
        'and deeply integrated components using the Drupal CMS',
        'to deliver flexible and usable administration alongside',
        'a friendly, beautiful and accessible (WCAG 2.0) for ',
        'users.',
        '======================================================',
        '<a href="https://uncorkcapital.com" target="_blank">Uncork Capital</a>',
        'full portfolio coming soon...',
    ],
    helpText: 'lists available work samples'
});
exports.default = work;
//# sourceMappingURL=work.js.map