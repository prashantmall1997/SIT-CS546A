const axios = require("axios").default;

// const { getPersonById } = require("./people.js");

async function getPeople() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  //   const parsedData = JSON.parse(data); // parse the data from JSON into a normal JS Object
  //   return parsedData; // this will be the array of people objects
  return data;
}

async function getWork() {
  const { data } = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  //   const parsedData = JSON.parse(data); // parse the data from JSON into a normal JS Object
  //   return parsedData; // this will be the array of people objects
  return data;
}

async function listEmployees() {
  let peopleData = await getPeople();
  let workData = await getWork();

  var result = [];
  var resultObject = {
    company_name: "",
    employees: [],
  };
  var employeeName = {
    first_name: "",
    last_name: "",
  };

  for (let counter = 0; counter < workData.length; counter++) {
    resultObject.company_name = workData[counter].company_name;
    for (
      let employeeCount = 0;
      employeeCount < workData[counter].employees.length;
      employeeCount++
    ) {
      // var employeeDetails = await getPersonById(workData[counter].employees[employeeCount]);
      for (
        let peopleCounter = 0;
        peopleCounter < peopleData.length;
        peopleCounter++
      ) {
        if (
          peopleData[peopleCounter].id ===
          workData[counter].employees[employeeCount]
        ) {
          var employeeDetails = peopleData[peopleCounter];
          break;
        }
      }

      employeeName.first_name = employeeDetails.first_name;
      employeeName.last_name = employeeDetails.last_name;
      resultObject.employees.push(employeeName);
      employeeName = {
        first_name: "",
        last_name: "",
      };
    }
    result.push(resultObject);
    resultObject = {
      company_name: "",
      employees: [],
    };
  }
  return result;
}

async function fourOneOne(phoneNumber) {
  if (phoneNumber === undefined) {
    throw "No phoneNumber was passed.";
  }
  if (typeof phoneNumber !== "string") {
    throw "Passed phoneNumber is not a string.";
  }

  var regEx = /^[0-9]{3}?[-][0-9]{3}?[-][0-9]{4}?$/;

  if (!phoneNumber.match(regEx)) {
    throw "Passed phoneNumber is not in correct format or is invalid.";
  }

  var result = {};

  let workData = await getWork();

  for (let counter = 0; counter < workData.length; counter++) {
    if (workData[counter].company_phone === phoneNumber) {
      result.company_name = workData[counter].company_name;
      result.company_address = workData[counter].company_address;
    }
  }

  if (result.company_name === undefined) {
    throw "Nothing exists for that phone number";
  } else {
    return result;
  }
}

async function whereDoTheyWork(ssn) {
  if (ssn === undefined) {
    throw "No ssn was passed.";
  }
  if (typeof ssn !== "string") {
    throw "Passed ssn is not a string.";
  }

  var regEx = /^[0-9]{3}?[-][0-9]{2}?[-][0-9]{4}?$/;

  if (!ssn.match(regEx)) {
    throw "Passed ssn is not in correct format or is invalid.";
  }

  var resultName = "";
  var resultID = 0;
  var resultCompany = "";

  let workData = await getWork();

  let peopleData = await getPeople();

  for (let counter = 0; counter < peopleData.length; counter++) {
    if (peopleData[counter].ssn === ssn) {
      resultName =
        peopleData[counter].first_name + " " + peopleData[counter].last_name;
      resultID = peopleData[counter].id;
      break;
    }
  }

  if (resultName === "") {
    throw "No one exists with that SSN.";
  }

  for (let counter = 0; counter < workData.length; counter++) {
    for (
      let employeeID = 0;
      employeeID < workData[counter].employees.length;
      employeeID++
    ) {
      if (workData[counter].employees[employeeID] === resultID) {
        resultCompany = workData[counter].company_name;
        return `${resultName} works at ${resultCompany}.`;
      }
    }
  }
}

module.exports = {
  listEmployees,
  fourOneOne,
  whereDoTheyWork,
};
