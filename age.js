const moment = require('moment');

function age(dateStr){

  let birthMoment = moment(birth, "MM-DD-YYYY"); // another date

  let age_ms = birthMoment.diff(moment());

  let duration = moment.duration(age_ms).humanize(true);

  return `$birthMoment.format('LL')} was ${duration}\n`;
}

exports = age;
