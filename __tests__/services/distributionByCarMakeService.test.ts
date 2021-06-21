import distributionByCarMake from '../../src/services/distributionByCarMakeService';
import { expectedDistributionByMakeResult } from '../../__mocks__/expectedDistributionByMakeResult';
import { mockedListings } from '../../__mocks__/mockedListings';

test('Distribution by car make returns expected result', () => {
  const result = distributionByCarMake(mockedListings);

  expect(result).toEqual(expectedDistributionByMakeResult);
});
