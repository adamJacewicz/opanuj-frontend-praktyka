import { useState } from 'react';
import { CountryList } from '../components/CountryList.tsx';
import { NameField } from '../components/NameField';
import SearchTitle from '../components/SearchTitle';
import SortSelect from '../components/SortSelect';
import { useCountrySearch } from '../hooks/useCountrySearch.ts';
import { sortCountries } from '../utils/sortCountries';
import { GuessingModeField } from '../components/GuessingModeField.tsx';
import { CountryCard } from '../components/CountryCard.tsx';
import { useGuessingMode } from '../hooks/useGuessingMode.ts';

function CountrySearchContainer() {
  const [name, setName] = useState('');
  const countries = useCountrySearch(name);
  const [sortOption, setSortOption] = useState('');
  const [guessingMode, setGuessingMode] = useState(false);
  const { selectedCountry, getRandomCountry, countryName, setCountryName, checkAnswer, isCorrectAnswer, isAnswered } = useGuessingMode(guessingMode);

  const sortedCountries = sortCountries(countries, sortOption);

  return (
    <>
      <div className="pt-24" />
      <SearchTitle />
      <div className="pt-8" />
      <div className="flex justify-center">
        <GuessingModeField value={guessingMode} setValue={setGuessingMode} />
        <form className="space-x-4 flex items-end justify-center">
          {
            guessingMode ? <>
              <NameField name={countryName} setName={setCountryName} />
              <button type="button" onClick={checkAnswer}>Sprawdź</button>
              <button type="button" onClick={getRandomCountry}>Wylosuj ponownie</button>
            </> : <>
              <NameField name={name} setName={setName} />
              <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
            </>
          }
        </form>
      </div>
      <div className="pt-12" />
      {isAnswered && (isCorrectAnswer ? <p>Dobra odpowiedź</p> : <p>Zła odpowiedź</p>)}
      {!guessingMode && <CountryList countries={sortedCountries} />}
      {guessingMode && selectedCountry && <div className="flex justify-center">
        <CountryCard country={selectedCountry} hideName={true} />
      </div>}
      <div className="pt-16" />
    </>
  );
}

export default CountrySearchContainer;
