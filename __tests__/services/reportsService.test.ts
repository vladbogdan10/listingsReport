import getReports from '../../src/services/reportsService';
import { expectedReportsResult } from '../../__mocks__/expectedReportsResult';
import { mockedContacts } from '../../__mocks__/mockedContacts';
import { mockedListings } from '../../__mocks__/mockedListings';

test('Average price of 30% most contacted listings returns expected result', () => {
  const result = getReports(mockedListings, mockedContacts);

  expect(result).toEqual(expectedReportsResult);
});
