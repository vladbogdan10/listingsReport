import groupByKey from '../transformers/groupByKeyTransformer';
import { DistributionByCarMake, Listing } from '../types';

const distributionByCarMake = (listings: Listing[]): DistributionByCarMake => {
  const groupByMakeMap = groupByKey(listings, 'make');

  const percentageOfCarMake = Object.keys(groupByMakeMap).map((make) => {
    const percentage = (groupByMakeMap[make].length * 100) / listings.length;

    return { make: make, percentage: Math.round(percentage) };
  });

  return percentageOfCarMake.sort((a, b) => {
    return b.percentage - a.percentage;
  });
};

export default distributionByCarMake;
