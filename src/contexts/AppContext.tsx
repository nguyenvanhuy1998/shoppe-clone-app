import React, {useEffect} from 'react';
import {createContext, ReactNode, useState} from 'react';
import {getAccessTokenFromLS} from '../utils/auth';

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialAppContext: AppContextInterface = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};
export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated,
  );
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessTokenFromLS();
      setIsAuthenticated(Boolean(token));
    };

    fetchToken();
  }, []);

  console.log('isAuthenticated', isAuthenticated);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}>
      {children}
    </AppContext.Provider>
  );
};
