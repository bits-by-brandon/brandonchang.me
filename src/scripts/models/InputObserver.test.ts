import InputObserver from "./InputObserver";

it('emits events to subscription', () => {
  const inputObserver = new InputObserver();
  const subscription = jest.fn();
  const preventDefaultMock = jest.fn();

  inputObserver.subscribe(subscription);

  // Ensure subscription is not called yet
  expect(subscription.mock.calls.length).toBe(0);

  inputObserver.keyboardEvent({key: 'h', metaKey: false, ctrlKey: false, preventDefault: preventDefaultMock} as any as KeyboardEvent, 'h');

  // Expect that the prevent default was called
  expect(preventDefaultMock.mock.calls.length).toBe(1);

  // Expect subscription to be called
  expect(subscription.mock.calls.length).toBe(1);
});

it('emits events to multiple subscriptions', () => {
  const inputObserver = new InputObserver();
  const subscription1 = jest.fn();
  const subscription2 = jest.fn();
  const preventDefaultMock = jest.fn();
  inputObserver.subscribe(subscription1);
  inputObserver.subscribe(subscription2);

  // Ensure subscription is not called yet
  expect(subscription1.mock.calls.length).toBe(0);
  expect(subscription2.mock.calls.length).toBe(0);

  // First event should fire on both subscriptions
  inputObserver.keyboardEvent({key: 'h', metaKey: false, ctrlKey: false, preventDefault: preventDefaultMock} as any as KeyboardEvent, 'h');
  expect(preventDefaultMock.mock.calls.length).toBe(1);
  expect(subscription1.mock.calls.length).toBe(1);
  expect(subscription2.mock.calls.length).toBe(1);

  // First event should fire again on both subscriptions
  inputObserver.keyboardEvent({key: 'i', metaKey: false, ctrlKey: false, preventDefault: preventDefaultMock} as any as KeyboardEvent, 'h');
  expect(preventDefaultMock.mock.calls.length).toBe(2);
  expect(subscription1.mock.calls.length).toBe(2);
  expect(subscription2.mock.calls.length).toBe(2);
});

it('returns an unsubscribe function', () => {
  const inputObserver = new InputObserver();
  const subscription1 = jest.fn();
  const subscription2 = jest.fn();
  const preventDefaultMock = jest.fn();
  const unsubscribe1 = inputObserver.subscribe(subscription1);
  const unsubscribe2 = inputObserver.subscribe(subscription2);

  // First event should fire
  inputObserver.keyboardEvent({key: 'h', metaKey: false, ctrlKey: false, preventDefault: preventDefaultMock} as any as KeyboardEvent, 'h');
  expect(subscription1.mock.calls.length).toBe(1);
  expect(subscription2.mock.calls.length).toBe(1);

  unsubscribe1();

  // Second event should not be fired to subscription1
  inputObserver.keyboardEvent({key: 'i', metaKey: false, ctrlKey: false, preventDefault: preventDefaultMock} as any as KeyboardEvent, 'hi');
  expect(subscription1.mock.calls.length).toBe(1);
  expect(subscription2.mock.calls.length).toBe(2);

  unsubscribe2();

  // Third event should not be fired to either subscription
  inputObserver.keyboardEvent({key: 'i', metaKey: false, ctrlKey: false, preventDefault: preventDefaultMock} as any as KeyboardEvent, 'hi');
  expect(subscription1.mock.calls.length).toBe(1);
  expect(subscription2.mock.calls.length).toBe(2);
});
