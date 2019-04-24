import IProgram from "../../interfaces/IProgram";

const mock = jest.fn().mockImplementation((name, options): IProgram => {
  return {
    getHelpText: jest.fn(() => options.helpText),
    getResponses: jest.fn(() => options.responses),
    getCommandName: jest.fn(() => name),
    getAliases: jest.fn(() => [name].concat(options.aliases)),
    getCommandType: jest.fn(() => options.type),
    sendInput: jest.fn(),
    run: jest.fn(),
  }
});

export default mock;