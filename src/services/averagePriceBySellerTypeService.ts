import groupByKey from '../transformers/groupByKeyTransformer';
import { AveragePriceBySellerType, Listing } from '../types';

const averagePriceBySellerType = (
  listings: Listing[]
): AveragePriceBySellerType => {
  const groupBySellerMap = groupByKey(listings, 'seller_type');

  const avgPriceBySeller = Object.keys(groupBySellerMap).map((seller) => {
    const avgPrice = calculateAveragePrice(groupBySellerMap[seller]);

    return { seller: seller, avgPrice: avgPrice };
  });

  return avgPriceBySeller;
};

const calculateAveragePrice = (listings: Listing[]) => {
  const sum = listings.reduce((acc, currValue) => {
    return acc + currValue.price;
  }, 0);

  return sum / listings.length;
};

export default averagePriceBySellerType;
