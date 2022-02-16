'use strict'

async function getDateAndTimes(array) {
  const dateArray = [];
  const timesArray = [];
  let filteredDatesArray = [];

  try {
    array.forEach(element => {
      const [date, time] = element.split('T')
      dateArray.push(date);
      timesArray.push(time);
    });

    dateArray.forEach(element => {
      if (!filteredDatesArray.includes(element)) {
        filteredDatesArray.push(element);
      }
    });

    let currentDate
    if (filteredDatesArray.length === 1){
      currentDate = filteredDatesArray[0];
    } else { // filteredDatesArray.length === 2
      currentDate = `${filteredDatesArray[0]} — ${filteredDatesArray[1]}`;
    }

    return [currentDate, timesArray];
    
  } catch (error) {
    console.log(error);
  }
};

export default getDateAndTimes