import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export interface UserReposDataInterface {
  userRepos: any;
  setUserRepos: Dispatch<SetStateAction<any>>
}

const defaultState = {
  userRepos: [],
  setUserRepos: () => []
} as UserReposDataInterface

export const UserReposDataContext = createContext(defaultState)

type UserReposDataProvideProps = {
  children: ReactNode
}

export default function UserReposDataProvider({ children }: UserReposDataProvideProps) {
  const [userRepos, setUserRepos] = useState<any>([]);

  return (
    <UserReposDataContext.Provider value={{ userRepos, setUserRepos }}>
      {children}
    </UserReposDataContext.Provider>
  )
}