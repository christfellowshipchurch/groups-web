import React, {
  useReducer,
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';

const initialState = '';
const localState =
  typeof window === 'undefined'
    ? ''
    : localStorage.getItem(process.env.AUTH_TOKEN_KEY);
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const reducer = (token, newToken) => {
  if (newToken === null) {
    localStorage.removeItem(process.env.AUTH_TOKEN_KEY);
    return initialState;
  }
  return newToken || token;
};

const AuthProvider = (props) => {
  const [triggerLogIn, setTriggerLogIn] = useState(false);
  const [token, setToken] = useReducer(reducer, localState || initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const logout = () => {
    setToken(null);
  };

  useEffect(() => {
    localStorage.setItem(process.env.AUTH_TOKEN_KEY, token);
    setIsLoggedIn(!!token);
  }, [token]);

  let authValue = {};
  if (typeof window === 'undefined') {
    authValue = {
      token: '',
      setToken: () => {},
      isLoggedIn: false,
      logout: () => {},
      triggerLogIn,
      logIn: () => {},
      hideLogIn: () => {},
    };
  } else {
    authValue = {
      token,
      setToken,
      isLoggedIn,
      logout,
      triggerLogIn,
      logIn: () => {
        if (!isLoggedIn) setTriggerLogIn(true);
      },
      hideLogIn: () => setTriggerLogIn(false),
    };
  }

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
