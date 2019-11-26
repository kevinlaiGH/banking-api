#!/bin/bash
unzip -o banking-api.zip
cd banking-api
npm i
sudo npm install forever -g
# kill all the port
forever stopall
# restart the server in the port
forever start -a index.js
