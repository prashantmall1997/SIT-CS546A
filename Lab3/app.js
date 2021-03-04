const axios = require("axios").default;

const people = require("./people.js");

const work = require("./work.js");

async function main() {
  try {
    const output = await people.getPersonById(1);
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = await people.howManyPerState("NY");
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = await people.personByAge("NY");
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = await people.peopleMetrics();
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = JSON.stringify(await work.listEmployees());
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = await work.listEmployees();
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = await work.fourOneOne("240-144-7553");
    console.log(output);
  } catch (e) {
    console.log(e);
  }

  try {
    const output = await work.whereDoTheyWork("264-67-0084");
    console.log(output);
  } catch (e) {
    console.log(e);
  }
}

main();
