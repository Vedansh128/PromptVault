import { createContext, useContext, useState, useEffect } from "react";

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (prompt) => {

    const exists = favorites.find(
      (item) => item.id === prompt.id
    );

    if (exists) {
      setFavorites(
        favorites.filter((item) => item.id !== prompt.id)
      );
    } else {
      setFavorites([...favorites, prompt]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <PromptContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export const usePrompt = () => useContext(PromptContext);