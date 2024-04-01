const genderArray = [{ "label": "Male", "value": "Male" }, { "label": "Female", "value": "Female" }, { "label": "Transgender", "value": "Transgender" }, { "label": "Other", "value": "Other" }]
const stateArray = [
  { "label": "Andhra Pradesh", "value": "Andhra Pradesh" },
  { "label": "Arunachal Pradesh", "value": "Arunachal Pradesh" },
  { "label": "Assam", "value": "Assam" },
  { "label": "Bihar", "value": "Bihar" },
  { "label": "Chhattisgarh", "value": "Chhattisgarh" },
  { "label": "Goa", "value": "Goa" },
  { "label": "Gujarat", "value": "Gujarat" },
  { "label": "Haryana", "value": "Haryana" },
  { "label": "Himachal Pradesh", "value": "Himachal Pradesh" },
  { "label": "Jharkhand", "value": "Jharkhand" },
  { "label": "Karnataka", "value": "Karnataka" },
  { "label": "Kerala", "value": "Kerala" },
  { "label": "Maharashtra", "value": "Maharashtra" },
  { "label": "Madhya Pradesh", "value": "Madhya Pradesh" },
  { "label": "Manipur", "value": "Manipur" },
  { "label": "Meghalaya", "value": "Meghalaya" },
  { "label": "Mizoram", "value": "Mizoram" },
  { "label": "Nagaland", "value": "Nagaland" },
  { "label": "Odisha", "value": "Odisha" },
  { "label": "Punjab", "value": "Punjab" },
  { "label": "Goa", "value": "Goa" },
  { "label": "Rajasthan", "value": "Rajasthan" },
  { "label": "Sikkim", "value": "Sikkim" },
  { "label": "Tamil Nadu", "value": "Tamil Nadu" },
  { "label": "Tripura", "value": "Tripura" },
  { "label": "Telangana", "value": "Telangana" },
  { "label": "Uttar Pradesh", "value": "Uttar Pradesh" },
  { "label": "Uttarakhand", "value": "Uttarakhand" },
  { "label": "West Bengal", "value": "West Bengal" },

  { "label": "Assam Rifles - ARF", "value": "Assam Rifles - ARF" },
  { "label": "Border Security Force - BSF", "value": "Border Security Force - BSF" },
  { "label": "Central Industrial Security Force - CISF", "value": "Central Industrial Security Force - CISF" },
  { "label": "Central Reserve police Force - CRPF", "value": "Central Reserve police Force - CRPF" },
  { "label": "Indo-Tibetan Border Police - ITBP", "value": "Indo-Tibetan Border Police - ITBP" },
  { "label": "Sashastra Seema Bal - SSB", "value": "Sashastra Seema Bal - SSB" },
  { "label": "Services Sports Control Board - SSCB", "value": "Services Sports Control Board - SSCB" },

  { "label": "Andaman & Nicobar (UT)", "value": "Andaman & Nicobar (UT)" },
  { "label": "Chandigarh (UT)", "value": "Chandigarh (UT)" },
  { "label": "Dadra & Nagar Haveli and Daman & Diu (UT)", "value": "Dadra & Nagar Haveli and Daman & Diu (UT)" },
  { "label": "Delhi [National Capital Territory (NCT)]", "value": "Delhi [National Capital Territory (NCT)]" },
  { "label": "Jammu & Kashmir (UT)", "value": "Jammu & Kashmir (UT)" },
  { "label": "Ladakh (UT)", "value": "Ladakh (UT)" },
  { "label": "Lakshadweep (UT)", "value": "Lakshadweep (UT)" },
  { "label": "Puducherry (UT)", "value": "Puducherry (UT)" }
]

const primaryRoleArray = [
  { "label": "Athlete", "value": "Athlete" },
  { "label": "Coach", "value": "Coach" },
  { "label": "Referee", "value": "Referee" },
  { "label": "Doctor", "value": "Doctor" },
  { "label": "Physiotherapist", "value": "Physiotherapist" },
  { "label": "Manager", "value": "Manager" },
  { "label": "Media", "value": "Media" },
  { "label": "Fan", "value": "Fan" },
  { "label": "Official", "value": "Official" }
]
const userRole = [{ "label": "State Admin", "value": 2}]

exports.secondaryRoleArray = [
  { "label": "Athlete", "value": "Athlete" },
  { "label": "Coach", "value": "Coach" },
  { "label": "Referee", "value": "Referee" },
  { "label": "Doctor", "value": "Doctor" },
  { "label": "Physiotherapist", "value": "Physiotherapist" },
  { "label": "Manager", "value": "Manager" },
  { "label": "Media", "value": "Media" },
  { "label": "Fan", "value": "Fan" },
  { "label": "Official", "value": "Official" }
]

exports.refrenceRoleArray = [
  { "label": "Athlete", "value": "Athlete" },
  { "label": "Coach", "value": "Coach" },
  { "label": "Referee", "value": "Referee" },
  { "label": "Doctor", "value": "Doctor" },
  { "label": "Physiotherapist", "value": "Physiotherapist" },
  { "label": "Manager", "value": "Manager" },
  { "label": "Media", "value": "Media" },
  { "label": "Fan", "value": "Fan" },
  { "label": "Official", "value": "Official" }
]

exports.getGender = (gender, isObject) => {
  let selectedGender;
  genderArray.forEach((item) => {
    if (item.value === gender) {
      selectedGender = isObject ? item : item.label;
    }
  });
  return selectedGender;
};

exports.getState = (state, isObject) => {
  let selectedState;
  stateArray.forEach((item) => {
    if (item.value === state) {
      selectedState = isObject ? item : item.label;
    }
  });
  return selectedState;
};

exports.getPrimaryRole = (primaryRole, isObject) => {
  let selectedprimaryRole;
  primaryRoleArray.forEach((item) => {
    if (item.value === primaryRole) {
      selectedprimaryRole = isObject ? item : item.label;
    }
  });
  return selectedprimaryRole;
};
exports.getSecondaryRole = (secondaryRole, isObject) => {
  let selectedSecondaryRole;
  primaryRoleArray.forEach((item) => {
    if (item.value === secondaryRole) {
      selectedSecondaryRole = isObject ? item : item.label;
    }
  });
  return selectedSecondaryRole;
};

exports.getUserRole = (userRole, isObject) => {
  let selecteduserRole;
  userRole.forEach((item) => {
    if (item.value === userRole) {
      selecteduserRole = isObject ? item : item.label;
    }
  });
  return selecteduserRole;
}
exports.userRole = userRole;
exports.genderArray = genderArray;
exports.stateArray = stateArray;
exports.primaryRoleArray = primaryRoleArray;
