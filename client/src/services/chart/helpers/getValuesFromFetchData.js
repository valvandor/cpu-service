'use strict';

/**
 * makes asynchronous parsing from fetch data
 * @param {Object} obj - promise
 * @returns {Object} 
 */
async function getValuesFromFetchData(obj) {
  const datesArray = [];
  const percentsArray = [];
  try {
    const data = obj.data.reverse()
    
    data.forEach(element => {
      percentsArray.push(Math.round(element['percent_usage']));
      datesArray.push(element['time_created']);
    });

    const result = {
      'percentsArray': percentsArray,
      'datesArray': datesArray
    };

    return result;
  } catch (err) {
    console.log(err);
  }
}

export default getValuesFromFetchData