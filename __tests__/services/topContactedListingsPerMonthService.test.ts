import topContactedListingsPerMonth from '../../src/services/topContactedListingsPerMonthService';
import { expectedTopFiveListingContactedPerMonth } from '../../__mocks__/expectedTopFiveResults';
import { mockedContacts } from '../../__mocks__/mockedContacts';
import { mockedListings } from '../../__mocks__/mockedListings';

test('Average price of 30% most contacted listings returns expected result', () => {
  const result = topContactedListingsPerMonth(mockedListings, mockedContacts);

  expect(result).toEqual(expectedTopFiveListingContactedPerMonth);
});
