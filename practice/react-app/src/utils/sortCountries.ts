import { Country } from '../types/Country.ts';

export function sortCountries(
  characters: Country[],
  sortOption: string
): Country[] {
  return [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.common.localeCompare(b.name.common);
    } else if (sortOption === 'population') {
      return a.population - b.population;
    }
    return 0;
  });
}
