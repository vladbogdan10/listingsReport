import averagePriceBySellerType from '../../src/services/averagePriceBySellerTypeService';
import { expectedAveragePriceBySellerResult } from '../../__mocks__/expectedAveragePriceBySellerResult';
import { mockedListings } from '../../__mocks__/mockedListings';

test('Average price by seller type returns expected result', () => {
  const result = averagePriceBySellerType(mockedListings);

  expect(result).toEqual(expectedAveragePriceBySellerResult);
});
