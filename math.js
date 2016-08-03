const moment = require('moment');

module.exports = function(num, res){
  let square = Math.pow(num, 2);
  res.write(`${square}`);
  res.end('\n');
}

module.exports = function(num) {
  let add = sum + num;
  res.write(`${add}`);
  res.end();
}

module.exports  = function(num) {
  let sub = sum - num;
  res.write(`${sub}`);
  res.end();
}

module.exports = function(num) {
  let mult = num * 2;
  res.write(`${mult}`);
  res.end();
}

module.exports = function(num) {
  let div = sum / num;
  res.write(`${div}`);
  res.end();
}

module.exports = function(dateStr){
  let birthMoment = moment(birth, "MM-DD-YYYY"); 
  let age = birthMoment.diff(moment());
  let duration = moment.duration(age).humanize(true);
  return `$birthMoment.format('LL')} was ${duration}\n`;
}

module.exports = function(input) {
  let answer = ['Absolutely', 'Probably', 'Nobody Knows', 'Yes', 
  'Maybe', 'Looks Like Rain', 'I have no Idea'];
  return answer[ Math.floor( Math.random() * answer.length ) ];
}

module.exports = function(str){
  let words = str.split(' ');
  let wcount = words.length;
  let spaces = wcount - 1;
  let char = str.length;
  let avg = Math.floor((char - spaces) / wcount); 
  return {
    'Word count': wcount,
    'Character count': char,
    'Average word length': avg
}


