import { initializeTimes, updateTimes } from './Main';

// Mock the entire module
jest.mock('./src/api', () => ({
  fetchAPI: jest.fn(),
}));

describe('Main component', () => {
  beforeEach(() => {
    // Setup the mock to return a promise that resolves with mock data
    const { fetchAPI } = require('./src/api'); // Make sure to import it within the function scope after jest.mock
    fetchAPI.mockImplementation((date) => Promise.resolve(['17:00', '18:00', '19:00']));
  });

  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  test('initializeTimes returns the correct expected value', async () => {
    const initialTimes = await initializeTimes();
    expect(initialTimes).toEqual(['17:00', '18:00', '19:00']);
  });

  test('updateTimes returns the same value provided in the state', async () => {
    const currentState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2023-06-15' };
    const updatedTimes = await updateTimes(currentState, action);
    expect(updatedTimes).toEqual(['17:00', '18:00', '19:00']);
  });
});