'use strict';

const PORT = 3000;
const _ = require('lodash');
const http = require('http');
const moment = require('moment');
const md5 = require('md5');
const age = require('./age');


const server = http.createServer((req, res) =>{ 
  let urlParts = req.url.match(/[^/]+/g) || [];                                                 
  let path = urlParts[0]; 
  
  if(path === 'square'){
    let [data] = req.url.split('/'); 

    switch(path) {
      case 'square':
        let num = parseInt(urlParts[1]);
        require('./square')(num, res);
        break;

      case 'add':
        let sum = sum + num;
        require('./add')(num, res);
        break;

      case 'sub':
        let sub = sum - num;
        require('./sub')(num, res);

      case 'mult':
        let mult = num * 2;
        require('./mult')(num, res);
        break;

      case 'div':
        let div = sum / num;
        require('./div')(num, res);
        break;

      case 'age':
        let birthStr = urlParts[1]; //todays date
        res.write(age(birthStr));
        res.end();
        break;

      case 'gravatar':
        let avatar = gravatar.get(path);
        res.writeHead(200, {'Content-Type': 'text/html' });
        res.write(`${link}`);
        res.end();
        break;
        
      case 'wordcounter':
        let wordcounter = decodeURI(input[0]);
        let words = str.split(' ');
        res.write(wcount);
        res.write(char);
        res.write(avg);
        res.end();
      break;
    
      default:
        res.statusCode = 404;  
        res.end('Not Found.\n');
      }
  }

});


server.listen(PORT, err =>{
  console.log(err || 'Server listening on port ${PORT}') 
});
