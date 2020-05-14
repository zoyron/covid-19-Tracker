// inside this fill we can function that will fetch
// the data that we need

import axios from "axios";

// following is the api that we will be using to fetch the required data
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    //try will be executed if the fetch is successfull, else the catch block will be executed

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
