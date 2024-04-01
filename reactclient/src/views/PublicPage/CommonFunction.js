exports.createUserObject = (userData) => {
    return {
      isAuthenticated: true,
      // userrole: userData.userrole,
      // firstName: userData.firstName,
      // lastName: userData.lastName,
      userId: userData.role,
      // cellNumber: userData.cellNumber,
    };
  };