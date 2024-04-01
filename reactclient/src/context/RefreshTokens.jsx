import axios from "axios";
export default function getNewToken() {
  let refreshingPromise = null;
  return async function () {
    if (!refreshingPromise) {
      refreshingPromise = axios({
        method: "post",
        url: "/api/userauthservice/accessTokenByRefreshToken",
        data: {
          refreshToken: localStorage.getItem("refreshToken"),
          tzOffset: new Date().getTimezoneOffset() * -1,
        },
      });
      let refreshResult;
      try {
        refreshResult = await refreshingPromise;
        if (refreshResult.status === 200) {
          localStorage.setItem("accessToken", refreshResult.data.accessToken);
          localStorage.setItem("refreshToken", refreshResult.data.refreshToken);
        }
      } finally {
        refreshingPromise = null;
      }
      return refreshResult;
    }
    return refreshingPromise;
  };
}
