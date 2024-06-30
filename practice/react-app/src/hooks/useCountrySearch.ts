import { useEffect, useState } from 'react';
import { Country } from '../types/Country.ts';

export function useCountrySearch(name: string) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (name) {
      fetch(
        `https://restcountries.com/v3.1/name/${name}`
      )
        .then((response) => response.json())
        .then((data) => setCountries(data || []))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [name]);

  return countries;
}
