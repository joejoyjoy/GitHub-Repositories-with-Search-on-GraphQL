import { createContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from "react";

export interface UserAccessTokenInterface {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  accessToken: '',
  setAccessToken: () => '',
  isLoading: false,
  setIsLoading: () => false,
} as UserAccessTokenInterface

export const UserAccessTokenContext = createContext(defaultState)

type UserAccessTokenProvideProps = {
  children: ReactNode
}

const localAccessToken = localStorage.getItem("accessToken")

export default function UserAccessTokenProvider({ children }: UserAccessTokenProvideProps) {
  const [accessToken, setAccessToken] = useState<string>(localAccessToken || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);

    if (accessToken === "" || accessToken == undefined) {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken])

  return (
    <UserAccessTokenContext.Provider value={{ accessToken, setAccessToken, isLoading, setIsLoading }}>
      {children}
    </UserAccessTokenContext.Provider>
  )
}