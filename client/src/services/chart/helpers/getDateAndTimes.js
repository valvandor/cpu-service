'use strict'
import moment from 'moment';

moment.locale('ru');

function getDataObjForCurrentTZ(dateTimeString, timeZoneOffsetInHours) {
  try {
    return moment(dateTimeString).subtract(timeZoneOffsetInHours, 'hours');
  } catch(err){
    console.log(err);
  }
}

function getCurrentDate(dateArray) {
  const filteredDatesArray = [];

  try {
    dateArray.forEach(date => {
      if (!filteredDatesArray.includes(date)) {
        filteredDatesArray.push(date);
      }
    });

    let currentDate
    if (filteredDatesArray.length === 1){
      currentDate = filteredDatesArray[0];
    } else { // should be filteredDatesArray.length === 2
      // include both values at the turn of the day
      currentDate = `${filteredDatesArray[0]} — ${filteredDatesArray[1]}`;
    }
    return currentDate;
  } catch(err){
    console.log(err);
  }
}

async function getCurrentTimeZoneOffsetInHours(dateTime) {
  try {
    return dateTime.getTimezoneOffset() / 60;
  } catch(err){
    console.log(err);
  }
}

async function getDateAndTimes(array) {
  try {
    const dateArray = [];
    const timesArray = [];

    const offset = await getCurrentTimeZoneOffsetInHours(new Date(array[0]))

    array.forEach(date => { 
      const data = getDataObjForCurrentTZ(date, offset);
      timesArray.push(data.format('LTS'));
      dateArray.push(data.format('ll'));
    });

    const currentDate = getCurrentDate(dateArray)

    return [currentDate, timesArray];
  } catch (error) {
    console.log(error)
  }
};

export default getDateAndTimes