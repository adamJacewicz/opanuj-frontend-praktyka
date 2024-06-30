import { useCallback, useEffect, useState } from 'react';
import { Country } from '../types/Country.ts';
import { randomInt } from '../utils/randomInt.ts';

export function useGuessingMode(guessingMode: boolean) {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [countryName, setCountryName] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (guessingMode && !allCountries.length) {
      fetch(
        `https://restcountries.com/v3.1/all`
      )
        .then((response) => response.json())
        .then((data) => {
          setAllCountries(data)
          setSelectedCountry(data[randomInt(0, data.length)])
        })
        .catch((error) => console.error('Error fetching data:', error));

    }
  }, [guessingMode, allCountries]);

  const getRandomCountry = useCallback(() => {
    setSelectedCountry(allCountries[randomInt(0, allCountries.length)])
    setIsAnswered(false)
  }, [allCountries]);


  const checkAnswer = useCallback(() => {
    setIsCorrectAnswer(countryName.toLowerCase() === selectedCountry?.name.common.toLowerCase());
    setIsAnswered(true)
  }, [countryName, selectedCountry]);


  return {
    selectedCountry, getRandomCountry, countryName, setCountryName, checkAnswer, isCorrectAnswer, isAnswered
  };
}
