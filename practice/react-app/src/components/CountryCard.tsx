import { Country } from '../types/Country.ts';

export function CountryCard({ country, hideName = false }: { country: Country, hideName?: boolean  }) {
  return (
    <>
      {!hideName && <h3>{country.name.common}</h3>}
      <img className="aspect-[1.5/1]" src={country.flags.png} alt={country.name.official} />
    </>
  );
}
