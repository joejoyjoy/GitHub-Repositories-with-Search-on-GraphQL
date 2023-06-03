import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export interface SearchUserReposInterface {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultState = {
  keyword: '',
  setKeyword: () => '',
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  },
} as SearchUserReposInterface

export const SearchUserReposContext = createContext(defaultState)

type SearchUserReposProvideProps = {
  children: ReactNode
}

export default function SearchUserReposProvider({ children }: SearchUserReposProvideProps) {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }

  return (
    <SearchUserReposContext.Provider value={{ keyword, setKeyword, handleSearch }}>
      {children}
    </SearchUserReposContext.Provider>
  )
}