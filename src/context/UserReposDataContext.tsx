import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export interface UserReposDataInterface {
  userRepos: any;
  setUserRepos: Dispatch<SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  userRepos: [],
  setUserRepos: () => [],
  isLoading: true,
  setIsLoading: () => true,
} as UserReposDataInterface

export const UserReposDataContext = createContext(defaultState)

type UserReposDataProvideProps = {
  children: ReactNode
}

export default function UserReposDataProvider({ children }: UserReposDataProvideProps) {
  const [userRepos, setUserRepos] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <UserReposDataContext.Provider value={{ userRepos, setUserRepos, isLoading, setIsLoading }}>
      {children}
    </UserReposDataContext.Provider>
  )
}