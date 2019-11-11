// import moment here; use this package in each function
var moment = require('moment');

const today = () => {
  // write code for dates.today
  let now = moment();
  return now.format('dddd');
  // Test failing even though console log is showing the correct value (macthing with Expected vaue in test result) is beng returned.
}

const calendar = () => {
  // write code for dates.calendar
  let now = moment();
  return now.format('MMM DD, YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
  let now = moment();
  return now.format('hh:mm:ss A');
}

module.exports = {
  today,
  calendar,
  currentTime
}