import Program from "../models/Program";
import {ProgramType} from "../interfaces/IProgram";

const work = new Program('work',
  {
    type: ProgramType.PRINT_OUTPUT,
    responses: [
      '<a href="http://fieldmuseum.org" target="_blank">Field Museum</a>',
      'Lead developer and motion designer for the redesigned',
      'Field Museum website. Created re-usable, configurable',
      'and deeply integrated components using the Drupal CMS',
      'to deliver flexible and usable administration alongside',
      'a friendly, beautiful and accessible (WCAG 2.0) for ',
      'users.',
      '======================================================',
      ' ',
      '<a href="https://uncorkcapital.com" target="_blank">Uncork Capital</a>',
      ' ',
      'full portfolio coming soon...',
    ],
    helpText: 'lists available work samples'
  }
);

export default work;
