exports.createUserObject = (userData) => {
  return {
    isAuthenticated: true,
    // userrole: userData.role,
    userId: userData.userId, 
    stateName: userData.stateName,
  };
};

const userStatus = {
  "Pending": 1,
  "Request To Approve": 2,
  "Request To Change": 3,
  "Approved by Admin": 4,
  "Deleted": 5,
  "Inactive": 6
};

exports.makeTheOptions = (data) => {
  let statusString = '';
  for (const [key, value] of Object.entries(userStatus)) {
    if (value === data) {
      statusString = key;
    }
  }
  return statusString;
};