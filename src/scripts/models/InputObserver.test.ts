import {InputObserver} from "./InputObserver";

it('emits events to subscriptions', () => {
  const inputObserver = new InputObserver();
  const subscription = jest.fn();
  inputObserver.subscribe(subscription);
  expect(subscription.mock.calls.length).toBe(0);

  inputObserver.event({key: 'h', metaKey: false, ctrlKey: false} as KeyboardEvent, 'h');

  expect(subscription.mock.calls.length).toBe(1);
});

