import averagePriceOfMostContactedListings from '../../src/services/averagePriceOfMostContactedListingsService';
import { mockedContacts } from '../../__mocks__/mockedContacts';
import { mockedListings } from '../../__mocks__/mockedListings';

test('Average price of 30% most contacted listings returns expected result', () => {
  const result = averagePriceOfMostContactedListings(
    mockedListings,
    mockedContacts
  );
  const expectedResult = 20388.153846153848;

  expect(result).toEqual(expectedResult);
});
