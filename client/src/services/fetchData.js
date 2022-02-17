'use strict'

/**
 * Makes an asynchronous request to the server via API
 * @param { string } url 
 * @returns { Object } - Promise  
 */
async function fetchJsonData(url) {
  try {
    const response = await fetch(url,
      {
          method: 'GET',
          headers: { 
            'X-Requested-With': 'XMLHttpRequest',
          }
      }
    );
    return await response.json();
  } catch(err) {
    console.log(err); 
  }
}


export default fetchJsonData