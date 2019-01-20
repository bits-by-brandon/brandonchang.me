import Command, {commandTypes} from "../models/Command";

const skills = new Command(
    ['skills', 'skill'],
    commandTypes.PRINT_OUTPUT,
    {
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
    }
);

export default skills;
