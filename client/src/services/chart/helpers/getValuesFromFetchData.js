'use strict';
import { getDateAndTimes } from '.'

/**
 * makes asynchronous parsing from fetch data
 * @param {Object} obj - promise
 * @returns {Object} 
 */
async function getValuesFromFetchData(jsonData) {
  const datesArray = [];
  const percentsArray = [];

  try {
    // display from left to right
    const data = jsonData.data.reverse();

    data.forEach(element => {
      let percentEl = Math.round(element['percent_usage']);
      percentsArray.push(percentEl);

      let timeEl = element['time_created'];
      datesArray.push(timeEl);
    });

    const [currentDate, timesArray] = await getDateAndTimes(datesArray);

    const result = {
      'percentsArray': percentsArray,
      'datesArray': timesArray
    };

    return [result, currentDate];
  } catch (err) {
    console.log(err);
  }
}

export default getValuesFromFetchData