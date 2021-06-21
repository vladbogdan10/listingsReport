export type Listing = {
  id: number;
  make: string;
  price: number;
  mileage: number;
  seller_type: string;
};

export type Contact = {
  listing_id: number;
  contact_date: number;
};

export type Reports = {
  averagePriceBySellerReport: AveragePriceBySellerType;
  distributionByCarMakeRport: DistributionByCarMake;
  averagePriceOfMostContactedListingsReport: number;
  topContactedListingsPerMonthReport: TopContactedListingsPerMonth;
};

export type AveragePriceBySellerType = {
  seller: string;
  avgPrice: number;
}[];

export type DistributionByCarMake = {
  make: string;
  percentage: number;
}[];

export type TopContactedListingsPerMonth = {
  date: string;
  topFiveListings: {
    ranking: number;
    id: number;
    make: string | undefined;
    price: number | undefined;
    mileage: number | undefined;
    contacts: number;
  }[];
}[];
