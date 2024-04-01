let config;

export const initialisePinPointConfig = (idpId, region, pinPointAppId) => {
  let userId = localStorage.getItem("userId");
  config = {
    // To get the AWS Credentials, you need to configure
    // the Auth module with your Cognito Federated Identity Pool
    Auth: {
      identityPoolId: idpId,
      region: region,
    },
    Analytics: {
      autoSessionRecord: true,
      AWSPinpoint: {
        appId: pinPointAppId,
        region: region,
      },
      flushInterval: 10000,
      bufferSize: 10,
    },
  };
  if (userId) {
    config.Analytics.AWSPinpoint.endpoint = {
      userAttributes: {
        uID: [userId],
      },
    };
  }
};

export const awsPinPointConfig = () => {
  return config;
};

export const sessionConfig = {
  enable: true,
  attributes: {
    app_type: "portal",
  },
  getUrl: () => {
    return window.location.pathname;
  },
};

export const pageOptions = {
  enable: true,
  attributes: {
    app_type: "portal",
  },
  type: "SPA",
  getUrl: () => {
    return window.location.pathname;
  },
};
