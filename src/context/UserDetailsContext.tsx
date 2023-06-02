import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

export interface UserDetailsInterface {
  userDetails: any;
  setUserDetails: Dispatch<SetStateAction<any>>
}

const defaultState = {
  userDetails: [],
  setUserDetails: () => []
} as UserDetailsInterface

export const UserDetailsContext = createContext(defaultState)

type UserDetailsProvideProps = {
  children: ReactNode
}

export default function UserDetailsProvider({ children }: UserDetailsProvideProps) {
  const [userDetails, setUserDetails] = useState<any>([]);

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailsContext.Provider>
  )
}