import fetchData from './http';
import getLevel from './getLevel';

jest.mock('./http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testung return value for response.status !==\'ok\'', () => {
  const response = {
    status: 'notOk',
    level: -42,
  };
  fetchData.mockReturnValue(response);

  const level = getLevel(1);
  expect(level).toBe('Информация об уровне временно недоступна');
});

test('testing level value for ok response', () => {
  const response = {
    status: 'ok',
    level: 42,
  };
  fetchData.mockReturnValue(response);
  const level = getLevel(1);
  const expected = `Ваш текущий уровень: 42`;
  expect(level).toBe(expected);
});
