import IObservable from "../../interfaces/IObservable";

const mock = jest.fn().mockImplementation((): IObservable => {
  return {
    subscribe: jest.fn(() => () => {}),
    notify: jest.fn(() => {})
  }
});

export default mock;
