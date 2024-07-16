import { CharacterList } from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharacterSearch';

function CharacterSearchContainer() {
  const characters = useCharacterSearch();

  return (
    <>
      <div className="pt-24" />
      <SearchTitle />
      <CharacterList characters={characters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
