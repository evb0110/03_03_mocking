import fetchData from './http';
import getLevel from './getLevel';

jest.mock('./http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing http request address for userId == 42', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  getLevel(42);
  expect(fetchData).toBeCalledWith('https://server/user/42');
});

test('testing level value for ok response', () => {
  const response = {
    status: 'ok',
    level: 42,
  };
  fetchData.mockReturnValue(response);
  const level = getLevel(1);
  expect(level).toMatch(/: 42/);
});
