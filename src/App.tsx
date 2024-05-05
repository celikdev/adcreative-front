import { useState } from "react";
import { Content } from "./components/ui";
import Input from "./components/ui/Input";
import { useGetCharacterQuery } from "./services/main";
import { CloseIcon } from "./assets/Icons";

interface Character {
  created: string;
  episode: [];
  gender: string;
  id: number;
  image: string;
  location: Object;
  name: string;
  origin: Object;
  species: string;
  status: string;
  type: string;
  url: string;
}

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<any>([]);

  const {
    data: characterData,
    isLoading: characterIsLoading,
    error: characterIsError,
  } = useGetCharacterQuery(searchQuery);

  const makeBold = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    );
  };

  return (
    <Content>
      <div className="border-2 p-2 rounded-lg w-1/2 mx-auto border-primary flex flex-col">
        <Input
          placeholder="Search characters"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {selectedCharacter.length > 0 && (
          <div className="flex gap-2 pt-2 overflow-x-auto flex-nowrap horizontal-scroll w-full">
            {selectedCharacter.reverse().map((character: Character) => (
              <button
                onClick={() =>
                  setSelectedCharacter((prev: Character[]) =>
                    prev.filter((c: Character) => c.id !== character.id)
                  )
                }
                key={character.id}
                className="flex items-center gap-2 bg-secondary rounded-lg w-max px-2"
              >
                <h1 className="text-sm font-semibold">{character.name}</h1>
                <CloseIcon />
              </button>
            ))}
          </div>
        )}
        {characterIsLoading ? (
          <h1 className="text-center py-2 font-semibold">Loading...</h1>
        ) : searchQuery ? (
          characterIsError ? (
            <h1 className="text-red-400 text-center py-2">
              Arama Sonucu Bulunamadı!
            </h1>
          ) : (
            <div className="border-2 rounded-xl my-2 flex flex-col">
              {characterData?.results.map(
                (character: Character, index: number) => (
                  <>
                    <button
                      onClick={() =>
                        setSelectedCharacter((prev: Character[]) => {
                          return !prev.find(
                            (prevCharacter) => prevCharacter.id === character.id
                          )
                            ? [...prev, character]
                            : [...prev.filter((c) => c.id !== character.id)];
                        })
                      }
                      key={character.id}
                      className="flex items-center gap-4 py-2 px-4"
                    >
                      <input
                        type="checkbox"
                        className="w-6 h-6"
                        checked={selectedCharacter.find(
                          (c: Character) => c.id === character.id
                        )}
                        onChange={() => {}}
                      />
                      <img
                        src={character.image}
                        alt="CharacterImage"
                        className="w-16 h-16 rounded-lg"
                      />
                      <span className="flex flex-col items-start text-text">
                        <h1>{makeBold(character.name, searchQuery)}</h1>
                        <h1>{character.episode.length} Episodes</h1>
                      </span>
                    </button>
                    {index !== characterData.results.length - 1 && (
                      <hr className="border-primary" />
                    )}
                  </>
                )
              )}
            </div>
          )
        ) : (
          <h1 className="text-center py-2 font-semibold text-sm">
            Başlamak İçin Arama Yapın!
          </h1>
        )}
      </div>
    </Content>
  );
};

export default App;
