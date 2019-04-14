import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

const skills = new Program('skills',
  {
    aliases: ['skill'],
    type: ProgramType.PRINT_OUTPUT,
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
  }
);

export default skills;
