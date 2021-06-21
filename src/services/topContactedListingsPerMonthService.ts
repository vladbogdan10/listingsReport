import groupByKey from '../transformers/groupByKeyTransformer';
import { Contact, Listing, TopContactedListingsPerMonth } from '../types';
import { getNumberOfContactsById } from './averagePriceOfMostContactedListingsService';

const topContactedListingsPerMonth = (
  listings: Listing[],
  contacts: Contact[]
): TopContactedListingsPerMonth => {
  const contactsByDate = getContactsByDate(contacts);

  const topFiveListingsByDate = Object.keys(contactsByDate).map((date) => {
    const groupByListingId = groupByKey(contactsByDate[date], 'listing_id');

    const numberOfContactsById = getNumberOfContactsById(groupByListingId);

    const topFive = numberOfContactsById
      .slice(0, 5)
      .map((topListingId, index) => {
        const detailData = listings.find(
          (listing) => listing.id === topListingId.id
        );

        return {
          ranking: index + 1,
          id: topListingId.id,
          make: detailData?.make,
          price: detailData?.price,
          mileage: detailData?.mileage,
          contacts: topListingId.contacts,
        };
      });

    return { date: date, topFiveListings: topFive };
  });

  return sortBydate(topFiveListingsByDate);
};

const getContactsByDate = (contacts: Contact[]) =>
  contacts.reduce((result, contact) => {
    const date = new Date(contact.contact_date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formatedMonth = month < 10 ? `0${month}` : month;
    const monthYear = `${formatedMonth}.${year}`;

    result[monthYear] = (result[monthYear] || []).concat(contact);

    return result;
  }, {} as Record<string, Contact[]>);

const sortBydate = (topFiveListingsByDate: TopContactedListingsPerMonth) => {
  const sortedTopFiveListingsByDate = topFiveListingsByDate.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }

    return 0;
  });

  return sortedTopFiveListingsByDate;
};

export default topContactedListingsPerMonth;
