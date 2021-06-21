import { Contact, Listing, Reports } from '../types';
import averagePriceBySellerType from './averagePriceBySellerTypeService';
import averagePriceOfMostContactedListings from './averagePriceOfMostContactedListingsService';
import distributionByCarMake from './distributionByCarMakeService';
import topContactedListingsPerMonth from './topContactedListingsPerMonthService';

const getReports = (listings: Listing[], contacts: Contact[]) => {
  const averagePriceBySellerReport = averagePriceBySellerType(listings);
  const distributionByCarMakeRport = distributionByCarMake(listings);
  const averagePriceOfMostContactedListingsReport = averagePriceOfMostContactedListings(
    listings,
    contacts
  );
  const topContactedListingsPerMonthReport = topContactedListingsPerMonth(
    listings,
    contacts
  );

  const reports: Reports = {
    averagePriceBySellerReport,
    distributionByCarMakeRport,
    averagePriceOfMostContactedListingsReport,
    topContactedListingsPerMonthReport,
  };

  return reports;
};

export default getReports;
