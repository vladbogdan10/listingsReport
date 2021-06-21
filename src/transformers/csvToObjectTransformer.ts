import csvParse from 'csv-parse/lib/sync';
import fs from 'fs';

export function csvToParse<T>(pathToCsv: string): T[] {
  const csvFileData = fs.readFileSync(pathToCsv, { encoding: 'utf8' });

  const parsed: T[] = csvParse(csvFileData, {
    columns: true,
    skip_empty_lines: true,
    cast: function (val, _context) {
      const num = parseInt(val, 0);
      return isNaN(num) ? val : num;
    },
  });

  return parsed;
}
