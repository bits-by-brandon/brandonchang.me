import changePrompt from './changePrompt';
import exit from './exit';
import skills from './skills'
import hello from './hello';
import help from './help';
import clear from './clear';
import contact from './contact';
import echo from './echo';
import about from './about';
import work from './work';
import man from './man';

export let commandArray = [];

export const matchCommand = input => commandArray.find(
    command => command.inputs.includes(input.split(' ')[0])
);

export const getCommands = () => commandArray;

export const registerCommand = command => {
    commandArray.push(command);
};

registerCommand(hello);
registerCommand(changePrompt);
registerCommand(exit);
registerCommand(echo);
registerCommand(clear);
registerCommand(skills);
registerCommand(about);
registerCommand(help);
registerCommand(work);
registerCommand(contact);
registerCommand(man);
