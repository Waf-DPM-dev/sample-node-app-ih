beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});
afterAll(() => {
  // restore original console.log
  if (console.log && console.log.mockRestore) console.log.mockRestore();
});
