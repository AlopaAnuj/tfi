import { createContext, useEffect, useState } from "react";
import axios from "axios";
import getNewTokens from "./RefreshTokens";
import countDownTimer from "../components/timeOutCheck";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();
// const TIMEOUT_IN_MS = 120_000; // 2 mins for testing timeout
const TIMEOUT_IN_MS = 40_00_000; // 2 hours

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const refreshTokens = getNewTokens();
  const userTimer = countDownTimer();

  const history = useHistory();

  const onAuthErrored = () => {
    setIsAuthenticated(false);
    history.replace("/logout");
  };

  const timeOutDone = () => {
    history.push(`/timeout`);
    localStorage.clear();
  };

  const logout = async () => {
    let accessToken = localStorage.getItem("accessToken");
    let role = localStorage.getItem("role");
    let url;
    if(role == 1){
      url= "/api/superadminservice/logout"
    } else if(role == 2){
      url= "/api/userservice/logout"
    }
    localStorage.clear();
    setIsAuthenticated(false);
    setUser({});
    return Promise.all[
      (axios({
        method: "delete",
        url: url,
        headers: { "x-access-token": `${accessToken}` },
      }))
    ];
  };

  const changeUser = async (userObj) => {
    if (userObj && userObj.userId) {
      setIsAuthenticated(true);
      setUser(userObj);
    } else {
      logout();
    }
  };

  useEffect(() => {
    userTimer(TIMEOUT_IN_MS, timeOutDone);
    return () => {
      // Anything in here is fired on component unmount.
      userTimer.stopTimer();
    };
  }, []);

  const makeAuthenticatedApiCall = async (method, url, data) => {
    try {
      try {
        userTimer.setServerAccessed();
        let result = await axios({
          headers: { "x-access-token": localStorage.getItem("accessToken") },
          method,
          url,
          data,
        });
        if (result && result.status === 200) {
          if (!isAuthenticated) {
            setIsAuthenticated(true);
          }
          return result;
        } else {
          onAuthErrored();
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          await refreshTokens();
          let result = await axios({
            headers: {
              "x-access-token": localStorage.getItem("accessToken"),
            },
            method,
            url,
            data,
          });
          if (result && result.status === 200) {
            if (!isAuthenticated) {
              setIsAuthenticated(true);
            }
            return result;
          } else {
            onAuthErrored();
          }
        } else {
          return error.response;
        }
        throw error;
      }
    } catch (ex) {
      console.log("ERROR:", ex);
      onAuthErrored();
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        logout,
        changeUser,
        makeAuthenticatedApiCall,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
