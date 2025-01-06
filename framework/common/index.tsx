import { createContext, ReactNode, useContext } from "react";
import { getConfig } from "@framework/api/config"
import { ApiConfig } from "./types/api";

interface ApiProviderProps {
  children: ReactNode | ReactNode[]
    config: ApiConfig | { testKey: string }
}

const config = getConfig()

export const ApiContext = createContext({})
export const ApiProvider = ({
  children,
  config
}: ApiProviderProps) => {

  return (
    <ApiContext.Provider value={
      config}>
      { children }
    </ApiContext.Provider>
  )
}

export const useApiProvider = () => {
  return useContext(ApiContext)
}