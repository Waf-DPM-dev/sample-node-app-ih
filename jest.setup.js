// Make console.log a mock so tests using toHaveBeenCalledWith(...) work
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  if (console.log && console.log.mockRestore) console.log.mockRestore();
});

// Optional: no-ops for browser APIs some tests might touch
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });
