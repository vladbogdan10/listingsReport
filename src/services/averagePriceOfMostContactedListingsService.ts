import groupByKey from '../transformers/groupByKeyTransformer';
import { Contact, Listing } from '../types';

const averagePriceOfMostContactedListings = (
  listings: Listing[],
  contacts: Contact[]
): number => {
  const groupByListingIdMap = groupByKey(contacts, 'listing_id');

  const numberOfContactsById = getNumberOfContactsById(groupByListingIdMap);

  const thirtyPercIndex = (numberOfContactsById.length / 100) * 30;

  const thirtyPercMostContactedIds = numberOfContactsById.slice(
    0,
    thirtyPercIndex
  );

  const averagePriceOfMostContactedListings = calculateAveragePriceOfMostContactedListings(
    thirtyPercMostContactedIds,
    listings
  );

  return averagePriceOfMostContactedListings;
};

export const getNumberOfContactsById = (
  groupByListingIdMap: Record<number, Contact[]>
) => {
  const numberOfContactsById = Object.keys(groupByListingIdMap).map((id) => {
    const noOfContacts = groupByListingIdMap[parseInt(id)].length;
    return { id: parseInt(id), contacts: noOfContacts };
  });

  const sortedContactsById = numberOfContactsById.sort((a, b) => {
    return b.contacts - a.contacts;
  });

  return sortedContactsById;
};

const calculateAveragePriceOfMostContactedListings = (
  mostContactedListings: { id: number; contacts: number }[],
  listings: Listing[]
) => {
  const sum = mostContactedListings.reduce((acc, curr) => {
    const price = listings.find((listing) => listing.id === curr.id)?.price;
    return price ? acc + price : acc;
  }, 0);

  return sum / mostContactedListings.length;
};

export default averagePriceOfMostContactedListings;
