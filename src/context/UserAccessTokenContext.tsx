import { createContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from "react";

export interface UserAccessTokenInterface {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>
}

const defaultState = {
  accessToken: '',
  setAccessToken: () => ''
} as UserAccessTokenInterface

export const UserAccessTokenContext = createContext(defaultState)

type UserAccessTokenProvideProps = {
  children: ReactNode
}

const localAccessToken = localStorage.getItem("accessToken")

export default function UserAccessTokenProvider({ children }: UserAccessTokenProvideProps) {
  const [accessToken, setAccessToken] = useState<string>(localAccessToken || '');

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);

    if (accessToken === "" || accessToken == undefined) {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken])

  return (
    <UserAccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </UserAccessTokenContext.Provider>
  )
}