import { useEffect, useState } from 'react';
import { Character, DefaultApi } from '../api';

export function useCharacterSearch() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const api = new DefaultApi()
    api.getCharacters()
      .then((data) => setCharacters(data.results || []))
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return characters;
}
