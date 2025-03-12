#!/bin/node
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const fs = require('fs');
// Obtain the environment string passed to the node script
const environment = process.argv[2];
// read the content of the json file
const envFileContent = require(`./envs/${environment}.json`);
// copy the json inside the env.json file
fs.writeFileSync('env.json', JSON.stringify(envFileContent, undefined, 2));
