import React, {useEffect} from 'react';
import {createContext, ReactNode, useState} from 'react';
import {getAccessTokenFromLS, getProfileFromLS} from '../utils/auth';
import {User} from '../types/user.type';

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  profile: User | null;
  setProfile: React.Dispatch<React.SetStateAction<User | null>>;
}
const initialAppContext: AppContextInterface = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  profile: null,
  setProfile: () => {},
};
export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated,
  );
  const [profile, setProfile] = useState<User | null>(
    initialAppContext.profile,
  );
  useEffect(() => {
    const fetchAuth = async () => {
      const token = await getAccessTokenFromLS();
      const user = await getProfileFromLS();
      setIsAuthenticated(Boolean(token));
      setProfile(user);
    };

    fetchAuth();
  }, []);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
      }}>
      {children}
    </AppContext.Provider>
  );
};
