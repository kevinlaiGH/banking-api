#!/bin/bash
unzip -o banking-api.zip
cd banking-api
npm i
sudo npm install forever -g
forever start -a index.js
