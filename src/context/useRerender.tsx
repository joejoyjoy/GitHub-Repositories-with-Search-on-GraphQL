import React from "react";

interface ContextProps {
  rerender: boolean
  setRerender: React.Dispatch<boolean>
}

const InitialValues: ContextProps = {
  rerender: false,
  setRerender: () => undefined
}

interface WithChildProps {
  children: JSX.Element
}

const context = React.createContext(InitialValues)

const { Provider } = context

export const ContextProvider = ({ children }: WithChildProps) => {
  const [rerender, setRerender] = React.useState(InitialValues.rerender)

  const values = {
    rerender,
    setRerender
  }

  return (
    <Provider value={values}>
      {children}
    </Provider>
  )
}

export const useContext = () => {
  const { ...state } = React.useContext(context)
  return { ...state }
}