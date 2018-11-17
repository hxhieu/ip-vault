#!/usr/bin/env node

const fetch = require('node-fetch');
const getmac = require('getmac');

async function getIP() {
  const ip = await fetch('https://api.ipify.org');
  getmac.getMac(function(err, mac) {
    console.log(mac);
  });
  return await ip.text();
}

getIP().then(x => {
  console.log(x);
});
