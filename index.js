#!/usr/bin/env node

const lookup = require('dns-lookup');
const chalk = require('chalk');
const path = require('path');
require('dotenv').config({ path: path.resolve(`${__dirname}/../../.env`) });

const host = process.env.HOST;

if (!host) {
  return;
}

lookup(host, function (err, address, family) {
  if (address && address.split(':').pop() === '127.0.0.1') {
    process.exit(0);
  } else {
    console.log(chalk.bgRed.bold.white('Hosts file not configured\n'));
    console.log('Please run the following first:');
    console.log(
      chalk.bold.white(
        `sudo bash -c "echo \\"127.0.0.1 ${host}\\" >> /etc/hosts"\n`
      )
    );
    process.exit(1);
  }
});
