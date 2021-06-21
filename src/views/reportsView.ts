import { Reports } from '../types';
import { priceFormatter, toNumberString } from '../utils/numberFormatter';
import { html } from './base';

export function reportsView(reports: Reports) {
  const averagePriceBySellerBlock = `
    <section class="two-col">
      <h2>Average Listing Selling Price per Seller Type</h2>
      <div>
        <p>
          <span><strong>Seller</strong></span>
          <span><strong>Avg. Price</strong></span>
        </p>
        ${reports.averagePriceBySellerReport
          .map((data) => {
            return `
              <p>
                <span>${data.seller}</span>
                <span>${priceFormatter(data.avgPrice)}</span>
              </p>
            `;
          })
          .join('')}
      </div>
    </section>
  `;

  const distributionByCarMakeRportBlock = `
    <section class="two-col">
      <h2>Percentual distribution of available cars by Make</h2>
      <div>
        <p>
          <span><strong>Make</strong></span>
          <span><strong>Distribution</strong></span>
        </p>
        ${reports.distributionByCarMakeRport
          .map((data) => {
            return `
              <p>
                <span>${data.make}</span>
                <span>${data.percentage}%</span>
              </p>
            `;
          })
          .join('')}
      </div>
    </section>
  `;

  const averagePriceOfMostContactedListingsReportBlock = `
    <section class="two-col">
      <h2>Average price of the 30% most contacted listings</h2>
      <div>
        <p>
          <span><strong>Average Price</strong></span>
        </p>
        <p>${priceFormatter(
          reports.averagePriceOfMostContactedListingsReport
        )}</p>
      </div>
    </section>
  `;

  const topContactedListingsPerMonthReportBlock = `
    <section class="six-col">
      <h2>The Top 5 most contacted listings per Month</h2>
      ${reports.topContactedListingsPerMonthReport
        .map((data) => {
          return `
          <h3>${data.date}</h3>
          <div>
            <p>
              <span><strong>Ranking</strong></span>
              <span><strong>Listing Id</strong></span>
              <span><strong>Make</strong></span>
              <span><strong>Selling Price</strong></span>
              <span><strong>Mileage</strong></span>
              <span><strong>Total Amount of contacts</strong></span>
            </p>
              ${data.topFiveListings
                .map((listing) => {
                  return `
                    <p>
                      <span>${listing.ranking}</span>
                      <span>${listing.id}</span>
                      <span>${listing.make}</span>
                      <span>${
                        listing.price && priceFormatter(listing.price)
                      }</span>
                      <span>${
                        listing.mileage && toNumberString(listing.mileage)
                      } KM</span>
                      <span>${listing.contacts}</span>
                    </p>
                  `;
                })
                .join('')}
            </div>
          `;
        })
        .join('')}
    </section>
  `;

  return html(
    `${averagePriceBySellerBlock}
    ${distributionByCarMakeRportBlock}
    ${averagePriceOfMostContactedListingsReportBlock}
    ${topContactedListingsPerMonthReportBlock}`
  );
}
