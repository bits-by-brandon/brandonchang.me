import Command, {commandTypes} from "../models/Command";

const contact = new Command(
    ['contact'],
    commandTypes.PRINT_OUTPUT,
    {
        helpText: 'lists contact information',
        responses: [
            'email:  brandon@brandonchang.me',
            'github: <a href="http://github.com/brandondc741" target="_blank">github.com/brandondc741</a>',
        ],
    }
);

export default contact;
