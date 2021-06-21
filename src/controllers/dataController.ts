import { Request, Response, NextFunction } from 'express';
import getReports from '../services/reportsService';
import { csvToParse } from '../transformers/csvToObjectTransformer';
import { Contact, Listing } from '../types';

export async function index(_req: Request, res: Response, next: NextFunction) {
  try {
    const listings = csvToParse<Listing>('./csvData/listings.csv');
    const contacts = csvToParse<Contact>('./csvData/contacts.csv');

    const reports = getReports(listings, contacts);

    if (!reports) {
      throw new Error('No reports available!');
    }

    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(404);

    next('not found 404');
  }
}
