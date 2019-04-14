import formatTab from './formatTab';

it('tabs with correct spacing', () => {
  expect(formatTab(8, 'hello', 'world')).toEqual("hello   world");
  expect(formatTab(10, 'hello', 'world')).toEqual("hello     world");
});
