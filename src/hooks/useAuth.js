import React, { useContext, useState } from 'react';
import { getItemFromStorage } from '../utils/helper';

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const user = getItemFromStorage('user');
  const [isloggedIn, setIsLoggedIn] = useState(!!(user && user.email));

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isloggedIn, login, logout }} {...props} />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
